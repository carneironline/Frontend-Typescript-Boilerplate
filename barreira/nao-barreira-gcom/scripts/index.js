(function() {
    const deskImg = window.gcomDeskImg ? window.gcomDeskImg : null;
    const mobiImg = window.gcomMobiImg ? window.gcomMobiImg : null;
    const promoURL = window.gcomPromoUrl ? window.gcomPromoUrl : null;

    if(!deskImg || !mobiImg || !promoURL) return null; 

    gcomPromo = document.createElement('div');
    gcomPromo.id = 'gcomPromo';
    gcomPromo.innerHTML = `
    <div class="gcom-promo"> 
        <div class="box-texto-comunicacao">
            <span class="fechar-modal"></span>
            <a href="${promoURL}">
            <picture>
                <source srcset="${deskImg}" media="(min-width: 768px)">
                <img src="${mobiImg}" alt="">
            </picture>
            </a>
                </div>
        <div class='back-drop'></div>
    </div>
    `;

    document.body.insertBefore(gcomPromo, document.body.lastChild);
    document.body.style.overflow = "hidden";

    document.querySelector('.gcom-promo .fechar-modal').addEventListener('click', function() {
        document.querySelector('.gcom-promo').parentNode.removeChild(document.querySelector('.gcom-promo'));
        document.body.style.overflow = "";
    });

    document.querySelector('.gcom-promo .back-drop').addEventListener('click', function() {
        document.querySelector('.gcom-promo').parentNode.removeChild(document.querySelector('.gcom-promo'));
    });

    function setGa(evtName, evtCategory, evtAction, evtLabel) { 
        dataLayer.push({'event': evtName, 'eventoGACategoria': evtCategory, 'eventoGAAcao': evtAction, 'eventoGARotulo':evtLabel});
    }

    function setLoadGa() {          
        let evtAction = 'CPF Associado';
        let evtName = 'EventoGAPiano';
        let evtLabel = window.Piano ? Piano.metricas.montaRotuloGA() : '';

        setGa(evtName, 'Piano', evtAction, evtLabel );
    };

    setLoadGa();
})()