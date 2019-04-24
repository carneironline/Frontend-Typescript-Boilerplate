function getParamValues() {
    var search = location.search.substring(1);
    var jsonParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    
    return jsonParams;
}

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
            return respJson;
        }else{
            console.error('Erro na requisição', xhr.response);
        }
    }
}

function getBusURL(ambiente, funcionalidade) {
    if (ambiente === 'QLT' || ambiente === 'INT'){
        return 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/' + funcionalidade + '/autorizacao-acesso'
    }else{
        return 'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/'+ funcionalidade +'/autorizacao-acesso'
    }
}

function getGloboIdURL(ambiente){
    if (ambiente === 'QLT' || ambiente === 'INT'){
        return 'https://login.qa.globoi.com/login/4975'
    }else{
        return 'https://login.globo.com/login/4975'
    }
}


(async function() {

    var params = getParamValues();

    var data = JSON.stringify({
        "token-autenticacao": getCookie('GLBID'),
        "ipUsuario": '127.0.0.1',
        "codigoProduto": params.codigoProduto
    });

    var responseAssinatura = await requestBus(params.serviceId, data, params.ambienteUtilizado);

    var userTiny = btoa(encodeURI(JSON.stringify(responseAssinatura)))
    setCookie("_utp",userTiny, 1);

    if (responseAssinatura.motivo === "AUTORIZADO") {
        window.location = params.urlRetorno;
    } else {
        window.location = getGloboIdURL(params.ambienteUtilizado) +'?url='+ encodeURIComponent(params.urlRetorno);
    }

})();


