; (function () {
    const mobiTopImg = window.mobiTopImg ? window.mobiTopImg : null
    const mobiBottomImg = window.mobiBottomImg ? window.mobiBottomImg : null
    const loginUrl = window.mobiLoginUrl ? window.mobiLoginUrl : null
    const promoURL = window.gcomPromoUrl ? window.gcomPromoUrl : null

    if (!mobiTopImg || !mobiBottomImg || !loginUrl || !promoURL) return null

    const gcomPromo = document.createElement('div')
    gcomPromo.id = 'piano-mobi-paywall'
    gcomPromo.innerHTML = `
    <div class="piano-mobi-paywall"> 
        <div class="box-paywall-image">
          <a class="box-paywall-login-url" href="${loginUrl}">
            <img class="box-paywall-top" src="${mobiTopImg}" alt="">
          </a>
          <a class="box-paywall-promo-url" href="${promoURL}">
            <img class="box-paywall-bottom" src="${mobiBottomImg}" alt="">
          </a>
        </div>
      <div class='back-drop'></div>
    </div>
    `

    document.body.insertBefore(gcomPromo, document.body.lastChild)
    document.body.style.overflow = 'hidden'

    function setGa(evtName, evtCategory, evtAction, evtLabel) {
        window.dataLayer.push({
            event: evtName,
            eventoGACategoria: evtCategory,
            eventoGAAcao: evtAction,
            eventoGARotulo: evtLabel,
        })
    }

    function setLoadGa() {
        const evtAction = 'Barreira'
        const evtName = 'EventoGAPiano'
        const evtLabel = window.Piano
            ? window.Piano.metricas.montaRotuloGA()
            : ''

        setGa(evtName, 'Piano', evtAction, evtLabel)
    }

    setLoadGa()
})()
