import ProductsModule from './Products'
import Helper from "./Helpers"

export default class GA {
    constructor() {
        this.debug = window.tinyCpt.debug.ga
        this.Products = new ProductsModule()

        this.setGlobalVars()
    }

    hasGaq() {
        return this.Products.isTealiumProducts && typeof window._gaq !== 'undefined'
    }

    setGlobalVars() {
        window.dataLayer = window.dataLayer || []

        if (this.Products.isTealiumProducts)
            window._gaq = window._gaq || []
    }

    setEvents(action, label, category = 'Piano', eventName = 'EventoGAPiano') {
        console.log('%c log-ga-event ', Helper.consoleColor().header, `action: ${action}`, `label: ${label}`, `category: ${category}`, `event: ${eventName}`)

        if (this.hasGaq())
            window._gaq.push(['_trackEvent', category, action, label, null, true])

        window.dataLayer.push({
            event: eventName,
            eventoGACategoria: category,
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }

    setEventsError(action, label, category = 'Piano Erro', eventName = 'EventoGAPiano') {
        console.log('%c log-ga-error-event ', Helper.consoleColor().header, `action: ${action}`, `label: ${label}`, `category: ${category}`, `event: ${eventName}`)

        if (this.hasGaq())
            window._gaq.push(['_trackEvent', category, action, label, null, true])

        window.dataLayer.push({
            event: eventName,
            eventoGACategoria: category,
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }
}
