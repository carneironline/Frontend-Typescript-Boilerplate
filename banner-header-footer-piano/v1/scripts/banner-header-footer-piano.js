var x = document.querySelectorAll("footer .footer #banner-assinatura-footer a, .top-header ul.menu-interacao>li#banner-assinatura a, .top-header ul.menu-interacao > li#banner-assinatura a, footer .bar .assine a");
var i;
for (i = 0; i < x.length; i++) {
	if (window.linkAssinaturaHeaderFooter) {		
		x[i].href = linkAssinaturaHeaderFooter;
	} else {
		x[i].href = "https://seguro.oglobo.com.br/assinatura-jornal-oglobo/assine/landing-siteoglobo/?utm_source=siteoglobo&utm_medium=homeeinternas&utm_campaign=botaoassine_topo_rodape";
	}
	if (window.imagemAssinaturaHeaderFooter) {
		x[i].style.backgroundImage = "url("+imagemAssinaturaHeaderFooter+")";
	} else {
		imagemAssinaturaHeaderFooter = "https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-header-footer-piano/v1/images/btn-01.png";
		x[i].style.backgroundImage = "url("+imagemAssinaturaHeaderFooter+")";
	}
}

// novo header do globo temporario

var tagSite = document.getElementById("banner-assinatura-header");

if (!(tagSite === null)) {
	var aTag = document.createElement('a');
	aTag.setAttribute('href',linkAssinaturaHeaderFooter);
	aTag.setAttribute('style',"background-image: url("+imagemAssinaturaHeaderFooter+")");
	aTag.innerHTML = "Assinatura";
	tagSite.appendChild(aTag);
}