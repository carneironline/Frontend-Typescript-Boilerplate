(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        const tagSite = document.getElementById('banner-assinatura-header');

        if(!tagSite)
            return false;

    
        const aTag = document.createElement('a');
        const divTag = document.createElement('img');

        aTag.setAttribute('href',linkAvatarHeader);
        aTag.setAttribute('style', 'order: 2; width: 20px; height: unset; margin-left: 20px;');
		divTag.setAttribute('style','max-width: 100%; height: auto; display: block; ');
        divTag.setAttribute('src',imagemAvatarHeader);   
        divTag.setAttribute('id', 'btn-avatar-header');
    
        tagSite.style.display = 'flex';
        tagSite.style.flexDirection = 'row';
        tagSite.style.alignItems = 'center';
        
        aTag.appendChild(divTag);
        tagSite.appendChild(aTag);
    }
})();
