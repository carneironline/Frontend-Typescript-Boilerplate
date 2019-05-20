(function() {
    
    let imageMobi = "https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/05/09/google-desk-2.png";
    let imageDesk = "https://d37iydjzbdkvr9.cloudfront.net/arquivos/2019/05/09/google-desk-2.png"
    let linkPiano = "https://assinatura.oglobo.globo.com/VitrineDigital.aspx?id_parc=6236&cod_vitrine=112&campanha=sim"
    let textPiano = "<strong> O GLOBO</strong> em parceria com o <strong>Google</strong> oferece assinatura com <strong>três meses grátis</strong> e <strong>50% de desconto</strong> nos nove meses seguintes em apenas dois cliques</p>";
    
    function htmlAnuncio() { 
       return `<div class="blockContainer">
            <a id="info-imgs-container" href="${linkPiano}">
                <div id="info-imgs">
                    <div id="info-imgs__grey-bar"></div>
                    <div id="info-imgs__img-container">
                        <img alt="Assine com o Google" class="info-img-1" src="${imageMobi}"/> 
                        <img alt="Assine com o Google" class="info-img-3" src="${imageDesk}"/></div>
                    <div id="info-imgs__txt-container">
                        <p class="main-title">${textPiano}</p>
                    </div>
                </div>
            </a>
        </div>`;
    }
    
    var widgetHtmlSwgIn = document.querySelector('section.block.block--advertising.block--advertising-header');
        
    widgetHtmlSwgIn.insertAdjacentHTML("afterend", htmlAnuncio);

})();

