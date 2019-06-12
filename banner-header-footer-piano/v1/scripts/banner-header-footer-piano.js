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
tagSite.style.display = "flex";
tagSite.style.flexDirection = "row";

if (tagSite) {
	var aTag = document.createElement('a');
	aTag.setAttribute('href',linkAssinaturaHeaderFooter);
	
	if (window.matchMedia("(max-width: 767px)").matches) {
		aTag.setAttribute('style',"background-image: url("+imagemAssinaturaHeaderFooter+"); width: 46px; height: 20px; order: 1");
	}
	else if (window.matchMedia("(max-width: 1024px)").matches) {
		aTag.setAttribute('style',"background-image: url("+imagemAssinaturaHeaderFooter+"); width: 110px; height: 44px; order: 1");
	}
	else {
		aTag.setAttribute('style',"background-image: url("+imagemAssinaturaHeaderFooter+"); width: 180px; height: 44px; order: 1");
	}

	aTag.setAttribute('target', '_blank');
	aTag.innerHTML = "Assinatura";
	aTag.setAttribute('id', 'btn-assine-header');
	tagSite.appendChild(aTag);
}