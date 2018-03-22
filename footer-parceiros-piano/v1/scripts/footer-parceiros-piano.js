var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoBarreiraRegister = document.createElement('div');
conteudoBarreiraRegister.id = 'footerParceiros';
document.body.appendChild(conteudoBarreiraRegister);


conteudoExperienciaRegister = "" +
"<div class='grid-falso'>"+
"	<div id='footer-parceiros-piano' style='opacity: 0; display: none;'>" +
"			<div class='conteudo-parceiros-piano'>"+
"			<span id='logo-parceiros'>logo</span>" +
"			<p id='texto-parceiros'><strong>GRÁTIS para você</strong> assinante do Globo</p>" +
"			<a href='#' id='click-ga-piano-parceiros'><span>ATIVAR</span></a>" +
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
corDefault2 = "#00aeef";

if (typeof background1 == 'undefined' || background1 == null || background1 == '' ) {
	background1 = corDefault1;
}

if (typeof background2 == 'undefined' || background2 == null || background2 == '' ) {
	background2 = corDefault1;
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



if (!(background1 == corDefault1 && background2 == corDefault2)) {
	adicionaEstiloRegister = "<style>" +
	"#footer-parceiros-piano {background: "+background1+";}" +
	"</style>";
	document.getElementById("footerParceiros").insertAdjacentHTML('beforeend', adicionaEstiloRegister);
}

setTimeout(function(){document.getElementById('footer-parceiros-piano').setAttribute('style','display: block; opacity: 1;');}, 1500);