window['dataLayer'] = window['dataLayer'] || [];
var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}if (redirecionaComAtraso) {if ((elemento.attr("target") == "blank") || (elemento.attr("rel") == "external" || (elemento.attr("rel") == "nofollow external"))){window.open(elemento.attr("href"));} else {setTimeout(function() {window.location = elemento.attr("href");}, 300);}}}}
EventoGaPiano.disparaEvento(!0,"Piano","Footer de venda exibido","Capas",!1);

$(".footer-venda-oglobo-capas .chamada-fixa, .footer-venda-oglobo-capas .fechar, .footer-venda-oglobo-capas .white-drop").click(function(){
var a=$(".footer-venda-oglobo-capas");
a.toggleClass("open"),
a.is(".open")?EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Expandir",!1):EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Fechar",!1)}),

$(".footer-venda-oglobo-capas .produto-digital .preco-produto a").click(function(a){a.preventDefault(),
    window.open($(".footer-venda-oglobo-capas .produto-digital .preco-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Light",!1)}),
$(".footer-venda-oglobo-capas .produto-digital-premium .preco-produto a").click(function(a){a.preventDefault(),
    window.open($(".footer-venda-oglobo-capas .produto-digital-premium .preco-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Digital",!1)}),
$(".footer-venda-oglobo-capas .produto-digital .titulo-produto a").click(function(a){a.preventDefault(),
    window.open($(".footer-venda-oglobo-capas .produto-digital .titulo-produto a").attr("href")),EventoGaPiano.disparaEvento(!0, "Banner Footer","Clique","Saiba mais - Light",!1)}),
$(".footer-venda-oglobo-capas .produto-digital-premium .titulo-produto a").click(function(a){a.preventDefault(),
    window.open($(".footer-venda-oglobo-capas .produto-digital-premium .titulo-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Saiba mais - Digital",!1)});
