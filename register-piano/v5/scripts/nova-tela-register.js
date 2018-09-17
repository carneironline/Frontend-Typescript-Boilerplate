var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoRevistasBarreiraPiano = document.createElement('div');
conteudoRevistasBarreiraPiano.id = 'barreiraRevistasPiano';
document.body.appendChild(conteudoRevistasBarreiraPiano);



conteudoRevistaExperienciaPiano = "" +
"<div id='piano-barreira-revistas' style='opacity: 0; display: none;' >" +
"    <div class='piano-barreira-backdrop'> </div>" +     
"</div>"

document.getElementById("barreiraRevistasPiano").insertAdjacentHTML('beforeend', conteudoRevistaExperienciaPiano);


if (typeof imagemRevistaM != 'undefined' && imagemRevistaM != null && imagemRevistaM != '' && imagemRevistaT != 'undefined' && imagemRevistaT != null && imagemRevistaT != '' && imagemRevistaD != 'undefined' && imagemRevistaD != null && imagemRevistaD != '' ) {
	var tamanhoTela = window.screen.width;
	if (tamanhoTela < 767 ) {
		document.querySelector(".piano-chamada-revistas").style.backgroundImage = "url("+imagemRevistaM+")";
	}
	else if (tamanhoTela < 1024 ) {
		document.querySelector(".piano-chamada-revistas").style.backgroundImage = "url("+imagemRevistaT+")";
	}
	else {
		document.querySelector(".piano-chamada-revistas").style.backgroundImage = "url("+imagemRevistaD+")";
	}
}

if (typeof imagemExclusivoTD != 'undefined' && imagemExclusivoTD != null && imagemExclusivoTD != '') {
	document.querySelector(".piano-chamada-login").style.backgroundImage = "url("+imagemExclusivoTD+")";
}

if (typeof linkRegister != 'undefined' && linkRegister != null && linkRegister != '') {
	document.getElementById("link-register").href = linkRegister;
}



if (window.ambienteUtilizadoPiano == 'prd') {
	document.querySelector("#iframeCadun").src = 'https://login.globo.com/login/'+Piano.variaveis.getServicoId()+'?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D'+Piano.variaveis.getServicoId()+'%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523'+uri;	
} else {
	document.querySelector("#iframeCadun").src = 'https://login.qa.globoi.com/login/'+Piano.variaveis.getServicoId()+'?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D'+Piano.variaveis.getServicoId()+'%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523'+uri;
}

document.onreadystatechange = function(){
	if(document.readyState === "complete"){
		if (!document.querySelector('#barra-globocom')) {
			(function() {
				var s = document.createElement("script");
				s.type = "text/javascript"; s.async = true; s.defer = true; s.charset = "utf-8";
				s.src = "https://s.glbimg.com/gl/ba/js/barra-globocom.min.js";
				var ss = document.getElementsByTagName("script")[0]; ss.parentNode.insertBefore(s, ss);
			})();	
		}
	}
}
setTimeout(function(){document.querySelector('#piano-barreira-revistas').setAttribute('style','display: block; opacity: 1;');}, 1500);