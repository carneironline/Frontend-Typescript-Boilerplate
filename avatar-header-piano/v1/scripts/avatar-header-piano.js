(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        const tagSite = document.getElementById('banner-assinatura-header');

        if(!tagSite)
            return false;

    
        const aTag = document.createElement('a');
        const imgTag = document.createElement('img');
        const searchWrapper = document.querySelector('.site-header__search-wrapper');
        const siteHeader = document.querySelector('.site-header__banner-assinatura-wrapper');


        aTag.setAttribute('href',linkAvatarHeader);
        aTag.setAttribute('style', 'order: 2; width: 18px; height: unset; margin-left: 18px;');
		imgTag.setAttribute('style','max-width: 100%; height: auto; display: block;');
        imgTag.setAttribute('src',imagemAvatarHeader);   
        imgTag.setAttribute('id', 'btn-avatar-header');
    
        tagSite.style.display = 'flex';
        tagSite.style.flexDirection = 'row';
        tagSite.style.alignItems = 'center';
        searchWrapper.style.marginRight = 0;
        siteHeader.style.marginRight = 0;
        
        aTag.appendChild(imgTag);
        tagSite.appendChild(aTag);
    }

})();
