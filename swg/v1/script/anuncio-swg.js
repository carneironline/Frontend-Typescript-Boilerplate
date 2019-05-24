const bannerSWG = (function() {
    
    const htmlAnuncio =`<div class="banner-swg">            
                            <a class="banner-swg-link" href="${linkPiano}" target="_blank">    
                                <div class="banner-swg-image" id="linkImage">
                                    <img class="banner-swg-image-img" alt="Assine com o Google" src="${imagePiano}"/>
                                </div>
                                <div class="banner-swg-text">
                                    <p class="main-title">${textPiano}</p>
                                </div>
                            </a>       
                        </div>`;

    function init(htmlAnuncio) {
        const widgetHtmlSwgIn = document.querySelector('section.block.block--advertising.block--advertising-header');

        widgetHtmlSwgIn.insertAdjacentHTML("afterend", htmlAnuncio);
    }
    
    init(htmlAnuncio);

    return {
        bannerSWG
    }
})();

