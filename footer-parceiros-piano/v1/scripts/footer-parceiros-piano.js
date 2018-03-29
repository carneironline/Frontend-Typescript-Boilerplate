var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoBarreiraRegister = document.createElement('div');
conteudoBarreiraRegister.id = 'footerParceiros';
document.body.appendChild(conteudoBarreiraRegister);


conteudoExperienciaRegister = "" +
"<div class='grid-falso'>"+
"	<div id='footer-parceiros-piano' style='opacity: 0; display: none;'>" +
"			<div class='conteudo-parceiros-piano'>"+
"			<span id='logo-parceiros'><img id='img-logo-parceiros' src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-parceiros-piano/v1/images/logoglobomais.png'></span>" +
"			<p id='texto-parceiros'><strong id='texto-parceiros-2' >GRÁTIS para você</strong> <span id='texto-parceiros-3'>assinante do Globo</span></p>" +
"			<a href='#' id='click-ga-piano-parceiros'><span id='texto-clicl-parceiros'>ATIVAR</span></a>" +
"		</div>"+
"	</div>"+
"</div>"

document.getElementById("footerParceiros").insertAdjacentHTML('beforeend', conteudoExperienciaRegister);


//Controla e edita o HTML
// Ver se Variaves do piano existem

if (typeof precoRegister != 'undefined' && precoRegister != null && precoRegister != '' ) {
	document.querySelector(".preco-menor").innerHTML = precoRegister;
}

// backgrounds

corDefault1 = "linear-gradient(to right, #f2664c 0%,#ed1945 100%)";
corDefault2 = "#570a3b";
corDefault3 = "#570a3b";
corDefault4 = "#fff";
corDefault5 = "#fff";

if (typeof corFooterParc == 'undefined' || corFooterParc == null || corFooterParc == '' ) {
	corFooterParc = corDefault1;
}

if (typeof corBotaoParc == 'undefined' || corBotaoParc == null || corBotaoParc == '' ) {
	corBotaoParc = corDefault2;
}

if (typeof corFraseFinalParc == 'undefined' || corFraseFinalParc == null || corFraseFinalParc == '' ) {
	corFraseFinalParc = corDefault3;
}

if (typeof corFraseInicialParc == 'undefined' || corFraseInicialParc == null || corFraseInicialParc == '' ) {
	corFraseInicialParc = corDefault4;
}

if (typeof corTextoBotaoParc == 'undefined' || corTextoBotaoParc == null || corTextoBotaoParc == '' ) {
	corTextoBotaoParc = corDefault5;
}

if (typeof parceiroImagemLogo != 'undefined' && parceiroImagemLogo != null && parceiroImagemLogo != '' ) {
	document.getElementById("img-logo-parceiros").src = parceiroImagemLogo;
}


if (typeof fraseInicialParc != 'undefined' && fraseInicialParc != null && fraseInicialParc != '' ) {
	document.getElementById("texto-parceiros-2").innerHTML = fraseInicialParc;
}

if (typeof fraseFinalParc != 'undefined' && fraseFinalParc != null && fraseFinalParc != '' ) {
	document.getElementById("texto-parceiros-3").innerHTML = fraseFinalParc;
}

if (typeof txtBotaoParc != 'undefined' && txtBotaoParc != null && txtBotaoParc != '' ) {
	document.getElementById("texto-clicl-parceiros").innerHTML = txtBotaoParc;
}

if (typeof linkParc != 'undefined' && linkParc != null && linkParc != '' ) {
	document.getElementById("click-ga-piano-parceiros").href = linkParc;
}

// GA

window['dataLayer'] = window['dataLayer'] || [];

var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {
	if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} 
	else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}
	if (redirecionaComAtraso) {if ((elemento.target == "_blank") || (elemento.rel == "external" || (elemento.rel == "nofollow external"))){window.open(elemento.href);} 
	else {setTimeout(function() {window.location = elemento.href}, 300);}}}}

document.getElementById('click-ga-piano-parceiros').addEventListener('click', function(a) {
	a.preventDefault(),
    window.open(document.getElementById('click-ga-piano-parceiros').href),
    EventoGaPiano.disparaEvento(!0,"Globo Mais Footer","Clique - Ver Diferenciais","",!1);
});



if (!(corFooterParc == corDefault1 && corBotaoParc == corDefault2 && corFraseFinalParc == corDefault3 && corFraseInicialParc == corDefault4 && corTextoBotaoParc == corDefault5)) {
	adicionaEstiloRegister = "<style>" +
	"#footer-parceiros-piano {background: "+corFooterParc+";}" +
	"#footer-parceiros-piano #click-ga-piano-parceiros {background: "+corBotaoParc+";}" +
	"#footer-parceiros-piano #texto-parceiros #texto-parceiros-3 {color: "+corFraseFinalParc+";}" +
	"#footer-parceiros-piano #texto-parceiros strong {color: "+corFraseInicialParc+";}" +
	"#footer-parceiros-piano #click-ga-piano-parceiros {color: "+corTextoBotaoParc+";}" +
	"</style>";
	document.getElementById("footerParceiros").insertAdjacentHTML('beforeend', adicionaEstiloRegister);
}

setTimeout(function(){document.getElementById('footer-parceiros-piano').setAttribute('style','display: block; opacity: 1;');}, 1500);