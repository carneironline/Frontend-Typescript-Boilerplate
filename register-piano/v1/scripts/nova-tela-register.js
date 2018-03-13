var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoBarreiraRegister = document.createElement('div');
conteudoBarreiraRegister.id = 'barreiraRegister';
document.body.appendChild(conteudoBarreiraRegister);


conteudoExperienciaRegister = "" +
"<div id='login-barreira' class='register-barreira' style='opacity: 0; display: none;'>" +
"	<div class='conteudo-barreira'>" +
"		<div id='login-promocao'>" +
"			<div class='conteudo-produto'>" +
"				<img src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/v1/images/produto.png'>" +
"				<h2>Assine agora e tenha acesso ilimitado</h2>" +
"				<p>A partir de <span class='preco-menor'>R$1,90</span> " +
"					<span class='quantidade-mes'>no 1º mês</span>" +
"				</p>" +
"				<a href='https://assinatura.oglobo.globo.com/VitrineDigital.aspx' target='_blank'>Ver ofertas</a>" +
"			</div>" +
"		</div>" +
"		<div id='login-barreira-iframe'>" +
"			<h2>" +
"				<strong>Acesso para assinantes e cadastrados </strong>" +
"				<span>Faça seu login ou cadastre-se para continuar</span>" +
"			</h2>" +
"			<div class='segura-cadun'>" +
"				<div class='scroll-cadun'>" +
"					<iframe id='iframeCadun' src='https://login.globo.com/login/"+Piano.variaveis.getServicoId()+"?tam=widget&amp;url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D"+Piano.variaveis.getServicoId()+"%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523"+uri+"'></iframe>" +
"				</div>" +
"			</div>" +
"		</div>" +
"	</div>" +
"</div>"

document.getElementById("barreiraRegister").insertAdjacentHTML('beforeend', conteudoExperienciaRegister);


//Controla e edita o HTML
// Ver se Variaves do piano existem

if (typeof precoRegister != 'undefined' && precoRegister != null && precoRegister != '' ) {
	document.querySelector(".preco-menor").innerHTML = precoRegister;
}

if (typeof periodoPrecoRegister != 'undefined' && periodoPrecoRegister != null && periodoPrecoRegister != '' ) {
	document.querySelector(".quantidade-mes").innerHTML = periodoPrecoRegister;
}

if (typeof imagemRegister != 'undefined' && imagemRegister != null && imagemRegister != '' ) {
	document.querySelector(".conteudo-produto img").src = imagemRegister;
}

if (typeof linkOfertaRegister != 'undefined' && linkOfertaRegister != null && linkOfertaRegister != '' ) {
	var parametroUrlRetorno = linkOfertaRegister.indexOf('?') != -1 ? '&url_retorno=' : '?url_retorno=';
	document.querySelector(".conteudo-produto a").href = linkOfertaRegister + parametroUrlRetorno + uri;
}

if (typeof textoBotaoOfertaRegister != 'undefined' && textoBotaoOfertaRegister != null && textoBotaoOfertaRegister != '' ) {
	document.querySelector(".conteudo-produto a").innerHTML = textoBotaoOfertaRegister;
}

if (typeof textoOfertaRegister1 != 'undefined' && textoOfertaRegister1 != null && textoOfertaRegister1 != '' ) {
	document.querySelector(".conteudo-produto h2").innerHTML = textoOfertaRegister1;
}

if (typeof textoOfertaRegister2 != 'undefined' && textoOfertaRegister2 != null && textoOfertaRegister2 != '' ) {
	document.querySelector(".conteudo-produto p").innerHTML  = textoOfertaRegister2;
}

if (typeof textoLoginRegister != 'undefined' && textoLoginRegister != null && textoLoginRegister != '' ) {
	document.querySelector("#login-barreira-iframe h2 strong").innerHTML  = textoLoginRegister;
}

if (typeof textoFacaLoginRegister != 'undefined' && textoFacaLoginRegister != null && textoFacaLoginRegister != '' ) {
	document.querySelector("#login-barreira-iframe h2 span").innerHTML  = textoFacaLoginRegister;
}

// backgrounds

if (typeof background1 == 'undefined' || background1 == null || background1 == '' ) {
	background1 = "#1d4c9c";
}

if (typeof background2 == 'undefined' || background2 == null || background2 == '' ) {
	background2 = "#00aeef";
}

if (typeof background3 == 'undefined' || background3 == null || background3 == '' ) {
	background3 = "#73d9ff";
}

if (typeof background4 == 'undefined' || background4 == null || background4 == '' ) {
	background4 = "#55d1ff";
}

// GA

window['dataLayer'] = window['dataLayer'] || [];

var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {
	if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} 
	else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}
	if (redirecionaComAtraso) {if ((elemento.target == "_blank") || (elemento.rel == "external" || (elemento.rel == "nofollow external"))){window.open(elemento.href);} 
	else {setTimeout(function() {window.location = elemento.href}, 300);}}}}

document.querySelector('.conteudo-produto a').addEventListener('click', function(a) {
	a.preventDefault(),
    window.open(document.querySelector(".conteudo-produto a").href),
    EventoGaPiano.disparaEvento(!0,"Register","Clique - Ver ofertas","",!1);
});


if (window.ambienteUtilizadoPiano == 'prd') {
	document.querySelector("#iframeCadun").src = 'https://login.globo.com/login/'+Piano.variaveis.getServicoId()+'?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D'+Piano.variaveis.getServicoId()+'%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523'+uri;	
} else {
	document.querySelector("#iframeCadun").src = 'https://login.qa.globoi.com/login/'+Piano.variaveis.getServicoId()+'?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D'+Piano.variaveis.getServicoId()+'%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523'+uri;
}

document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
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

if(/iPhone/.test(navigator.userAgent) && !window.MSStream){
	document.addEventListener('scroll', function(a) {
		if (document.querySelector("html").scrollTop > 1) {
			document.querySelector("body").classList.add("iphone");
		}
		else {
			document.querySelector("body").classList.remove("iphone");
		}
	});
}

adicionaEstiloRegister = "<style>" +
"@media only screen and (min-width: 769px){" +
"#login-barreira .conteudo-barreira #login-promocao {background: "+background1+";}" +
"#login-barreira .conteudo-barreira #login-promocao .conteudo-produto a {background: "+background2+";}" +
"#login-barreira .conteudo-barreira #login-promocao .conteudo-produto a:hover {background: "+background3+";}" +
"#login-barreira .conteudo-barreira #login-promocao .conteudo-produto p .preco-menor {color: "+background4+";}" +
"}" +
"</style>";

document.getElementById("barreiraRegister").insertAdjacentHTML('beforeend', adicionaEstiloRegister);

setTimeout(function(){document.querySelector('#login-barreira').setAttribute('style','display: block; opacity: 1;');}, 1500);
