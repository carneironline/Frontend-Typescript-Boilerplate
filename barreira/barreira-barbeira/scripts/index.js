;(function () {
    const debug = false

    let settings = {
        topImage: null,
        bottomImage: null,
        loginURL: null,
        subscribeURL: null,
    }

    let settingsDebug = {
        topImage:
            'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/tiny/mobi/exclusivo-top_01.jpg',
        bottomImage:
            'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/tiny/mobi/b4_03.png',
        loginURL: '//google.com',
        subscribeURL: '//google.com',
    }

    if (window.glbBarberPaywall)
        settings = { ...settings, ...window.glbBarberPaywall }

    if (debug) settings = { ...settings, ...settingsDebug }

    if (
        !settings.topImage ||
        !settings.bottomImage ||
        !settings.loginURL ||
        !settings.subscribeURL
    )
        return null

    const elMain = document.createElement('div')
    elMain.id = 'piano-mobi-paywall'
    elMain.innerHTML = `
    <div class="piano-mobi-paywall"> 
        <div class="box-paywall-image">
          <a class="box-paywall-login-url" href="${settings.loginURL}">
            <img class="box-paywall-top" src="${settings.topImage}" alt="">
          </a>
          <a class="box-paywall-promo-url" href="${settings.subscribeURL}">
            <img class="box-paywall-bottom" src="${settings.bottomImage}" alt="">
          </a>
        </div>
      <div class='back-drop'></div>
    </div>
    `

    document.body.insertBefore(elMain, document.body.lastChild)
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
