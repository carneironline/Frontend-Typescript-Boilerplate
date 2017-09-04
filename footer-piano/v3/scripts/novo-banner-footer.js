$("body").append("" +
"<div class='footer-venda-oglobo-capas'>" +
"   <div class='grid-capa-total'>" +
"       <div class='grid-capa-util'>" +
"           <div class='produtos-oglobo'>" +
"               <div class='container-conteudos'>" +
"                   <ul class='lista-de-produtos-oglobo'>" +
"                       <li class='produto-um'>" +
"                           <ul>" +
"                               <li class='img-produto'>" +
"                                   <img alt='pacote 1' src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-piano/v2/images/digital_pack_02.png'>" +
"                               </li>" +
"                               <li class='titulo-produto'>" +
"                                   <div class='oglobo-logo'></div>" +
"                                   <h2 class='azul-medio'>Digital</h2>" +
"                                   <h3 class='compartilha-cor'>A informação na medida" +
"                                       <br/> certa para você." +
"                                   </h3>" +
"                                   <a class='azul-medio' target='_blank' href='#'>" +
"                                       <u>Saiba mais</u> ›" +
"                                   </a>" +
"                               </li>" +
"                               <li class='informacao-produto compartilha-cor'>Site " +
"                                   <br/>App O Globo Notícias" +
"                               </li>" +
"                               <li class='preco-produto'>" +
"                                   <del class='compartilha-cor'>R$ 9,90</del>" +
"                                   <strong class='compartilha-cor'>R$ 1,90</strong>" +
"                                   <small class='compartilha-cor'>" +
"                                       <span class='azul-medio'>/ MÊS</span>" +
"                                       <b>no 1° mês</b>" +
"                                   </small>" +
"                                   <a class='btn-default' target='_blank' href='#'>Assine já</a>" +
"                               </li>" +
"                           </ul>" +
"                       </li>" +
"                       <li class='produto-dois'>" +
"                           <ul>" +
"                               <li class='img-produto'>" +
"                                   <img alt='pacote 2' src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-piano/v2/images/digital.png'>" +
"                                   </li>" +
"                               <li class='titulo-produto'>" +
"                                   <div class='oglobo-logo'></div>" +
"                                   <h2 class='azul-medio'>Digital Premium</h2>" +
"                                   <h3 class='compartilha-cor'>Acesso ilimitado a todos os produtos digitais do Globo.</h3>" +
"                                   <a class='azul-medio' target='_blank' href='#'>" +
"                                       <u>Saiba mais</u> ›" +
"                                   </a>" +
"                               </li>" +
"                               <li class='informacao-produto compartilha-cor'>Site " +
"                                   <br/>App O Globo Notícias" +
"                                   <br/>App Globo Mais" +
"                                   <br/>Jornal Digital" +
"                                   <br/>Acesso ilimitado ao Site" +
"                                   <br/>Clube O Globo Sou+Rio" +
"                               </li>" +
"                               <li class='preco-produto'>" +
"                                   <del class='compartilha-cor'>R$ 29,90</del>" +
"                                   <strong class='compartilha-cor'>R$ 5,90</strong>" +
"                                   <small class='compartilha-cor'>" +
"                                       <span class='azul-medio'>/ MÊS</span>" +
"                                       <b>por 3 meses</b>" +
"                                   </small>" +
"                                   <a class='btn-default' target='_blank' href='#'>Assine já</a>" +
"                               </li>" +
"                           </ul>" +
"                       </li>" +
"                   </ul>" +
"                   <span class='fechar' >×</span>" +
"               </div>" +
"               <div class='chamada-fixa'>" +
"                   <div class='logo-slogan'></div>" +
"                   <a class='chamada-telefone'><small>Televendas: 4002 5300 (capitais e grandes cidades) 0800 021 8433 (demais localidades)</small></a>" +
"                   <h2 class='compartilha-cor'>" +
"                       <span class='assine-comeco'>Assine por apenas</span>" +
"                       <strong class='azul-medio'>R$ 1,90</strong>" +
"                       <span class='assine-fim'>no 1º mês.<span>" +
"                   </h2>" +
"                   <span class='chamada-abre-oferta btn-default'>Ver ofertas</span>" +
"               </div>" +
"           </div>" +
"       </div>" +
"   </div>" +
"   <div class='white-drop'></div>" +
"</div>");


