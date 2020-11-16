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
        if (!this.getCookie(SESSION_ID)){
            Helpers.setCookie(SESSION_ID, value, 28)
        }
    }

    static getCookie(name){
        return Helpers.getCookie(name)
    }

    static logout(){
        let sessionId = Helpers.getCookie(SESSION_ID)

        if (sessionId){
            Helpers.deleteCookie(GLBID)
            Helpers.deleteCookie(SESSION_ID)
    
            let urlParts = window.location.href.split('?')
            let urlParams = new URLSearchParams(window.location.search)
    
            urlParams.delete(SESSION_ID)
            urlParams.delete(GLBID)
    
            var newUrl = urlParts[0] + '?' + urlParams.toString()
            
            window.location = newUrl
    
            let logoutUrl = Products.getLogoutUrl()
            window.location = `${logoutUrl}?url=${newUrl}`
        }
    }
}