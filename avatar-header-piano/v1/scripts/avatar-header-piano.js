var tagSite = document.getElementById("banner-assinatura-header");

if (tagSite) {
	var aTag = document.createElement('a');
    aTag.setAttribute('href',linkAvatarHeader);
    
    var divTag = document.createElement('div');
	
	if (window.matchMedia("(max-width: 767px)").matches) {
		divTag.setAttribute('style',"background-image: url("+imagemAvatarHeader+"); width: 20px; height: 22px; order: 2; margin-left: 30px; background-size: 20px; background-repeat: no-repeat;");
	}
    
    
    aTag.setAttribute('target', '_blank');
    divTag.setAttribute('id', 'btn-avatar-header');
    aTag.appendChild(divTag);
	tagSite.appendChild(aTag);
}

