import productsId from '../mocks/products/products-id'

export default class Products {
    constructor() {
        this.productName =
            typeof window.nomeProdutoPiano !== 'undefined'
                ? window.nomeProdutoPiano
                : null
    }

    setGlobal() {
        const productsSettings = {
            Product: {
                name: this.productName,
                // id: this.productId
            },
        }

        window.tinyCpt = window.tinyCpt
            ? Object.assign(productsSettings, window.tinyCpt)
            : productsSettings
    }

    get isProductValor() {
        return this.productName === 'valor'
    }

    get isAutoEsporte() {
        return this.productName  === 'auto-esporte' 
    }

    get isTealiumProducts() {
        return (this.isProductValor || this.isAutoEsporte)
    }

    get productId() {
        return typeof productsId[this.productName] !== 'undefined' &&
            typeof productsId[this.productName].id !== 'undefined'
            ? productsId[this.productName].id
            : null
    }
}
