(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        const tagSite = document.getElementById('banner-assinatura-header');

        if(!tagSite)
            return false;

    
        const divTag = document.createElement('div');
        const toolTip = document.createElement('div');
        const imgTag = document.createElement('img');
        const buttonTag = document.createElement('button');
        const pTag = document.createElement('p');
        const uTag = document.createElement('ul');
        const liTag = document.createElement('li');
        const searchWrapper = document.querySelector('.site-header__search-wrapper');
        const siteHeader = document.querySelector('.site-header__banner-assinatura-wrapper');
        const btnAssine = document.querySelector('#btn-assine-header');       

        divTag.setAttribute('class', 'account-avatar');
        divTag.setAttribute('style', 'order: 2; width: 18px; height: unset; margin-left: 18px;');
		imgTag.setAttribute('style','max-width: 100%; height: auto; display: block;');
        imgTag.setAttribute('src',imagemAvatarHeader);   
        imgTag.setAttribute('id', 'btn-avatar-header');
        toolTip.setAttribute('class', 'account-tooltip');
        toolTip.setAttribute('style', 'position: absolute; display: none; width: 128px; height: 116px; top: 30px; right: 0; border-radius: 5px; box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.36); border: solid 1px #cccccc; background-color: #ffffff; z-index: 9;');
        pTag.innerHTML = 'Olá';
        pTag.setAttribute('style', 'font-family: OpenSans; font-size: 13px; color: #7a7a7a; margin-left: 14px;');
        uTag.setAttribute('style', 'margin-inline-start: -1em; font-family: OpenSans; color: #7a7a7a');
        liTag.innerHTML = 'minha conta';
        buttonTag.innerHTML = 'SAIR';
        buttonTag.setAttribute('style', 'width: 39px; height: 19px; border-radius: 2px; border-style: solid; border-width: 1px; border-image-source: linear-gradient(to bottom, #e5e6e6, #b8b8b8); border-image-slice: 1; background-image: linear-gradient(to bottom, #ffffff, #efefef), linear-gradient(to bottom, #e5e6e6, #b8b8b8); background-origin: border-box; margin-left: 78px; font-family: OpenSans; font-size: 10px; font-weight: 600; color: #9a9a9a;');

        tagSite.style.display = 'flex';
        tagSite.style.flexDirection = 'row';
        tagSite.style.alignItems = 'center';
        searchWrapper.style.marginRight = 0;
        siteHeader.style.marginRight = 0;
        btnAssine.style.overflow = 'unset';
        siteHeader.style.overflow = 'unset';

        toolTip.appendChild(pTag);
        uTag.appendChild(liTag);
        toolTip.appendChild(uTag);
        toolTip.appendChild(buttonTag);

        
        divTag.appendChild(imgTag);
        divTag.appendChild(toolTip);
        tagSite.appendChild(divTag);

        
    }

})();
