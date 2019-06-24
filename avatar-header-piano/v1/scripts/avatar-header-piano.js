(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        const tagSite = document.getElementById('banner-assinatura-header');

        if(!tagSite)
            return false;

    
        const divTag = document.createElement('div');
        const buttonDiv = document.createElement('div');
        const myAccount = document.createElement('a');
        const toolTip = document.createElement('div');
        const imgTag = document.createElement('img');
        const buttonTag = document.createElement('a');
        const pTag = document.createElement('p');
        const uTag = document.createElement('ul');
        const liTag = document.createElement('li');
        const searchWrapper = document.querySelector('.site-header__search-wrapper');
        const siteHeader = document.querySelector('.site-header__banner-assinatura-wrapper');
        const btnAssine = document.querySelector('#btn-assine-header');       

        buttonTag.setAttribute('href', linkAccountLogout);
        myAccount.setAttribute('href', linkMyAccount);
        myAccount.setAttribute('target', '_blank');
        myAccount.setAttribute('style', 'margin-inline-start: -1em; font-family: Open-Sans-Regular; color: #7a7a7a; font-size: 12px !important;');
        divTag.setAttribute('class', 'account-avatar');
        divTag.setAttribute('style', 'order: 2; width: 18px; height: unset; margin-left: 18px;');
		imgTag.setAttribute('style','max-width: 100%; height: auto; display: block;');
        imgTag.setAttribute('src',imagemAvatarHeader);   
        imgTag.setAttribute('id', 'btn-avatar-header');
        toolTip.setAttribute('class', 'account-tooltip');
        toolTip.setAttribute('style', 'position: absolute; display: none; width: 128px; height: 116px; top: 30px; right: -4px; border-radius: 5px; box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.36); border: solid 1px #cccccc; background-color: #ffffff; z-index: 9;');
        pTag.innerHTML = 'Olá!';
        pTag.setAttribute('style', 'font-family: Open-Sans-SemiBold; font-size: 13px; color: #7a7a7a; margin-left: 14px;');
        uTag.setAttribute('style', 'margin-inline-start: -1em; font-family: Open-Sans-Regular; color: #7a7a7a; font-size: 12px;');
        liTag.innerHTML = 'minha conta';
        buttonTag.innerHTML = 'SAIR';
        buttonDiv.setAttribute('style', 'width: 39px !important; height: 19px !important; border-radius: 2px; border-style: solid; border-width: 1px; border-image-source: linear-gradient(to bottom, #e5e6e6, #b8b8b8); border-image-slice: 1; background-image: linear-gradient(to bottom, #ffffff, #efefef), linear-gradient(to bottom, #e5e6e6, #b8b8b8) !important; background-origin: border-box !important; margin-left: 78px !important; font-family: Open-Sans-SemiBold; font-size: 10px !important; font-weight: 600; color: #9a9a9a !important;');
        buttonTag.setAttribute('style', 'margin-left: 8px !important; font-family: Open-Sans-SemiBold; font-size: 10px !important; font-weight: 600; color: #9a9a9a !important; text-align: center;');

        tagSite.style.display = 'flex';
        tagSite.style.flexDirection = 'row';
        tagSite.style.alignItems = 'center';
        searchWrapper != null ? searchWrapper.style.marginRight = 0 : "";
        siteHeader != null ? siteHeader.style.marginRight = 0 : "";
        btnAssine != null ? btnAssine.style.overflow = 'unset' : "";
        siteHeader != null ? siteHeader.style.overflow = 'unset' : "";

        buttonDiv.appendChild(buttonTag);
        myAccount.appendChild(liTag)
        toolTip.appendChild(pTag);
        uTag.appendChild(myAccount);
        toolTip.appendChild(uTag);
        toolTip.appendChild(buttonDiv);

        
        divTag.appendChild(imgTag);
        divTag.appendChild(toolTip);
        tagSite.appendChild(divTag);

    }

})();