window['dataLayer'] = window['dataLayer'] || [];
var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}if (redirecionaComAtraso) {if ((elemento.attr("target") == "blank") || (elemento.attr("rel") == "external" || (elemento.attr("rel") == "nofollow external"))){window.open(elemento.attr("href"));} else {setTimeout(function() {window.location = elemento.attr("href");}, 300);}}}}
EventoGaPiano.disparaEvento(!0,"Piano","Footer de venda exibido","Capas",!1);

$(".footer-venda-oglobo-capas .chamada-fixa, .footer-venda-oglobo-capas .fechar, .footer-venda-oglobo-capas .white-drop").click(function(){
var a=$(".footer-venda-oglobo-capas");
a.toggleClass("open"),
a.is(".open")?EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Expandir",!1):EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Fechar",!1)}),

$(".footer-venda-oglobo-capas .produto-um .preco-produto a").click(function(a){a.preventDefault(),
	window.open($(".footer-venda-oglobo-capas .produto-um .preco-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Light",!1)}),
$(".footer-venda-oglobo-capas .produto-dois .preco-produto a").click(function(a){a.preventDefault(),
	window.open($(".footer-venda-oglobo-capas .produto-dois .preco-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Digital",!1)}),
$(".footer-venda-oglobo-capas .produto-um .titulo-produto a").click(function(a){a.preventDefault(),
	window.open($(".footer-venda-oglobo-capas .produto-um .titulo-produto a").attr("href")),EventoGaPiano.disparaEvento(!0, "Banner Footer","Clique","Saiba mais - Light",!1)}),
$(".footer-venda-oglobo-capas .produto-dois .titulo-produto a").click(function(a){a.preventDefault(),
	window.open($(".footer-venda-oglobo-capas .produto-dois .titulo-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Saiba mais - Digital",!1)});

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
	$(".produto-um .preco-produto strong").text(preco1);
}

if (typeof preco2 != 'undefined' && preco2 != null && preco2 != '' ) {
	$(".produto-dois .preco-produto strong").text(preco2);
}

if (typeof precoBanca1 != 'undefined' && precoBanca1 != null && precoBanca1 != '' ) {
	$(".produto-um .preco-produto del").text(precoBanca1);
}

if (typeof precoBanca2 != 'undefined' && precoBanca2 != null && precoBanca2 != '' ) {
	$(".produto-dois .preco-produto del").text(precoBanca2);
}

if (typeof urlImg1 != 'undefined' && urlImg1 != null && urlImg1 != '' ) {
	$(".produto-um .img-produto img").attr("src", urlImg1);
}

if (typeof urlImg2 != 'undefined' && urlImg2 != null && urlImg2 != '' ) {
	$(".produto-dois .img-produto img").attr("src", urlImg2);
}

if (typeof linkInfo1 != 'undefined' && linkInfo1 != null && linkInfo1 != '' ) {
	$(".produto-um .titulo-produto a").attr("href", linkInfo1);
}

if (typeof linkInfo2 != 'undefined' && linkInfo2 != null && linkInfo2 != '' ) {
	$(".produto-dois .titulo-produto a").attr("href", linkInfo2);
}

if (typeof linkVenda1 != 'undefined' && linkVenda1 != null && linkVenda1 != '' ) {
	$(".produto-um .preco-produto a").attr("href", linkVenda1);
}

if (typeof linkVenda2 != 'undefined' && linkVenda2 != null && linkVenda2 != '' ) {
	$(".produto-dois .preco-produto a").attr("href", linkVenda2);
}

if (typeof textoBtnAssine1 != 'undefined' && textoBtnAssine1 != null && textoBtnAssine1 != '' ) {
	$(".produto-um .preco-produto a").text(textoBtnAssine1);
}

if (typeof textoBtnAssine2 != 'undefined' && textoBtnAssine2 != null && textoBtnAssine2 != '' ) {
	$(".produto-dois .preco-produto a").text(textoBtnAssine2);
}

if (typeof telefone != 'undefined' && telefone != null && telefone != '' ) {
	$(".chamada-fixa .chamada-telefone").html(telefone);
}

if (typeof quantDesconto1 != 'undefined' && quantDesconto1 != null && quantDesconto1 != '' ) {
	$(".produto-um .preco-produto small span").text(quantDesconto1);
}

if (typeof quantTempoDec1 != 'undefined' && quantTempoDec1 != null && quantTempoDec1 != '' ) {
	$(".produto-um .preco-produto small b").text(quantTempoDec1);
}

if (typeof quantDesconto2 != 'undefined' && quantDesconto2 != null && quantDesconto2 != '' ) {
	$(".produto-dois .preco-produto small span").text(quantDesconto2);
}

if (typeof quantTempoDec2 != 'undefined' && quantTempoDec2 != null && quantTempoDec2 != '' ) {
	$(".produto-dois .preco-produto small b").text(quantTempoDec2);
}

if (typeof nomePacote1 != 'undefined' && nomePacote1 != null && nomePacote1 != '' ) {
	$(".produto-um .titulo-produto h2").text(nomePacote1);
}

if (typeof nomePacote2 != 'undefined' && nomePacote2 != null && nomePacote2 != '' ) {
	$(".produto-dois .titulo-produto h2").text(nomePacote2);
}

if (typeof descricaoPacote1 != 'undefined' && descricaoPacote1 != null && descricaoPacote1 != '' ) {
	$(".produto-um .titulo-produto h3").text(descricaoPacote1);
}

if (typeof descricaoPacote2 != 'undefined' && descricaoPacote2 != null && descricaoPacote2 != '' ) {
	$(".produto-dois .titulo-produto h3").text(descricaoPacote2);
}

if (typeof textoLinkSaibaMais1 != 'undefined' && textoLinkSaibaMais1 != null && textoLinkSaibaMais1 != '' ) {
	$(".produto-um .titulo-produto a u").text(textoLinkSaibaMais1);
}

if (typeof textoLinkSaibaMais2 != 'undefined' && textoLinkSaibaMais2 != null && textoLinkSaibaMais2 != '' ) {
	$(".produto-dois .titulo-produto a u").text(textoLinkSaibaMais2);
}

if (typeof listaProdutos1 != 'undefined' && listaProdutos1 != null && listaProdutos1 != '' ) {
	$(".produto-um .informacao-produto").html(listaProdutos1);
}

if (typeof listaProdutos2 != 'undefined' && listaProdutos2 != null && listaProdutos2 != '' ) {
	$(".produto-dois .informacao-produto").html(listaProdutos2);
}

if (typeof background1 == 'undefined' || background1 == null || background1 == '' ) {
	background1 = "#1d4c9c";
}

if (typeof background2 == 'undefined' || background2 == null || background2 == '' ) {
	background2 = "#fff";
}

if (typeof backgroundBotao == 'undefined' || backgroundBotao == null || backgroundBotao == '' ) {
	backgroundBotao = "#00aeef";
}

if (typeof backgroundBotaoHover == 'undefined' || backgroundBotaoHover == null || backgroundBotaoHover == '' ) {
	backgroundBotaoHover = "#73d9ff";
}

if (typeof corTelefone == 'undefined' || corTelefone == null || corTelefone == '' ) {
	corTelefone = "#bdbec1";
}

if (typeof corTextoBotao == 'undefined' || corTextoBotao == null || corTextoBotao == '' ) {
	corTextoBotao = "#fff";
}

if (typeof corPadrao == 'undefined' || corPadrao == null || corPadrao == '' ) {
	corPadrao = "#fff";
}

if (typeof corDestaque == 'undefined' || corDestaque == null || corDestaque == '' ) {
	corDestaque = "#139deb";
}


$("head").append("" +
"<style>" +
".footer-venda-oglobo-capas .produtos-oglobo .container-conteudos {background-color: "+background1+";}" +
".footer-venda-oglobo-capas .produtos-oglobo .chamada-fixa {background-color: "+background1+";}" +
".footer-venda-oglobo-capas.open .produtos-oglobo .chamada-fixa {background-color: "+background2+";}" +
".footer-venda-oglobo-capas .produtos-oglobo .chamada-fixa .chamada-telefone {color: "+corTelefone+";}" +
".footer-venda-oglobo-capas .btn-default{background-color: "+backgroundBotao+"; color: "+corTextoBotao+";}" +
".footer-venda-oglobo-capas .btn-default:hover{background-color: "+backgroundBotaoHover+";}" +
".footer-venda-oglobo-capas .azul-medio {color: "+corDestaque+"}" +
".footer-venda-oglobo-capas .compartilha-cor {color: "+corPadrao+";}" +
".footer-venda-oglobo-capas {opacity: 1;}" +
"</style>");
