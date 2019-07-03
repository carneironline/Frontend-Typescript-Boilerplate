const bannerSWG = (function() {
    
    const htmlAnuncio =`<div class="banner-swg">            
                            <a class="banner-swg-link" href="${linkPiano}" target="_blank">    
                                <div class="banner-swg-image" id="linkImage">
                                    <img class="banner-swg-image-img" alt="Assine com o Google" src="${imagePiano}"/>
                                </div>
                                <div class="banner-swg-text">
                                    <div class="main-title">${textPiano}</div>
                                </div>
                            </a>       
                        </div>`;

    function init() {
        const widgetHtmlSwgIn = document.querySelector('section.block.block--advertising.block--advertising-header');

        if(widgetHtmlSwgIn)
            widgetHtmlSwgIn.insertAdjacentHTML("afterend", htmlAnuncio);
    }
    
    init();

})();

