(function() {
    
    //let image = "https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/05/09/google-desk-2.png";
    let image = "https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/05/09/google-desk-2.png"
    let linkPiano = "https://assinatura.oglobo.globo.com/VitrineDigital.aspx?id_parc=6236&cod_vitrine=112&campanha=sim"
    let textPiano = "<strong> O GLOBO</strong> em parceria com o <strong>Google</strong> oferece assinatura com <strong>três meses grátis</strong> e <strong>50% de desconto</strong> nos nove meses seguintes em apenas dois cliques</p>";
    
    let htmlAnuncio = `<div class="banner-wrap">                       
                            <div class="image-banner">
                                <img alt="Assine com o Google" class="image-footer" src="${image}"/> 
                            </div>
                            <div class="text-banner">
                                <p class="main-title">${textPiano}</p>
                            </div>
                        </div>`;

    function init() {
        var widgetHtmlSwgIn = document.querySelector('section.block.block--advertising.block--advertising-header');
        
        widgetHtmlSwgIn.insertAdjacentHTML("afterend", htmlAnuncio);
    }
    
    init();
})();

