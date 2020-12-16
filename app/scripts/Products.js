import productsId from '../mocks/products/products-id'
import LoginHelper from './LoginHelper'


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
        return typeof productsId[this.name] !== 'undefined' &&
            typeof productsId[this.name].isOidcLogin !== 'undefined'
            ? productsId[this.name].isOidcLogin
            : false
    }

    get loginDomain() {
        const loginDomain = window.tinyCpnt.isProduction
            ? 'https://login.globo.com/'
            : 'https://login.qa.globoi.com/'

        return loginDomain
    }

    get oidcLoginDomain(){
        const oidcLoginDomain = window.tinyCpnt.isProduction
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
            str = `${this.oidcLoginDomain}login?productName=${this.name}&redirectTo=${this.returnUrl}&oldServiceId=${this.serviceId}`
        }

        return str
    }

    getOidcLoginDomainUrl() {
        return this.oidcLoginDomain
    }

    getRegisterUrl() {
        let str = ''

        if (this.serviceId) {
            str = `${this.loginDomain}cadastro/${this.serviceId}?url=${this.returnUrl}`
        }

        return str
    }

    getLogoutUrl() {
        if (this.isOidcLogin) {
            return this.getOidcLogoutUrl()
        }
        return this.getOldLogoutUrl()
    }

    getOidcLogoutUrl() {
        let str = ''

        if (this.serviceId){
            const encodedUrl = encodeURIComponent(`${this.getOidcLoginUrl()}`)     
            str = `${this.oidcLoginDomain}logout?sessionId=${LoginHelper.getCookie()}&redirectTo=${encodedUrl}`
        }

        return str
    }

    getOldLogoutUrl() {
        let str = ''

        if (this.serviceId)
            str = `${this.loginDomain}logout?url=${this.loginDomain}login/${this.serviceId}?url=${this.returnUrl}`

        return str
    }
}
