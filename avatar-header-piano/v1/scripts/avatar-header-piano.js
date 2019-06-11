var tagSite = document.getElementById("banner-assinatura-header");

if (tagSite) {
	var aTag = document.createElement('a');
    aTag.setAttribute('href',linkAvatarHeader);
    aTag.setAttribute('style', "order: 2; width: 55px; height: 22px");
    
    var divTag = document.createElement('img');
	
	if (window.matchMedia("(max-width: 767px)").matches) {
		divTag.setAttribute('style',"width: 20px; height: 30px; padding-top:5px; ");
		divTag.setAttribute('src',imagemAvatarHeader);        
    }
    
    
    divTag.setAttribute('id', 'btn-avatar-header');
    aTag.appendChild(divTag);
	tagSite.appendChild(aTag);
}