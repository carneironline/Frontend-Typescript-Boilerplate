function getCookie(name) {
    match = document.cookie.match(new RegExp(name+'=([^;]+)'));
    var cookieTiny = match ? unescape(match[1].toString()) : "";
    return cookieTiny;
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString()) +
        "; path=/;" + "domain=" + location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0];
}

function getLinkAssinatura (link) {
    for (var i = 0; i < link.length; i++) {
        if (link[i].rel == 'assinatura') return link[i].href;
    }
    return '';
}

async function requestBus(funcionalidade, data, ambiente) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", getBusURL(ambiente, funcionalidade), false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);

    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var resposta = await xhr.responseText;
            var respJson = JSON.parse(resposta);
            var respostaDeTermoDeUso = false, respostaDeMotivo = '', hrefAssinaturaInadimplente = '';
            if (typeof respJson.motivo != "undefined") {
                respostaDeMotivo = respJson.motivo.toLowerCase();
            }
            if (typeof respJson.temTermoDeUso != "undefined") {
                respostaDeTermoDeUso = respJson.temTermoDeUso;
            }
            if (typeof respJson.link != "undefined") {
                hrefAssinaturaInadimplente = getLinkAssinatura(respJson.link);
            }
            var isAutorizado = respJson.autorizado || respJson.temTermoDeUso != false ? true : false;
            var _jsonLeitor = {
                    "autorizado" : respJson.autorizado,
                    "motivo": respostaDeMotivo,
                    "logado": isAutorizado,
                    "temTermoDeUso": respostaDeTermoDeUso,
                    "glbid": getCookie('GLBID'),
                    "produto": getParametroDaQueryStringPeloNome('nomeProduto'),
                    "codProduto": getParametroDaQueryStringPeloNome('codigoProduto'),
                    "uuid": respJson.usuarioId
                };

             return _jsonLeitor;
        }else{
            console.error('Erro na requisição', xhr.response);
        }
    }
}

function getBusURL(ambiente, funcionalidade) {
    if (ambiente === 'qlt' || ambiente === 'int'){
        return 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/' + funcionalidade + '/autorizacao-acesso'
    }else{
        return 'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/'+ funcionalidade +'/autorizacao-acesso'
    }
}

function getGloboIdURL(ambiente){
    if (ambiente === 'qlt' || ambiente === 'int'){
        return 'https://login.qa.globoi.com/login/4975'
    }else{
        return 'https://login.globo.com/login/4975'
    }
}

function getParametroDaQueryStringPeloNome(parametro) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

(async function() {

   var data = JSON.stringify({
        "token-autenticacao": getCookie('GLBID'),
        "ipUsuario": '127.0.0.1',
        "codigoProduto": getParametroDaQueryStringPeloNome("codigoProduto")
    });

    var responseAssinatura = await requestBus(getParametroDaQueryStringPeloNome("serviceId"), data, getParametroDaQueryStringPeloNome("ambienteUtilizado"));

    if(responseAssinatura.motivo !== 'indisponivel' || hrefAssinaturaInadimplente == '') {
        var userTiny = btoa(encodeURI(JSON.stringify(responseAssinatura)));
        setCookie("_utp",userTiny, 1);
    }

    if (responseAssinatura.motivo === "autorizado") {
        window.location = getParametroDaQueryStringPeloNome("urlRetorno");
    } else {
        window.location = getGloboIdURL(getParametroDaQueryStringPeloNome("ambienteUtilizado")) +'?url='+ encodeURIComponent(getParametroDaQueryStringPeloNome("urlRetorno"));
    }

})();


