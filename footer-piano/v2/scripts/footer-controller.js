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


if (typeof preco1 != 'undefined' && preco1 != null && preco1 != '' ) {
	$(".produto-digital .preco-produto strong span").text(preco1);
}

if (typeof preco2 != 'undefined' && preco2 != null && preco2 != '' ) {
	$(".produto-digital-premium .preco-produto strong span").text(preco2);
}

if (typeof texto1 != 'undefined' && texto1 != null && texto1 != '' ) {
	$(".produto-digital .titulo-produto h3").text(texto1);
}

if (typeof texto2 != 'undefined' && texto2 != null && texto2 != '' ) {
	$(".produto-digital-premium .titulo-produto h3").text(texto2);
}

if (typeof linkImg1 != 'undefined' && linkImg1 != null && linkImg1 != '' ) {
	$(".produto-digital .img-produto img").attr("src", linkImg1);
}

if (typeof linkImg2 != 'undefined' && linkImg2 != null && linkImg2 != '' ) {
	$(".produto-digital-premium .img-produto img").attr("src", linkImg2);
}

if (typeof linkInfo1 != 'undefined' && linkInfo1 != null && linkInfo1 != '' ) {
	$(".produto-digital .titulo-produto a").attr("href", linkInfo1);
}

if (typeof linkInfo2 != 'undefined' && linkInfo2 != null && linkInfo2 != '' ) {
	$(".produto-digital-premium .titulo-produto a").attr("href", linkInfo2);
}

if (typeof linkMain1 != 'undefined' && linkMain1 != null && linkMain1 != '' ) {
	$(".produto-digital .preco-produto a").attr("href", linkMain1);
}

if (typeof linkMain2 != 'undefined' && linkMain2 != null && linkMain2 != '' ) {
	$(".produto-digital-premium .preco-produto a").attr("href", linkMain2);
}
