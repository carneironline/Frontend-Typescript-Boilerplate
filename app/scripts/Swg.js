import Helpers from './Helpers'; 

export default class Swg {
    constructor() {
        window.SWG = window.SWG || []; //TODO: Understand why this variable exists
        window.swgEntitlements = window.swgEntitlements || null;
        this.debug = (Helpers.isDefined(window.tinyCpt)) ? window.tinyCpt.debug.swg : false;
        this.disabled = false;
        this.content = null;
        this.localProductPiano = (typeof nomeProdutoPiano !== 'undefined') ? nomeProdutoPiano : null;
        this.hasProductJSON = false;
        this.productJSON = null;
        this.elHead = document.head; 

        this.setGlobalSWG();
        this.setUtms();
    }

    get isDefined() { 
        return (window.tinyCpt.Swg.global) ? true : true; 
    }

    setGlobalSWG() {
        if(!Helpers.isDefined(window.tinyCpt)) return;

        window.tinyCpt.Swg = {
            global: (typeof swg !== 'undefined') ? swg : null
        };
    }

    setUtms() {             
        const urlParams = new URLSearchParams(window.location.search.substring(1));
        const utmsProps = (typeof window.glbPaywall.swg !== 'undefined' && typeof window.glbPaywall.swg.utms !== 'undefined') ? window.glbPaywall.swg.utms : null; 

        utmsProps.forEach((item) => { 
            let name = item.name.toLowerCase();
            let value = item.value;
            urlParams.set(`utm_${name}`, value);
        });
        
        if (history.pushState) {
            let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();
            window.history.pushState({path: newurl}, window.document.title, newurl);
        }
    }

    subscribe() {
        if( this.disabled || !this.isDefined ) return;
            window.tinyCpt.Swg.global.subscribe('br.com.infoglobo.oglobo.swg.google');
    }

    async getProducts() {
        if(this.debug)
            return await fetch('../app/mocks/swg/products.json').then(res => res.json());

        return await fetch('https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/products.json').then(res => res.json());
    }

    async getProduct() { 
        if(!this.localProductPiano) return;
        
        const products = await this.getProducts();
        const product = products.filter(item => item.pianoProductName === this.localProductPiano )[0];
        return product || null;
    }

    async removeProperties(obj) { 
        const propsToRemove = ['productName', 'pianoProductName'];
        const newObj = Object.assign({}, obj);

        propsToRemove.forEach(element => {
            delete newObj[element];
        });

        return newObj;
    }

    async markupTemplate() { 
        const productJSON =  await this.removeProperties(await this.getProduct()) || null; 
        const product = Object.keys(productJSON).length ? JSON.stringify(productJSON) : null;

        if(!product) return;

        this.hasProductJSON = true;
        this.productJSON = `${ product }`;
    }

    async setMarkup() { 
        await this.markupTemplate();
        if(!this.productJSON) return;

        const element = document.createElement('script');

        element.type = 'application/ld+json';
        element.innerHTML = this.productJSON;
        this.elHead.insertAdjacentElement('beforeend', element);
    }

    setSwgScript() {
        const element = document.createElement('script');
        element.src = 'https://news.google.com/swg/js/v1/swg.js';
        this.elHead.insertAdjacentElement('beforeend', element);
    }

    setAldebaranScript() {
        const element = document.createElement('script');
        const urlProd = 'https://s3.glbimg.com/v1/AUTH_c10ae819c568460bb4ec17c0a8ec5267/aldebaran/js/bundle.js';
        const urlStg = 'https://s3.glbimg.com/v1/AUTH_addc5e8f316f48ea9181af37160b22b4/aldebaran/js/bundle.js';

        element.src = window.tinyCpt.isProduction ? urlProd : urlStg;
        this.elHead.insertAdjacentElement('beforeend', element);
    }

    testSWG() {
        return new Promise( (resolve, reject) => {
            let count = 0; 
            
            let interval = setInterval(() => {
                if(window.swg) {
                    window.tinyCpt.Swg.global = window.swg;
                    resolve(window.tinyCpt.Swg.global);
                    clearInterval(interval);
                } 
                
                if(count === 20) {
                    reject('There isn\'t window.swg');
                    clearInterval(interval);
                }
    
                count++;
            }, 100);
        });
    }

    async init() {
        if(!this.localProductPiano) return;
        await this.setMarkup();  
         
        if(!this.hasProductJSON) return;
        
        await this.setSwgScript(); 
        await this.setAldebaranScript();   
        await this.testSWG();       
    }
}
