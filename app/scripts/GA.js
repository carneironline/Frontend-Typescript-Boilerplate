import ProductsModule from './Products'

export default class GA {
    constructor() {
        this.debug = window.tinyCpt.debug.ga
        this.Products = new ProductsModule()
    }

    setGlobalVars() {
        window.dataLayer = window.dataLayer || []

        if (this.Products.isProductValor && typeof _gaq === 'undefined')
            window._gaq = window._gaq || []
    }

    setEvents(action, label, category = 'Piano') {
        if (window.tinyCpt.debug.ga)
            console.log('log-ga-event', category, action, label)

        if (this.Products.isProductValor)
            _gaq.push(['_trackEvent', category, action, label, , true])

        dataLayer.push({
            event: 'EventoGAPiano',
            eventoGACategoria: category,
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }

    setEventsError(action, label) {
        if (this.Products.isProductValor)
            _gaq.push(['_trackEvent', 'Piano Erro', action, label, , true])

        dataLayer.push({
            event: 'EventoGAPiano',
            eventoGACategoria: 'Piano Erro',
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }
}
