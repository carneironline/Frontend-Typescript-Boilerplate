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
    
    static getQuery(query) {
        return new URLSearchParams(document.location.search).get(query)
    }

    static consoleColor(type = 'default') {
        let colorBg = '#1e4c9a'
        let colorText = '#fff'

        switch(type) {
            case 'error':  colorBg = '#f00'; break;
            case 'warning':  colorBg = '#ff0'; colorText = '#000'; break;
            case 'ga':  colorBg = '#06aa48'; colorText = '#000'; break;
            case 'ga-error':  colorBg = '#f00'; colorText = '#fff'; break;
        }

        return {
            header: `background: ${colorBg}; color: ${colorText}; font-weight:bold; font-size:14px; padding:2px; margin-right:5px;`,
            title: `background: ${colorBg}; color: ${colorText}; font-weight:bold; font-size:14px; padding:2px;`,
        }
    }

    static console(text = '', title = '', type = 'default') {
        switch(type) {
            case 'ga': title = 'log-ga-event'; break;
            case 'ga-error': title = 'log-ga-event-error'; break;
        }

        console.log(`%c %c${title} `, Helpers.consoleColor().header, Helpers.consoleColor(type).title, text)
    }
}
