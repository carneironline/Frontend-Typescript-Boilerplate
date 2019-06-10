var tagSite = document.getElementById("banner-assinatura-header");

if (tagSite) {
	var aTag = document.createElement('a');
	aTag.setAttribute('href',linkAvatarHeader);
	
	if (window.matchMedia("(max-width: 767px)").matches) {
		aTag.setAttribute('style',"background-image: url("+imagemAvatarHeader+"); width: 20px; height: 23px; order: 2; margin-left: 30px");
	}
	
	aTag.setAttribute('target', '_blank');
	aTag.innerHTML = "Assinatura";
	aTag.setAttribute('id', 'btn-assine-header');
	tagSite.appendChild(aTag);
}
