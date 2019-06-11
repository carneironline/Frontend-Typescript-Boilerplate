var tagSite = document.getElementById("banner-assinatura-header");

if (tagSite) {
	var aTag = document.createElement('a');
    aTag.setAttribute('href',linkAvatarHeader);
    aTag.setAttribute('style', "order: 2; width: 55px; height: 22px");
    
    var divTag = document.createElement('div');
	
	if (window.matchMedia("(max-width: 767px)").matches) {
		divTag.setAttribute('style',"background-image: url("+imagemAvatarHeader+"); width: 55px; height: 22px; background-size: 20px; background-repeat: no-repeat; background-position-x: right");
	}
    
    
    aTag.setAttribute('target', '_blank');
    divTag.setAttribute('id', 'btn-avatar-header');
    aTag.appendChild(divTag);
	tagSite.appendChild(aTag);
}

