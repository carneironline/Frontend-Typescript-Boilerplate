export default class Helpers {

    static isDefined(prop) {
        return (typeof prop !== 'undefined') ? true: false;
    }

    static setCookie(c_name, value, expiredays = null) {
        let exdate = new Date();
        let hostname = location.hostname ? location.hostname : null;

        if(!hostname) return;

        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" +escape(value) + ((expiredays) ? "" : ";expires=" + exdate.toUTCString())
        + "; path=/;" + "domain=." + hostname.split('.').reverse()[1] + "." + hostname.split('.').reverse()[0];
    }

    static getCookie(name) {
        let match = (document.cookie) ? document.cookie.match(new RegExp(name+'=([^;]+)')) : false;
        let cookieTiny = match ? unescape(match[1].toString()) : "";
        return cookieTiny;
    }
        

}