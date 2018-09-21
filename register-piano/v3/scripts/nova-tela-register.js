var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoRevistasBarreiraPiano = document.createElement('div');
conteudoRevistasBarreiraPiano.id = 'barreiraRevistasPiano';
document.body.appendChild(conteudoRevistasBarreiraPiano);



conteudoRevistaExperienciaPiano = "" +
"<div id='piano-barreira-revistas'>" +
"    <div class='piano-barreira-backdrop'> </div>" + 
"    <div class='piano-barreira-content'>" +
"        <div class='piano-chamada-revistas'></div>" +
"        <div class='piano-login'>" +
"            <div class='piano-chamada-login'></div>" +
"            <div class='piano-login-frame'><div class='piano-scroll-cadun'><iframe id='iframeCadun' src='https://login.globo.com/login/"+Piano.variaveis.getServicoId()+"' ></iframe></div></div>" +
"        </div>" +
"    </div>" +       
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

var url = window.ambienteUtilizadoPiano == 'prd' ? 'https://login.globo.com/login/' : 'https://login.qa.globoi.com/login/';
document.querySelector("#iframeCadun").src = url + Piano.variaveis.getServicoId()+'?urlPosCadastroLogada=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23'+uri;

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



setTimeout(function(){document.querySelector('#piano-barreira-revistas').setAttribute('style','opacity: 1;');}, 1500);