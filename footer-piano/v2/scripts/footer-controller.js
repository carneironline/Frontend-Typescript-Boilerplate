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

if (typeof preco0Texto1 != 'undefined' && preco0Texto1 != null && preco0Texto1 != '' ) {
	$(".chamada-fixa h2 .assine-comeco").text(preco0Texto1);
}

if (typeof preco0Texto2 != 'undefined' && preco0Texto2 != null && preco0Texto2 != '' ) {
	$(".chamada-fixa h2 .assine-fim").text(preco0Texto2);
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

if (typeof precoBanca1 != 'undefined' && precoBanca1 != null && precoBanca1 != '' ) {
	$(".produto-digital .preco-produto del").text(precoBanca1);
}

if (typeof precoBanca2 != 'undefined' && precoBanca2 != null && precoBanca2 != '' ) {
	$(".produto-digital-premium .preco-produto del").text(precoBanca2);
}

if (typeof urlImg1 != 'undefined' && urlImg1 != null && urlImg1 != '' ) {
	$(".produto-digital .img-produto img").attr("src", urlImg1);
}

if (typeof urlImg2 != 'undefined' && urlImg2 != null && urlImg2 != '' ) {
	$(".produto-digital-premium .img-produto img").attr("src", urlImg2);
}

if (typeof linkInfo1 != 'undefined' && linkInfo1 != null && linkInfo1 != '' ) {
	$(".produto-digital .titulo-produto a").attr("href", linkInfo1);
}

if (typeof linkInfo2 != 'undefined' && linkInfo2 != null && linkInfo2 != '' ) {
	$(".produto-digital-premium .titulo-produto a").attr("href", linkInfo2);
}

if (typeof linkVenda1 != 'undefined' && linkVenda1 != null && linkVenda1 != '' ) {
	$(".produto-digital .preco-produto a").attr("href", linkVenda1);
}

if (typeof linkVenda2 != 'undefined' && linkVenda2 != null && linkVenda2 != '' ) {
	$(".produto-digital-premium .preco-produto a").attr("href", linkVenda2);
}

if (typeof textoBtnAssine1 != 'undefined' && textoBtnAssine1 != null && textoBtnAssine1 != '' ) {
	$(".produto-digital .preco-produto a").text(textoBtnAssine1);
}

if (typeof textoBtnAssine2 != 'undefined' && textoBtnAssine2 != null && textoBtnAssine2 != '' ) {
	$(".produto-digital-premium .preco-produto a").text(textoBtnAssine2);
}

if (typeof telefone != 'undefined' && telefone != null && telefone != '' ) {
	$(".chamada-fixa .chamada-telefone").text(telefone);
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

if (typeof nomePacote1 != 'undefined' && nomePacote1 != null && nomePacote1 != '' ) {
	$(".produto-digital .titulo-produto h2").text(nomePacote1);
}

if (typeof nomePacote2 != 'undefined' && nomePacote2 != null && nomePacote2 != '' ) {
	$(".produto-digital-premium .titulo-produto h2").text(nomePacote2);
}

if (typeof descricaoPacote1 != 'undefined' && descricaoPacote1 != null && descricaoPacote1 != '' ) {
	$(".produto-digital .titulo-produto h3").text(descricaoPacote1);
}

if (typeof descricaoPacote2 != 'undefined' && descricaoPacote2 != null && descricaoPacote2 != '' ) {
	$(".produto-digital-premium .titulo-produto h3").text(descricaoPacote2);
}

if (typeof textoLinkSaibaMais1 != 'undefined' && textoLinkSaibaMais1 != null && textoLinkSaibaMais1 != '' ) {
	$(".produto-digital .titulo-produto a u").text(textoLinkSaibaMais1);
}

if (typeof textoLinkSaibaMais2 != 'undefined' && textoLinkSaibaMais2 != null && textoLinkSaibaMais2 != '' ) {
	$(".produto-digital-premium .titulo-produto a u").text(textoLinkSaibaMais2);
}

if (typeof listaProdutos1 != 'undefined' && listaProdutos1 != null && listaProdutos1 != '' ) {
	$(".produto-digital .informacao-produto").html(listaProdutos1);
}

if (typeof listaProdutos2 != 'undefined' && listaProdutos2 != null && listaProdutos2 != '' ) {
	$(".produto-digital-premium .informacao-produto").html(listaProdutos2);
}