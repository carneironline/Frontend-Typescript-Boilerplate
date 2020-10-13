export default class Helpers {
    static isDefined(prop) {
        return typeof prop !== 'undefined'
    }

    static setCookie(name, value, days = 1) {
        const domain = window.location.hostname.includes('.globoi.')
            ? '.globoi.com'
            : '.globo.com'
        const d = new Date()
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
        document.cookie = `${name}=${value};path=/;expires=${d.toGMTString()}; domain=${domain}`
    }

    static getCookie(name) {
        const match = document.cookie
            ? document.cookie.match(new RegExp(`${name}=([^;]+)`))
            : false
        const cookieTiny = match ? unescape(match[1].toString()) : ''
        return cookieTiny
    }

    static deleteCookie(name) {
        this.setCookie(name, '', -1)
    }
    

    static consoleColor() {
        return {
            header: 'background: #1e4c9a; color: #fff; font-weight:bold'
        }
    }
}
