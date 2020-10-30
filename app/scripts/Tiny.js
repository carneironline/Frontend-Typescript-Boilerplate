import ProductsModule from './Products'

export default class Tiny {
    constructor() {
        this.Products = new ProductsModule()
        window.hasPaywall = window.hasPaywall || null
        window.tp = window.tp || []
        window.Piano = window.Piano || {}
        window.PaywallAnalytics = window.PaywallAnalytics || {}

        this.isProduction = window.ambienteUtilizadoPiano === 'prd'
        this.isQa = window.ambienteUtilizadoPiano === 'qlt'
        this.isDev = window.ambienteUtilizadoPiano === 'dev'

        this.activeComponents = []

        this.setGlobalTiny()
        this.Products.setGlobal()
    }

    setGlobalTiny() {
        const {isProduction} = this
        const {isQa} = this
        const {isDev} = this

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
            assetsPath: this.getAssetsPath(),
            activeComponents: this.activeComponents
        }

        window.tinyCpt = window.tinyCpt
            ? Object.assign(defaultSettings, window.tinyCpt)
            : defaultSettings
    }

    getAssetsPath() {
        if(this.isProduction)
            return 'https://static.infoglobo.com.br'

        if(this.isQa)
            return 'https://static-stg.infoglobo.com.br'

        return 'https://tinyjs.globoi.com:8080'
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
}
