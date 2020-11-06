import Helpers from './Helpers'

const SESSION_ID = 'SESSION_ID'

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

    static deleteSession(){
        Helpers.deleteCookie(SESSION_ID)
    }
}