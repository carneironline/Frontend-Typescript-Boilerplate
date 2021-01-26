declare global {
    interface Window {
        liveagent: {
            init: any;
            showWhenOnline: any;
            showWhenOffline: any;
            startChat: any;
        };
        _laq: any;
    }
}

function liveAgentAddHTML() {
    let html = `
    <div id="liveagent_button_online" style="display: none; border: 0px none; cursor: pointer"></div>
    <div id="liveagent_button_offline" style="display: none; border: 0px none; "></div>
    `

    insertHTML(html)
}

function liveAgentScript() {
    const script = document.createElement('script')

    if (process.env.NODE_ENV === 'production') {
        script.src = 'https://c.la2-c1-ia2.salesforceliveagent.com/content/g/js/49.0/deployment.js'
    } else {
        script.src = 'https://c.la1-c1cs-ph2.salesforceliveagent.com/content/g/js/49.0/deployment.js'
    }

    document.body.appendChild(script)
}

function liveAgentInitChat() {
    if (window.liveagent) {
        if (process.env.NODE_ENV === 'production') {
            window.liveagent.init('https://d.la2-c1-ia2.salesforceliveagent.com/chat', '5721a000000GqxB', '00D1a000000aTyk');
        } else {
            window.liveagent.init('https://d.la1-c1cs-ph2.salesforceliveagent.com/chat', '57263000000006Y', '00D630000008tdp');
        }

    }
}

function liveAgentActive(chatID: string) {
    if (!window._laq) { window._laq = []; }

    const online: any = document?.querySelector('#liveagent_button_online')
    const offline: any = document?.querySelector('#liveagent_button_offline')

    window._laq.push(function () {
        window.liveagent.showWhenOnline(chatID, online);
        window.liveagent.showWhenOffline(chatID, offline);
    });
}

export default function liveAgentInit(chatID: string, callback: Function) {

    liveAgentAddHTML()
    liveAgentScript()

    liveAgentChecker((active: boolean) => {
        liveAgentInitChat()
        liveAgentActive(chatID)

        setTimeout(() => {
            if (active)
                callback(active)
        }, 1000);

    })

}

function liveAgentChecker(callback: Function) {
    let count = 0

    const interval = setInterval(() => {

        if (window.liveagent) {
            if (callback)
                callback(true)

            clearInterval(interval)
        }

        if (count === 10) {
            if (callback)
                callback(false)

            clearInterval(interval)
        }

        count++
    }, 1000)
}

function insertHTML(htmlToRender = '') {
    const insertPosition = 'beforeend'

    if (htmlToRender)
        document.body.insertAdjacentHTML(insertPosition, htmlToRender)
}
