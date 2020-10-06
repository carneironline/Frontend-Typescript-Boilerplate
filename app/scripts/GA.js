import ProductsModule from './Products'
import Helper from "./Helpers"

export default class GA {
    constructor() {
        this.debug = window.tinyCpt.debug.ga
        this.Products = new ProductsModule()

        this.setGlobalVars()
    }

    has_gaq() {
        return this.Products.isTealiumProducts && typeof window._gaq !== 'undefined'
    }

    setGlobalVars() {
        window.dataLayer = window.dataLayer || []

        if (this.Products.isTealiumProducts)
            window._gaq = window._gaq || [] 
    }

    setEvents(action, label, category = 'Piano', eventName = 'EventoGAPiano', calledBy = '') {
        console.log('%c log-ga-event ', Helper.consoleColor().header, calledBy, `action: ${action}`, `label: ${label}`, `category: ${category}`, `event: ${eventName}`)
 
        if (this.has_gaq())
            window._gaq.push(['_trackEvent', category, action, label, null, true])

        window.dataLayer.push({
            event: eventName,
            eventoGACategoria: category,
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }

    setEventsError(action, label, category = 'Piano Erro', eventName = 'EventoGAPiano', calledBy = '') {
        console.log('%c log-ga-error-event ', Helper.consoleColor().header, calledBy, `action: ${action}`, `label: ${label}`, `category: ${category}`, `event: ${eventName}`)

        if (this.Products.isProductValor)
            window._gaq.push(['_trackEvent', category, action, label, null, true])

        window.dataLayer.push({
            event: eventName,
            eventoGACategoria: category,
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }
}
