var footerOgloboPiano = document.createElement('div');
footerOgloboPiano.id = 'footerOgloboPianoId';
document.body.appendChild(footerOgloboPiano);



conteudoExperienciaFooterPiano = "" +
"<div id='footer-promocoes-piano'>" +
"	<div id='footer-action-piano' class='footer-gide-piano '>" +
"		<div onclick='pianoToggleFooter();pianoFechaFooter();' class='white-drop-piano'></div>" +
"		<div class='wrapper-oglobo-grid-piano'>" +
"			<div class='footer-sizeoglobo-piano'>" +
"				<div id='backgroundPianoFooterFechado' onclick='pianoToggleFooter()' class='footer-f-piano'></div>" +
"				<div id='backgroundPianoFooterAberto' class='footer-a-piano'>" +
"					<span onclick='pianoToggleFooter();pianoFechaFooter();'>&#10060;</span>" +
"					<a onclick='clickBannerPianoGA1' class='linkPromocao1' target='_blank' href='https://assinatura.oglobo.globo.com/VitrineDigital.aspx'></a>" +
"					<a onclick='clickBannerPianoGA2' class='linkPromocao2' target='_blank' href='https://assinatura.oglobo.globo.com/VitrineDigital.aspx'></a>" +
"				</div>" +
"			</div>" +
"		</div>" +
"	</div>" +
"</div>"

document.getElementById("footerOgloboPianoId").insertAdjacentHTML('beforeend', conteudoExperienciaFooterPiano);


if (typeof imagemFooterPianoAberto != 'undefined' && imagemFooterPianoAberto != null && imagemFooterPianoAberto != '' && imagemFooterPianoFechado != 'undefined' && imagemFooterPianoFechado != null && imagemFooterPianoFechado != '' ) {
	document.querySelector("#backgroundPianoFooterFechado").style.backgroundImage = "url("+imagemFooterPianoAberto+")";
	document.querySelector("#backgroundPianoFooterAberto").style.backgroundImage = "url("+imagemFooterPianoFechado+")";
}

if (typeof linkPianoPromocao1 != 'undefined' && linkPianoPromocao1 != null && linkPianoPromocao1 != '' && linkPianoPromocao2 != 'undefined' && linkPianoPromocao2 != null && linkPianoPromocao2 != '') {
	document.querySelector(".linkPromocao1").href = linkPianoPromocao1;
	document.querySelector(".linkPromocao2").href = linkPianoPromocao2;
}

window['dataLayer'] = window['dataLayer'] || [];
var EventoGaPiano = {
	disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {
	if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} 
	else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}
		if (redirecionaComAtraso) {
			if ((elemento.target == "_blank") || (elemento.rel == "external" || (elemento.rel == "nofollow external"))){
				window.open(elemento.href);
			} else {
				setTimeout(function() {window.location = elemento.href;}, 300);
			}
		}
	}
}

function pianoToggleFooter() {
	document.getElementById("footer-action-piano").classList.toggle("open");
	EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Expandir",!1);
}

function pianoFechaFooter() {
	EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Fechar",!1);
}

function clickBannerPianoGA1(a) {
	a.preventDefault(),
	window.open(document.querySelector(".linkPromocao1").href),
	EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Posicao 1",!1);
}

function clickBannerPianoGA2(a) {
	a.preventDefault(),
	window.open(document.querySelector(".linkPromocao2").href),
	EventoGaPiano.disparaEvento(!0,"Banner Footer","Clique","Assine (link para pagamento) - Posicao 2",!1);
}

setTimeout(function(){
	EventoGaPiano.disparaEvento(!0,"Piano","Footer de venda exibido","Capas",!1);
	document.querySelector('#footer-promocoes-piano').setAttribute('style','opacity: 1;');
}, 1500);