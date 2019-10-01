import LogsModule from './Logs'; 
import ProductsModule from './Products'; 

export default class Tiny  {
	constructor() { 
        this.Products = new ProductsModule();
        this.Logs = new LogsModule();
        window.hasPaywall = window.hasPaywall || false;
        window.tp = window.tp || [];
        window.Piano = window.Piano || {};
        window.PaywallAnalytics = window.PaywallAnalytics || {};
        
        this.setGlobalTiny();
        this.Products.setGlobal();
        this.init();
    }

    setGlobalTiny() {
        const defaultSettings = {
            debug: {
                tiny: false,
                paywall: false,
                swg: false,
                ga: false
            },
            isProduction: (window.ambienteUtilizadoPiano === 'prd') ? true : false
        }

        window.tinyCpt = (window.tinyCpt) ?  Object.assign(defaultSettings, window.tinyCpt) : defaultSettings; 
    }
    
    setPiano(obj) {
        window.tinyCpt.Piano = obj;
    }

    init() {
    }

}