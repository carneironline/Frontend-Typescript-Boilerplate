import ProductsModule from './Products'
import Helper from "./Helpers"

export default class GA {
    constructor() {
        this.debug = window.tinyCpnt.debug.ga
        this.Products = new ProductsModule()

        
    }

    init() {
        this.setGlobalVars()
    }

    hasGaq() {
        return this.Products.isTealiumProducts && typeof window._gaq !== 'undefined'
    }

    setGlobalVars() {
        window.dataLayer = window.dataLayer || []

        if (this.Products.isTealiumProducts)
            window._gaq = window._gaq || []

        window.tinyCpnt.GA = this
    }

    setEvents(calledBy = '', action, label, category = 'Piano', eventName = 'EventoGAPiano') {

        const consoleText = `calledBy: ${calledBy} | action: ${action} | label: ${label} | category: ${category} | event: ${eventName}`
        Helper.console(consoleText, '', 'ga')

        if (this.hasGaq())
            window._gaq.push(['_trackEvent', category, action, label, null, true])

        window.dataLayer.push({
            event: eventName,
            eventoGACategoria: category,
            eventoGAAcao: action,
            eventoGARotulo: label,
        })
    }

    setEventsError(calledBy = '', action, label, category = 'Piano Erro', eventName = 'EventoGAPiano') {
        const consoleText = `calledBy: ${calledBy} | action: ${action} | label: ${label} | category: ${category} | event: ${eventName}`
        Helper.console(consoleText, '', 'ga-error')

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
