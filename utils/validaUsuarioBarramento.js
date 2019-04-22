function getGlbidParam() {
    var url = new URL(document.location);
    var glbid = url.searchParams.get('glbid');
    return glbid;
}

async function requestBus(funcionalidade, data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", retornaUrl() + funcionalidade + "/autorizacao-acesso", false);
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

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString()) +
        "; path=/;" + "domain=" + location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0];
}

function getBusURL() {
    var url = new URL(document.location);
    if (url.host.indexOf('stg') > -1) {
        return 'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/'
    } else {
        return 'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/'
    }
}


(async function() {
    var data = JSON.stringify({
        "token-autenticacao": getGlbidParam(),
        "ipUsuario": '127.0.0.1',
        "codigoProduto": 'OG03'
    });

    var responseAssinatura = await requestBus('3981', data);

    if (responseAssinatura.motivo === "AUTORIZADO") {

        /*****
         * redireciona para o conteúdo 
         *****/

        var userTiny = btoa(encodeURI(JSON.stringify(responseAssinatura)))
        setCookie("_utp",userTiny, 1);
        window.location = 'https://globostg.globoi.com'


    } else {
        var responseRegister = await requestBus('4975', data)
        if (responseRegister.motivo === "NAO_AUTORIZADO") {

            /****
             * redireciona para o 4975
             * com url de retorno a matéria
             ****/

            var userTiny = btoa(encodeURI(JSON.stringify(responseRegister)));
            setCookie("_utp",userTiny, 1);
            window.location = 'https://login.qa.globoi.com/login/4975?url=' + 'url Assinatura';
        } else {

            /*****
             * redireciona para a matéria
             * continua o fluxo
             ****/

            var userTiny = btoa(encodeURI(JSON.stringify(responseRegister)));
            setCookie("_utp",userTiny, 1);
            window.location = 'https://globostg.globoi.com'
        }
    }
})();


