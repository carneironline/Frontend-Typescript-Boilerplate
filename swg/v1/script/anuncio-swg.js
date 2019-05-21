const bannerSWG = (function() {
    
    //let image = "https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/05/09/google-desk-2.png";
    let imagePiano = "https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/05/09/google-desk-2.png"
    let linkPiano = "https://assinatura.oglobo.globo.com/VitrineDigital.aspx?id_parc=6236&cod_vitrine=112&campanha=sim"
    let textPiano = "<strong> O GLOBO</strong> em parceria com o <strong>Google</strong> oferece assinatura com <strong>três meses grátis</strong> e <strong>50% de desconto</strong> nos nove meses seguintes em apenas dois cliques</p>";
    
    const htmlAnuncio =`<div class="banner-swg" onclinck="">            
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
        //var widgetHtmlSwgIn = document.querySelector('section.block.block--advertising.block--advertising-header');
        const widgetHtmlSwgIn = document.querySelector('.teste');

        widgetHtmlSwgIn.insertAdjacentHTML("afterend", htmlAnuncio);
    }
    
    init(htmlAnuncio);

    return {
        bannerSWG
    }
})();

