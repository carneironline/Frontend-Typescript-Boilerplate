import ProductsModule from './Products'

export default class Tiny {
    constructor() {
        this.Products = new ProductsModule()
        window.hasPaywall = window.hasPaywall || null
        window.tp = window.tp || []        
        window.PaywallAnalytics = window.PaywallAnalytics || {}

        this.isProduction = window.ambienteUtilizadoPiano === 'prd'
        this.isQa = window.ambienteUtilizadoPiano === 'qlt'
        this.isDev = window.ambienteUtilizadoPiano === 'dev'

        this.activeComponents = []

        this.setGlobalTiny()
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

        window.tinyCpnt = window.tinyCpnt
            ? Object.assign(defaultSettings, window.tinyCpnt)
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
        window.tinyCpnt.Piano = obj
    }

    setActiveComponent(component, callback = null) {
        if(!this.checkActiveComponent(component)) {
            window.tinyCpnt.activeComponents.push(component)
            
            if(callback)
                callback()
        }
    }

    checkActiveComponent(component) { 
        return window.tinyCpnt.activeComponents?.includes(component)
    }
}
