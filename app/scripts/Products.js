import productsId from '../mocks/products/products-id'

export default class Products {
    constructor() {
        
        this.name = typeof window.nomeProdutoPiano !== 'undefined' ? window.nomeProdutoPiano : null
        this.id = this.productId
        this.code = this.productCode
    }

    init() {
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
        return productsId[this.name].id
    }

    get productCode() {
        return productsId[this.name].cod_prod
    }

    get isOidcLogin() {
        return typeof productsId[this.productName] !== 'undefined' &&
            typeof productsId[this.productName].isOidcLogin !== 'undefined'
            ? productsId[this.productName].isOidcLogin
            : false
    }

    get loginDomain() {
        const loginDomain = window.tinyCpnt.isProduction
            ? 'https://login.globo.com/'
            : 'https://login.qa.globoi.com/'

        return loginDomain
    }

    get oidcLoginDomain(){
        const oidcLoginDomain = window.tinyCpt.isProduction
            ? 'https://www.oidcservice.globo.com/'
            : 'https://www.oidcservice-qa.globoi.com/'

        return oidcLoginDomain
    }


    get serviceId() {
        return productsId[this.name].id
    }

    get returnUrl() {
        return encodeURIComponent(window.location.href)
    }

    getLoginUrl() {
        if (this.isOidcLogin) {
            return this.getOidcLoginUrl()
        }

        return this.getOldLoginUrl()
    }

    getOldLoginUrl() {
        let str = ''

        if (this.serviceId) {
            str = `${this.loginDomain}login/${this.serviceId}?url=${this.returnUrl}`
        }

        return str
    }

    getOidcLoginUrl() {
        let str = ''

        if (this.serviceId) {
            str = `${this.oidcLoginDomain}login?productName=${this.productName}&redirectTo=${this.returnUrl}&oldServiceId=${this.serviceId}`
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
