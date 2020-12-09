import Helpers from './Helpers'
import Products from './Products'

const SESSION_ID = 'SESSION_ID'
const GLBID = 'GLBID'

export default class LoginHelper {

    static createSessionIdCookie(){
        const sessionId = this.getSessionId()
        if (sessionId){
            this.setCookie(sessionId)
        }
    }

    static getSessionId(){
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(SESSION_ID)
    }

    static setCookie(value) {
        if (!this.getCookie()){
            Helpers.setCookie(SESSION_ID, value, 28)
            this.removeQueryFromUrl()
        }
    }

    static getCookie(){
        return Helpers.getCookie(SESSION_ID)
    }

    static removeQueryFromUrl(){ 
        const urlParts = window.location.href.split('?')
        const urlParams = new URLSearchParams(window.location.search)

        urlParams.delete(SESSION_ID)
        urlParams.delete(GLBID)

        const newUrl = `${urlParts[0]}?${urlParams.toString()}`
        window.history.pushState('object', document.title, newUrl);
    }

    static logout(){
        const sessionId = Helpers.getCookie(SESSION_ID)
        
        if (sessionId){
            Helpers.deleteCookie(GLBID)
            Helpers.deleteCookie(SESSION_ID)
    
            const urlParts = window.location.href.split('?')
            const urlParams = new URLSearchParams(window.location.search)
    
            urlParams.delete(SESSION_ID)
            urlParams.delete(GLBID)
    
            const newUrl = `${urlParts[0]}?${urlParams.toString()}`
                
            const logoutUrl = Products.getLogoutUrl()
            window.location.href = `${logoutUrl}?url=${newUrl}`
        }
    }
}