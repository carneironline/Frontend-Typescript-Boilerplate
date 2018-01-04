var x = document.querySelectorAll("footer .footer #banner-assinatura-footer a, .top-header ul.menu-interacao>li#banner-assinatura a, .top-header ul.menu-interacao > li#banner-assinatura a, footer .bar .assine a");
var i;
if (window.linkAssinaturaHeaderFooter) {
	for (i = 0; i < x.length; i++) {
		x[i].href = linkAssinaturaHeaderFooter;
	}
} else {
	for (i = 0; i < x.length; i++) {
		x[i].href = "https://seguro.oglobo.com.br/assinatura-jornal-oglobo/assine/landing-siteoglobo/?utm_source=siteoglobo&utm_medium=homeeinternas&utm_campaign=botaoassine_topo_rodape";
	}
}

if (window.imagemAssinaturaHeaderFooter) {
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundImage = "url("+imagemAssinaturaHeaderFooter+")";
	}
} else {
	imagemAssinaturaHeaderFooter = "https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-header-footer-piano/v1/images/btn-01.png"
	for (i = 0; i < x.length; i++) {
		x[i].style.backgroundImage = "url("+imagemAssinaturaHeaderFooter+")";
	}
}