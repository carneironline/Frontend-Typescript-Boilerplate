(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        const tagSite = document.getElementById('banner-assinatura-header');

        if(!tagSite)
            return false;

    
        const divTag = document.createElement('div');
        const toolTip = document.createElement('div');
        const imgTag = document.createElement('img');
        const searchWrapper = document.querySelector('.site-header__search-wrapper');
        const siteHeader = document.querySelector('.site-header__banner-assinatura-wrapper');
        const btnAssine = document.querySelector('#btn-assine-header');       

        divTag.setAttribute('class', 'account-avatar');
        divTag.setAttribute('style', 'order: 2; width: 18px; height: unset; margin-left: 18px;');
		imgTag.setAttribute('style','max-width: 100%; height: auto; display: block;');
        imgTag.setAttribute('src',imagemAvatarHeader);   
        imgTag.setAttribute('id', 'btn-avatar-header');
        toolTip.setAttribute('class', 'account-tooltip');
        toolTip.setAttribute('style', 'position: absolute; width: 128px; height: 116px; top: 30px; right: 0; border-radius: 5px; box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.36); border: solid 1px #cccccc; background-color: #ffffff; z-index: 9;');
        

        tagSite.style.display = 'flex';
        tagSite.style.flexDirection = 'row';
        tagSite.style.alignItems = 'center';
        searchWrapper.style.marginRight = 0;
        siteHeader.style.marginRight = 0;
        btnAssine.style.overflow = 'unset';
        siteHeader.style.overflow = 'unset';
        
        divTag.appendChild(imgTag);
        tagSite.appendChild(divTag);
        tagSite.appendChild(toolTip);
    }

})();
