if (window.linkAssinaturaHeaderFooter) {
	document.querySelector("footer .footer #banner-assinatura-footer a, .top-header ul.menu-interacao>li#banner-assinatura a, .top-header ul.menu-interacao > li#banner-assinatura a, footer .bar .assine a").href = linkAssinaturaHeaderFooter;
} else {
    document.querySelector("footer .footer #banner-assinatura-footer a, .top-header ul.menu-interacao>li#banner-assinatura a, .top-header ul.menu-interacao > li#banner-assinatura a, footer .bar .assine a").href = "https://seguro.oglobo.com.br/assinatura-jornal-oglobo/assine/landing-siteoglobo/?utm_source=siteoglobo&utm_medium=homeeinternas&utm_campaign=botaoassine_topo_rodape";
}
if (window.imagemAssinaturaHeaderFooter) {    
    document.querySelector("footer .footer #banner-assinatura-footer a, .top-header ul.menu-interacao>li#banner-assinatura a, .top-header ul.menu-interacao > li#banner-assinatura a, footer .bar .assine a").style.backgroundImage = "url("+imagemAssinaturaHeaderFooter+")";
} else {
    imagemAssinaturaHeaderFooter = "https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-header-footer-piano/v1/images/btn-01.png"
    document.querySelector("footer .footer #banner-assinatura-footer a, .top-header ul.menu-interacao>li#banner-assinatura a, .top-header ul.menu-interacao > li#banner-assinatura a, footer .bar .assine a").style.backgroundImage = "url("+imagemAssinaturaHeaderFooter+")";
}