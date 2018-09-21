var protectedContentEl = document.querySelector(".protected-content");
if(protectedContentEl) {
	var uri = encodeURIComponent(document.location.href);

	callLoginRegister = function(e) {
		e = window.event;
		e.preventDefault();
		s = document.querySelectorAll(".paywall--login-iframe, .paywall--offer-link, .paywall--login-button");
		for (var i = 0; i < s.length; i++) {
			s[i].classList.toggle("hidden");
		}
	}

	var protectedContent = "" +
	"<link rel='stylesheet' type='text/css' href='https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/helper/styles.css' />" +
	"<div id='paywall--paywall-inline'>" +
	"    <div class='paywall--content' style='opacity: 0;'>" +
	"        <div class='paywall--login-button '> " +
	"            <h2><strong>Muito bom ter você por aqui!</strong> Adoramos bons leitores.</h2>" +
	"            <h3>Você atingiu o número máximo de leituras gratuitas este mês.</h3>" +
	"            <a id='btnRegister' href='#' target='_blank'><strong>Cadastre-se</strong> para continuar.</a>" +
	"            <p id='textLogin'>Já possui conta <a href='#' onclick='callLoginRegister();'>Globo.com</a>?</p>" +
	"        </div>" +
	"        <div class='paywall--offer-link '>" +
	"            <a id='offerLink' class='paywall--offer-image' target='_blank' href='#'>oferta</a>" +
	"        </div>" +
	"        <div class='paywall--login-iframe hidden'>" +
	"            <a href='#' class='back-to-offer' onclick='callLoginRegister();'>Voltar</a>" +
	"            <div class='paywall--login-holder'>" +
	"            	<iframe id='iframeCadun' src='#'></iframe>" +
	"            </div>" +
	"        </div>" +
	"    </div>" +
	"</div>"


	protectedContentEl.setAttribute('data-content', 'removed');
	protectedContentEl.innerHTML = protectedContent;

	if (window.ambienteUtilizadoPiano == 'prd') {
		document.querySelector("#iframeCadun").src = 'https://login.globo.com/login/'+Piano.variaveis.getServicoId()+'?urlPosCadastroLogada=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23'+uri;
		document.querySelector("#btnRegister").href = 'https://login.globo.com/cadastro/'+Piano.variaveis.getServicoId()+'?url='+uri;
	} else {
		document.querySelector("#iframeCadun").src = 'https://login.qa.globoi.com/login/'+Piano.variaveis.getServicoId()+'?urlPosCadastroLogada=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23'+uri;
		document.querySelector("#btnRegister").href = 'https://login.qa.globoi.com/cadastro/'+Piano.variaveis.getServicoId()+'?url='+uri;
	}

	if (typeof imgDesk != 'undefined' && imgDesk != null && imgDesk != '' && imgMob != 'undefined' && imgMob != null && imgMob != '' && imgTab != 'undefined' && imgTab != null && imgTab != '') {
		if (window.screen.width < 600 ) {
			document.querySelector("#offerLink").setAttribute('style',"background-image: url("+imgMob+");");
		}
		else if (window.screen.width < 1024 ) {
			document.querySelector("#offerLink").setAttribute('style',"background-image: url("+imgTab+");");
		}
		else {
			document.querySelector("#offerLink").setAttribute('style',"background-image: url("+imgDesk+");");
		}
	}
	
	if (typeof offerLink != 'undefined' && offerLink != null && offerLink != '') {
		document.querySelector("#offerLink").href = offerLink;
	}

	if (typeof mainTitleRegister != 'undefined' && mainTitleRegister != null && mainTitleRegister != '') {
		document.querySelector(".paywall--login-button h2").innerHTML = mainTitleRegister;
	}

	if (typeof subTitleRegister != 'undefined' && subTitleRegister != null && subTitleRegister != '') {
		document.querySelector(".paywall--login-button h3").innerHTML = subTitleRegister;
	}

	if (typeof btnRegisterText != 'undefined' && btnRegisterText != null && btnRegisterText != '') {
		document.querySelector("#btnRegister").innerHTML = btnRegisterText;
	}

	if (typeof textLogin != 'undefined' && textLogin != null && textLogin != '') {
		document.querySelector("#textLogin").innerHTML = textLogin;
	}
	
	document.onreadystatechange = function(){
		if(document.readyState === "complete"){
			if (!document.querySelector('#barra-globocom')) {
				(function() {
					var s = document.createElement("script");
					s.type = "text/javascript"; 
					s.async = true; 
					s.defer = true; 
					s.charset = "utf-8";
					s.src = "https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/barra-gcom/barra-globocom.js";
					var ss = document.getElementsByTagName("script")[0];
					ss.parentNode.insertBefore(s, ss);
				})();	
			}
		}
	}

	setTimeout(function(){document.querySelector('.paywall--content').setAttribute('style','opacity: 1;');}, 1000);
} else {
	console.log("Página não tem a Tag para inserir barreira.")
}