var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
$('body').append("" +
"<div id='login-barreira' class=''>" +
"	<div class='conteudo-barreira'>" +
"		<div id='login-promocao'>" +
"			<div class='conteudo-produto'>" +
"				<img class='img-mobi' src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/v3/images/produto-m.png'>" +
"				<img class='img-desk' src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/v3/images/produto-d.png'>" +
"				<h2>BLACK FRIDAY <b>50% OFF POR 1 ANO</b></h2>" +
"				<p class='img-mobi'>Assine a partir de <i>R$ 4,90</i> por  mÃªs</p>" +
"				<p class='img-desk'>A partir de <i>R$ 4,90</i> por mÃªs</p>" +
"				<a href='https://assinatura.oglobo.globo.com/VitrineDigital.aspx' target='_blank'>Assine JÃ¡</a>" +
"			</div>" +
"		</div>" +
"		<div id='login-barreira-iframe'>" +
"			<h2><strong>Acesso para assinantes e cadastrados</strong><span>Cadastre-se e continue lendo O Globo</span></h2>" +
"			<h2><strong>ConteÃºdo exclusivo para assinantes </strong><span>JÃ¡ Ã© assinante? Identifique-se</span></h2>" +
"			<div class='segura-cadun'>" +
"				<div class='scroll-cadun'>" +
"					<iframe id='iframeCadun' src='https://login.globo.com/login/"+Piano.variaveis.getServicoId()+"?tam=widget&amp;url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D"+Piano.variaveis.getServicoId()+"%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523"+uri+"'></iframe>" +
"				</div>" +
"			</div>" +
"		</div>" +
"	</div>" +
"</div>");

//Controla e edita o HTML
// Verifica se Variaves do piano existem.

if (typeof precoRegister != 'undefined' && precoRegister != null && precoRegister != '' ) {
	$(".preco-menor").text(precoRegister);
}

if (typeof periodoPrecoRegister != 'undefined' && periodoPrecoRegister != null && periodoPrecoRegister != '' ) {
	$(".quantidade-mes").text(periodoPrecoRegister);
}

if (typeof imagemRegisterMobi != 'undefined' && imagemRegisterMobi != null && imagemRegisterMobi != '' ) {
	$(".conteudo-produto img.img-mobi").attr("src", imagemRegisterMobi);
}

if (typeof imagemRegisterDesk != 'undefined' && imagemRegisterDesk != null && imagemRegisterDesk != '' ) {
	$(".conteudo-produto img.img-desk").attr("src", imagemRegisterDesk);
}

if (typeof linkOfertaRegister != 'undefined' && linkOfertaRegister != null && linkOfertaRegister != '' ) {
	var parametroUrlRetorno = linkOfertaRegister.indexOf('?') != -1 ? '&url_retorno=' : '?url_retorno=';
	$(".conteudo-produto a").attr("href", linkOfertaRegister + parametroUrlRetorno + uri);
}

if (typeof textoBotaoOfertaRegister != 'undefined' && textoBotaoOfertaRegister != null && textoBotaoOfertaRegister != '' ) {
	$(".conteudo-produto a").text(textoBotaoOfertaRegister);
}

if (typeof textoOfertaRegister1 != 'undefined' && textoOfertaRegister1 != null && textoOfertaRegister1 != '' ) {
	$(".conteudo-produto h2").text(textoOfertaRegister1);
}

if (typeof textoOfertaRegister2M != 'undefined' && textoOfertaRegister2M != null && textoOfertaRegister2M != '' ) {
	$(".conteudo-produto p.img-mobi").text(textoOfertaRegister2M);
}

if (typeof textoOfertaRegister2D != 'undefined' && textoOfertaRegister2D != null && textoOfertaRegister2D != '' ) {
	$(".conteudo-produto p.img-desk").text(textoOfertaRegister2D);
}

if (typeof textoLoginRegister != 'undefined' && textoLoginRegister != null && textoLoginRegister != '' ) {
	$("#login-barreira-iframe h2 strong").text(textoLoginRegister);
}

if (typeof textoFacaLoginRegister != 'undefined' && textoFacaLoginRegister != null && textoFacaLoginRegister != '' ) {
	$("#login-barreira-iframe h2 span").text(textoFacaLoginRegister);
}

if (typeof barreiraTipoRegister != 'undefined' && barreiraTipoRegister != null && barreiraTipoRegister != '' ) {
	$("#login-barreira").addClass("register");
}


// GA

window['dataLayer'] = window['dataLayer'] || [];
var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}if (redirecionaComAtraso) {if ((elemento.attr("target") == "blank") || (elemento.attr("rel") == "external" || (elemento.attr("rel") == "nofollow external"))){window.open(elemento.attr("href"));} else {setTimeout(function() {window.location = elemento.attr("href");}, 300);}}}}

$(".conteudo-produto a").click(function(a){
	a.preventDefault(),
	window.open($(".conteudo-produto a").attr("href")),EventoGaPiano.disparaEvento(!0,"Register","Clique - Ver ofertas","",!1);
});

if (window.ambienteUtilizadoPiano == 'prd') {
	$("#iframeCadun").attr("src" , 'https://login.globo.com/login/'+Piano.variaveis.getServicoId()+'?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D'+Piano.variaveis.getServicoId()+'%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523'+uri);	
} else {
	$("#iframeCadun").attr("src" , 'https://login.qa.globoi.com/login/'+Piano.variaveis.getServicoId()+'?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D'+Piano.variaveis.getServicoId()+'%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523'+uri);
}

$(window).load(function () {
	if (!$('#barra-globocom').length) {
		(function() {
			var s = document.createElement("script");
			s.type = "text/javascript"; s.async = true; s.defer = true; s.charset = "utf-8";
			s.src = "https://s.glbimg.com/gl/ba/js/barra-globocom.min.js";
			var ss = document.getElementsByTagName("script")[0]; ss.parentNode.insertBefore(s, ss);
		})();	
	}
});

if(/iPhone/.test(navigator.userAgent) && !window.MSStream){
    $('body').addClass('iphone');
}

if(/iPhone/.test(navigator.userAgent) && !window.MSStream){
    $(window).scroll(function() {
	    if ($(this).scrollTop() === 1) {
	        $('body').addClass('iphone');
	    }
	    else {
	    	$('body').removeClass('iphone');
	    }
	});
}

