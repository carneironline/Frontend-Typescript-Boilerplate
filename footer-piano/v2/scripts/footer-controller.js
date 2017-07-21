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


if (typeof preco0 != 'undefined' && preco0 != null && preco0 != '' ) {
	$(".chamada-fixa h2 strong").text(preco0);
}

if (typeof precoQant0 != 'undefined' && precoQant0 != null && precoQant0 != '' ) {
	$(".chamada-fixa h2 .assine-fim").text(precoQant0);
}

if (typeof comecoFrase != 'undefined' && comecoFrase != null && comecoFrase != '' ) {
	$(".chamada-fixa h2 .assine-comeco").text(comecoFrase);
}

if (typeof abrirBanner != 'undefined' && abrirBanner != null && abrirBanner != '' ) {
	$(".chamada-fixa .chamada-abre-oferta").text(abrirBanner);
}

if (typeof preco1 != 'undefined' && preco1 != null && preco1 != '' ) {
	$(".produto-digital .preco-produto strong").text(preco1);
}

if (typeof preco2 != 'undefined' && preco2 != null && preco2 != '' ) {
	$(".produto-digital-premium .preco-produto strong").text(preco2);
}

if (typeof precoDel1 != 'undefined' && precoDel1 != null && precoDel1 != '' ) {
	$(".produto-digital .preco-produto del").text(precoDel1);
}

if (typeof precoDel2 != 'undefined' && precoDel2 != null && precoDel2 != '' ) {
	$(".produto-digital-premium .preco-produto del").text(precoDel2);
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

if (typeof textoBtnAssine1 != 'undefined' && textoBtnAssine1 != null && textoBtnAssine1 != '' ) {
	$(".produto-digital .preco-produto a").text(textoBtnAssine1);
}

if (typeof textoBtnAssine2 != 'undefined' && textoBtnAssine2 != null && textoBtnAssine2 != '' ) {
	$(".produto-digital-premium .preco-produto a").text(textoBtnAssine2);
}

if (typeof telefoneCampanha != 'undefined' && telefoneCampanha != null && telefoneCampanha != '' ) {
	$(".chamada-fixa .chamada-telefone").text(telefoneCampanha);
}


if (typeof quantDesconto1 != 'undefined' && quantDesconto1 != null && quantDesconto1 != '' ) {
	$(".produto-digital .preco-produto small span").text(quantDesconto1);
}

if (typeof quantTempoDec1 != 'undefined' && quantTempoDec1 != null && quantTempoDec1 != '' ) {
	$(".produto-digital .preco-produto small b").text(quantTempoDec1);
}


if (typeof quantDesconto2 != 'undefined' && quantDesconto2 != null && quantDesconto2 != '' ) {
	$(".produto-digital-premium .preco-produto small span").text(quantDesconto2);
}

if (typeof quantTempoDec2 != 'undefined' && quantTempoDec2 != null && quantTempoDec2 != '' ) {
	$(".produto-digital-premium .preco-produto small b").text(quantTempoDec2);
}

if (typeof tituloProduto1 != 'undefined' && tituloProduto1 != null && tituloProduto1 != '' ) {
	$(".produto-digital .titulo-produto h2").text(tituloProduto1);
}

if (typeof tituloProduto2 != 'undefined' && tituloProduto2 != null && tituloProduto2 != '' ) {
	$(".produto-digital-premium .titulo-produto h2").text(tituloProduto2);
}

if (typeof subTituloProduto1 != 'undefined' && subTituloProduto1 != null && subTituloProduto1 != '' ) {
	$(".produto-digital .titulo-produto h3").text(subTituloProduto1);
}

if (typeof subTituloProduto2 != 'undefined' && subTituloProduto2 != null && subTituloProduto2 != '' ) {
	$(".produto-digital-premium .titulo-produto h3").text(subTituloProduto2);
}

if (typeof textoLinkSaibaMais1 != 'undefined' && textoLinkSaibaMais1 != null && textoLinkSaibaMais1 != '' ) {
	$(".produto-digital .titulo-produto a u").text(textoLinkSaibaMais1);
}

if (typeof textoLinkSaibaMais2 != 'undefined' && textoLinkSaibaMais2 != null && textoLinkSaibaMais2 != '' ) {
	$(".produto-digital-premium .titulo-produto a u").text(textoLinkSaibaMais2);
}

if (typeof textoInfomacoesProduto1 != 'undefined' && textoInfomacoesProduto1 != null && textoInfomacoesProduto1 != '' ) {
	$(".produto-digital .informacao-produto").html(textoInfomacoesProduto1);
}

if (typeof textoInfomacoesProduto2 != 'undefined' && textoInfomacoesProduto2 != null && textoInfomacoesProduto2 != '' ) {
	$(".produto-digital-premium .informacao-produto").html(textoInfomacoesProduto2);
}