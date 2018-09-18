var uri = encodeURIComponent(document.location.href);

callLoginRegister = function(e) {
	e = window.event;
	e.preventDefault();
	s = document.querySelectorAll(".paywall--login-iframe, .paywall--offer-link, .paywall--login-button");
	for (var i = 0; i < s.length; i++) {
		s[i].classList.toggle("hidden");
	}
}

protectedContent = "" +
"<div id='paywall--paywall-inline'>" +
"    <div class='paywall--content'>" +
"        <div class='paywall--login-button'> " +
"            <h2><strong>Muito bom ter você por aqui!</strong> Adoramos bons leitores.</h2>" +
"            <h3>Você atingiu o número máximo de leituras gratuitas este mês.</h3>" +
"            <a href='https://login.globo.com/cadastro/"+Piano.variaveis.getServicoId()+"' target='_blank'><strong>Cadastre-se</strong> para continuar.</a>" +
"            <p>Já possui conta <a href='#' onclick='callLoginRegister();'>Globo.com</a>?</p>" +
"        </div>" +
"        <div class='paywall--offer-link'>" +
"            <a class='paywall--offer-image'  href='#'>oferta</a>" +
"        </div>" +
"        <div class='paywall--login-iframe hidden'>" +
"            <a href='#' class='back-to-offer' onclick='callLoginRegister();'>Voltar</a>" +
"            <div class='paywall--login-holder'>" +
"            <iframe id='iframeCadun' src='https://login.globo.com/login/"+Piano.variaveis.getServicoId()+"'></iframe>" +
"            </div>" +
"        </div>" +
"    </div>" +
"</div>"

document.querySelector(".protected-content").setAttribute('data-content', 'removed');
document.querySelector(".protected-content").innerHTML = protectedContent;


if (typeof imgDesk != 'undefined' && imgDesk != null && imgDesk != '' && imgMob != 'undefined' && imgMob != null && imgMob != '') {
	if (window.screen.width >= 767 ) {
		document.querySelector(".paywall--offer-image").setAttribute('style',"background-image: url("+imgMob+");");
	}
	else {
		document.querySelector(".paywall--offer-image").setAttribute('style',"background-image: url("+imgDesk+");");
	}
}

if (typeof linkRegister != 'undefined' && linkRegister != null && linkRegister != '') {
	document.querySelector(".paywall--offer-image").href = linkRegister;
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


setTimeout(function(){document.querySelector('.paywall--content').setAttribute('style','opacity: 1;');}, 1500);