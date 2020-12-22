import Helpers from './Helpers'

const SESSION_ID = 'SESSION_ID'
const ACCESS_TOKEN = 'ACCESS_TOKEN'
const FORCE_LOGOUT = 'forceLogout'
const GLBID = 'GLBID'
const GLOBO_ID = 'GLOBO_ID'

const ACCESS_TOKEN_PARAMETER = 'globo_access_token'

export default class LoginHelper {

    static createSessionIdCookie(){
        const sessionId = this.getSessionId()
        if (sessionId){
            this.setCookie(sessionId)
        }
    }

    static getSessionId(){
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get(SESSION_ID)
    }

    static setCookie(value) {
        Helpers.setCookie(SESSION_ID, value, 28)
        this.removeQueryFromUrl()
    }

    static createTokenCookie(){
        const tokenParameter = this.getAccessTokenParameter()
        if (tokenParameter){
            this.setAcessCookie(tokenParameter)
        }
    }

    static getAccessTokenParameter(){
        const urlParams = new URLSearchParams(window.location.search)
        return urlParams.get(ACCESS_TOKEN_PARAMETER)
    }

    static setAcessCookie(value) {
        Helpers.setCookie(ACCESS_TOKEN, value, 1)
        this.removeQueryFromUrl()
    }

    static getAcessCookie() {
        return Helpers.getCookie(ACCESS_TOKEN)
    }

    static getCookie(){
        return Helpers.getCookie(SESSION_ID)
    }

    static removeQueryFromUrl(){ 
        const urlParts = window.location.href.split('?')
        const urlParams = new URLSearchParams(window.location.search)

        urlParams.delete(SESSION_ID)
        urlParams.delete(GLBID)
        urlParams.delete(ACCESS_TOKEN_PARAMETER)

        const newUrl = `${urlParts[0]}?${urlParams.toString()}`
        window.history.pushState('object', document.title, newUrl);
    }

    static ifDoesNotContainsGLOBOIDCookieLogout(){
        const globoid = Helpers.getCookie(GLOBO_ID);
        if (!globoid){
            this.logout()
        }
    }

    static logout(){
        const sessionId = Helpers.getCookie(SESSION_ID)
        if (sessionId){
            Helpers.deleteCookie(GLBID)
            Helpers.deleteCookie(SESSION_ID)
            Helpers.deleteCookie(GLOBO_ID)
    
            const urlParts = window.location.href.split('?')
            const urlParams = new URLSearchParams(window.location.search)
    
            urlParams.delete(SESSION_ID)
            urlParams.delete(GLBID)
            urlParams.delete(FORCE_LOGOUT)

            const newUrl = `${urlParts[0]}?${urlParams.toString()}`

            window.location.href = `${newUrl}`
        }
    }
}