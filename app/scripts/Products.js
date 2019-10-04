export default class Products  {
	constructor() { 
        this.productName = (typeof window.nomeProdutoPiano !== 'undefined') ? window.nomeProdutoPiano : null;
    }

    setGlobal() {
        const productsSettings = {
            Product: {
                name: this.productName
            }
        }

        window.tinyCpt = (window.tinyCpt) ?  Object.assign(productsSettings, window.tinyCpt) : productsSettings; 
    }
    
    get isProductValor() {
        return (this.productName && this.productName === 'valor') ? true : false;
    }

}