export default class Helpers {
    static isDefined(prop) {
        return typeof prop !== 'undefined'
    }

    static setCookie(cName, value, expiredays = null) {
        const exdate = new Date()
        const hostname = location.hostname ? location.hostname : null

        if (!hostname) return

        exdate.setDate(exdate.getDate() + expiredays)
        document.cookie =
            `${cName}=${escape(value)}${expiredays ? '' : `;expires=${exdate.toUTCString()}`
            }; path=/;` +
            `domain=.${hostname.split('.').reverse()[1]}.${hostname.split('.').reverse()[0]
            }`
    }

    static getCookie(name) {
        const match = document.cookie
            ? document.cookie.match(new RegExp(`${name}=([^;]+)`))
            : false
        const cookieTiny = match ? unescape(match[1].toString()) : ''
        return cookieTiny
    }

    static consoleColor() {
        return {
            header: 'background: #1e4c9a; color: #fff; font-weight:bold'
        }
    }
}
