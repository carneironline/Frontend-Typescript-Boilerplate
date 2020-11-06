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

    get isOidcLogin() {
        return typeof productsId[this.productName] !== 'undefined' &&
            typeof productsId[this.productName].isOidcLogin !== 'undefined'
            ? productsId[this.productName].isOidcLogin
            : false
    }

    get loginDomain() {
        const loginDomain = window.tinyCpt.isProduction
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
        return window.tinyCpt.Piano?.variaveis?.getServicoId() || null
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
