
// Ver se Variaves do piano existem

if (typeof precoMenor != 'undefined' && precoMenor != null && precoMenor != '' ) {
    $(".preco-menor").text(precoMenor);    
}

if (typeof quantidadeMes != 'undefined' && quantidadeMes != null && quantidadeMes != '' ) {
    $(".quantidade-mes").text(quantidadeMes);   
}

if (typeof linkImg != 'undefined' && linkImg != null && linkImg != '' ) {
    $(".conteudo-produto img").attr("src", linkImg);
}

if (typeof linkProduto != 'undefined' && linkProduto != null && linkProduto != '' ) {
    $(".conteudo-produto a").attr("href", linkProduto);
}


// GA

window['dataLayer'] = window['dataLayer'] || [];
var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}if (redirecionaComAtraso) {if ((elemento.attr("target") == "blank") || (elemento.attr("rel") == "external" || (elemento.attr("rel") == "nofollow external"))){window.open(elemento.attr("href"));} else {setTimeout(function() {window.location = elemento.attr("href");}, 300);}}}}

// aguardando evento
EventoGaPiano.disparaEvento(!0,"Login","xxxxxxxxxxxxxxx","xxxxxxxxxxxxxxx",!1);

$(".conteudo-produto a").click(function(a){
    a.preventDefault(),
    window.open($(".conteudo-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Barreira Login","Clique","Ir oferta",!1);
});


// pega url

var uri = encodeURIComponent(document.location.href);

if (window.ambienteUtilizadoPiano == 'prd') {
    $("#iframeCadun").attr("src" , 'https://login.globo.com/login/4975?url='+uri);  
} else {
    $("#iframeCadun").attr("src" , 'https://login.qa.globoi.com/login/4975?url='+uri);
}
