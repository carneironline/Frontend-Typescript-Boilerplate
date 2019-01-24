let barraGloboCom = document.querySelector('#barra-globocom');
let headerBlog = document.querySelector('body > .site-header');
let publicidadeFullBannerMobi = document.querySelector('#container-fullbanner');
let paywallSiteContainer = document.querySelector('.paywall__site-container');
let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;
let metadeTela = alturaTela/2;
let uri = encodeURIComponent(document.location.href);
let url = window.ambienteUtilizadoPiano == 'prd' ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/';

if(paywallSiteContainer) {
	if(headerBlog) {
		paywallSiteContainer.insertAdjacentElement('afterBegin', headerBlog);
	}
	
	if(barraGloboCom) {
		paywallSiteContainer.insertAdjacentElement('afterBegin', barraGloboCom);
	}
	
	if(publicidadeFullBannerMobi) {
		paywallSiteContainer.insertAdjacentElement('afterend', publicidadeFullBannerMobi);
	}

	
	document.documentElement.scrollTop = 0;

	let conteudoExperienciaRegisterPaywall = `
		<div class="barreira-register-paywall">
			<div class="barreira-register-paywall--content">
				<div class="barreira-register-paywall--titulo">
					Esse conteúdo é exclusivo para assinantes.<br /> Quer continuar sua leitura?
				</div>
				<div class="barreira-register-paywall--oftprincipal">
					<a target="_blank" onclick="disparaEvento(!0,'Register / Paywall','Clique - Ver ofertas','', this.href, event);" href="http://google.com.br" >
						<img class="mobi" src="images/assine1-mobi.jpg" />
						<img class="desk" src="images/assine1-desk.jpg" />
					</a>		
				</div>
				<div class="barreira-register-paywall--login">
					Já possui cadastro? <a target="_blank" onclick="disparaEvento(!0,'Register / Paywall','Clique - Ver ofertas','', this.href, event);" class="link" href="${url}login/${Piano.variaveis.getServicoId()}?tam=widget&amp;url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D${Piano.variaveis.getServicoId()}%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523${uri}" >Faça login</a> ou <a target="_blank" onclick="disparaEvento(!0,'Register / Paywall','Clique - Ver ofertas','', this.href, event);" class="link" href="${url}cadastro/${Piano.variaveis.getServicoId()}?tam=widget&amp;url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D${Piano.variaveis.getServicoId()}%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523${uri}">Cadastre-se</a>.
				</div>
				<div class="barreira-register-paywall--oftsecundaria">
					<a target="_blank" onclick="disparaEvento(!0,'Register / Paywall','Clique - Ver ofertas','', this.href, event);" href="http://yahoo.com.br" >
						<img class="mobi" src="images/assine2-mobi1.jpg" />
						<img class="desk" src="images/assine2-desk1.jpg" />					
					</a>
					<a target="_blank" onclick="disparaEvento(!0,'Register / Paywall','Clique - Ver ofertas','', this.href, event);" href="http://msn.com" >
						<img class="mobi" src="images/assine2-mobi2.jpg" />
						<img class="desk" src="images/assine2-desk2.jpg" />					
					</a>
				</div>
			</div>
		</div>
	`
	paywallSiteContainer.insertAdjacentHTML('afterend', conteudoExperienciaRegisterPaywall);

	if(larguraTela > 820 && alturaTela > 350) {
		document.querySelector('.barreira-register-paywall').style.marginTop = metadeTela+'px';
	}

	// GA

	window['dataLayer'] = window['dataLayer'] || [];


	function disparaEvento(naoInterativo, categoria, acao, rotulo, elemento, event) {
		event.preventDefault(event); 
		if (naoInterativo === false) {
			dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});
		} 
		else {
			dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});
		}
		setTimeout(function() {
			window.open(elemento, '_blank')
		}, 300);
	}

} else {
	console.log("Tag de paywall nao existe");
}










function onCliker(a, b, c, d, event) {
	console.log(a + b + c + d);
	EventoGaPiano.disparaEvento(!0,"Register / Paywall","Clique - Ver ofertas","",!1);
	event.preventDefault(event); 
}

/*
var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoBarreiraRegisterPaywall = document.createElement('div');
conteudoBarreiraRegisterPaywall.id = 'barreiraRegisterPaywall';
document.body.appendChild(conteudoBarreiraRegisterPaywall);


conteudoExperienciaRegisterPaywall = "" +
"<div id='idBarreira' class='register-barreira' style='opacity: 0; display: none;'>" +
"				<img src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/v1/images/produto.png'>" +
"					<iframe id='iframeCadun' src='https://login.globo.com/login/"+Piano.variaveis.getServicoId()+"?tam=widget&amp;url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D"+Piano.variaveis.getServicoId()+"%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523"+uri+"'></iframe>" +
"</div>"


//Controla e edita o HTML
// Ver se Variaves do piano existem

if (typeof precoRegister != 'undefined' && precoRegister != null && precoRegister != '' ) {
	document.querySelector(".preco-menor").innerHTML = precoRegister;
}




document.querySelector('.conteudo-produto a').addEventListener('click', function(a) {
	a.preventDefault(),
    window.open(document.querySelector(".conteudo-produto a").href),
    EventoGaPiano.disparaEvento(!0,"Register / Paywall","Clique - Ver ofertas","",!1);
});


setTimeout(function(){document.querySelector('#idBarreira').setAttribute('style','display: block; opacity: 1;');}, 1500);

*/