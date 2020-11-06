import productsId from '../mocks/products/products-id'

export default class Products {
    constructor() {
        this.name = typeof window.nomeProdutoPiano !== 'undefined' ? window.nomeProdutoPiano : null
        this.id = this.productId
        this.code = this.productCode

        window.tinyCpnt.Product = this
    }

    get isProductValor() {
        return this.name === 'valor'
    }

    get isAutoEsporte() {
        return this.name  === 'auto-esporte' 
    }

    get isTealiumProducts() {
        return (this.isProductValor || this.isAutoEsporte)
    }

    get productId() {
        return typeof productsId[this.name] !== 'undefined' && typeof productsId[this.name].id !== 'undefined'
            ? productsId[this.name].id
            : null
    }

    get productCode() {
        return typeof productsId[this.name] !== 'undefined' && typeof productsId[this.name].cod_prod !== 'undefined'
            ? productsId[this.name].cod_prod
            : null
    }

    get loginDomain() {
        const loginDomain = window.tinyCpnt.isProduction
            ? 'https://login.globo.com/'
            : 'https://login.qa.globoi.com/'

        return loginDomain
    }

    get serviceId() {
        return window.tinyCpnt.Piano?.variaveis?.getServicoId() || null
    }

    get returnUrl() {
        return encodeURIComponent(window.location.href)
    }

    getLoginUrl() {
        let str = ''

        if (this.serviceId) {
            str = `${this.loginDomain}login/${this.serviceId}?url=${this.returnUrl}`
        }

        return str
    }

    getRegisterUrl() {
        let str = ''

        if (this.serviceId) {
            str = `${this.loginDomain}cadastro/${this.serviceId}?url=${this.returnUrl}`
        }

        return str
    }

    getLogoutUrl() {
        let str = ''

        if (this.serviceId)
            str = `${this.loginDomain}logout?url=${this.loginDomain}login/${this.serviceId}?url=${this.returnUrl}`

        return str
    }
}
