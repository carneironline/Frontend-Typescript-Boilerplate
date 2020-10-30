import ProductsModule from './Products'

export default class Tiny {
    constructor() {
        this.Products = new ProductsModule()
        window.hasPaywall = window.hasPaywall || null
        window.tp = window.tp || []
        window.Piano = window.Piano || {}
        window.PaywallAnalytics = window.PaywallAnalytics || {}

        this.activeComponents = []

        this.setGlobalTiny()
        this.Products.setGlobal()
        this.init()
    }

    setGlobalTiny() {
        const isProduction = window.ambienteUtilizadoPiano === 'prd'
        const isQa = window.ambienteUtilizadoPiano === 'qlt'
        const isDev = window.ambienteUtilizadoPiano === 'dev'

        const defaultSettings = {
            debug: {
                tiny: false,
                paywall: false,
                swg: false,
                ga: false,
            },
            isProduction,
            isQa,
            isDev,
            environmentType: this.environmentType(),
            assetsPath: isProduction
                ? 'https://static.infoglobo.com.br'
                : isQa ? 'https://static-stg.infoglobo.com.br' : 'https://tinyjs.globoi.com:8080',
            activeComponents: this.activeComponents
        }

        window.tinyCpt = window.tinyCpt
            ? Object.assign(defaultSettings, window.tinyCpt)
            : defaultSettings
    }

    environmentType() {
        const environmentType =  window.ambienteUtilizadoPiano
        if(environmentType) {
            switch(environmentType) {
                case 'prd': return 'prd'; break;
                case 'qlt': return 'qlt'; break;
                default: return 'dev'
            }
        }

        return null
    }

    setPiano(obj) {
        window.tinyCpt.Piano = obj
    }

    setActiveComponent(component, callback = null) {
        if(!this.checkActiveComponent(component)) {
            window.tinyCpt.activeComponents.push(component)
            
            if(callback)
                callback()
        }
    }

    checkActiveComponent(component) { 
        return window.tinyCpt.activeComponents?.includes(component)
    }

    init() {}
}
