import PaywallDefaultCpnt from '../PaywallDefaultCpnt'
import BarberBarrier from '../BarberBarrier'

class PaywallCpnt {
    constructor() {
        this.debug = window.tinyCpt.debug.paywall
        this.setTemplateSettings(() => {
            this.init()
        })
    }

    showConsole() {
        console.groupCollapsed('PaywallCpnt Component')

        console.group('Constructor')
        console.table(this)
        console.groupEnd()

        console.group('glbPaywall')
        console.table(window.glbPaywall)
        console.groupEnd()

        console.groupEnd()
    }

    setTemplateSettings(callback) {
        const templateSettings = {
            template: 'default',
            productClass:
                typeof nomeProdutoPiano !== 'undefined'
                    ? `paywall-cpt-${window.nomeProdutoPiano}`
                    : 'paywall-cpt-oglobo',
            title: 'Esse conteúdo é o título.',
            targetBlank: true,
            topMobi: '',
            topDesk: '',
            topLink: '',
            leftMobi: '',
            leftDesk: '',
            leftLink: '',
            rightMobi: '',
            rightDesk: '',
            rightLink: '',
            middlePreText: '',
            middleText: '',
            middleTextLink: '',
            middleTextColor: '#000',
            hideLogin: false,
            loginText: 'Faça seu login',
            loginPreText: 'Já possui cadastro?',
        }

        window.glbPaywall = { ...templateSettings, ...window.glbPaywall }

        if (this.debug) this.setDebugTemplateSettings()

        callback()
    }

    getLoginUrl(type = '') {
        const loginDomain = window.tinyCpt.isProduction
            ? 'https://login.globo.com/'
            : 'https://login.qa.globoi.com/'
        const serviceId = window.tinyCpt.Piano?.variaveis?.getServicoId() || null
        const urlReturn = encodeURIComponent(document.location.href)
        let str = ''

        if (serviceId) {
            if (type === 'register') {
                str = `${loginDomain}cadastro/${serviceId}?url=${urlReturn}`
            } else {
                str = `${loginDomain}login/${serviceId}?url=${urlReturn}`
            }
        }

        return str
    }

    get loginUrl() {
        return this.getLoginUrl()
    }

    get registerUrl() {
        return this.getLoginUrl('register')
    }

    setDebugTemplateSettings() {
        const obj = {}
        obj.topMobi = 'https://via.placeholder.com/300x150'
        obj.topDesk = 'https://via.placeholder.com/804x128'
        obj.topLink = 'https://google.com?l1'
        obj.leftMobi = 'https://via.placeholder.com/300x500'
        obj.leftDesk = 'https://via.placeholder.com/402x515'
        obj.leftLink = 'https://google.com?l2'
        obj.rightMobi = 'https://via.placeholder.com/300x500'
        obj.rightDesk = 'https://via.placeholder.com/402x515'
        obj.rightLink = 'https://google.com?l3'
        obj.middlePreText = 'Voltar para a home da '
        obj.middleText = 'globo.com'
        obj.middleTextLink = '//google.com'
        obj.middleTextColor = '#0669DE'
        obj.hideLogin = false
        obj.loginText = 'Faça seu login'
        obj.loginPreText = 'Já possui cadastro?'

        window.glbPaywall = { ...window.glbPaywall, ...obj }
    }

    init() {
        const delayTimer = window.glbPaywall?.delayTimer ? window.glbPaywall.delayTimer * 1000 : 0
        const hasBarberBarrier = Boolean(window.glbPaywall.barberBarrier && Object.keys(window.glbPaywall.barberBarrier)?.length)
        const hasOnlyBarberBarrier = window.glbPaywall?.only === 'barberBarrier'

        setTimeout(() => {
            if ((hasBarberBarrier && window.matchMedia("(max-width: 1023px)").matches) || hasOnlyBarberBarrier) {
                this.componentActive = 'BarberBarrier'
                new BarberBarrier(this)
            } else {
                this.componentActive = 'PaywallDefaultCpnt'
                new PaywallDefaultCpnt(this)
            }

            this.showConsole()
        }, delayTimer)
    }
}

export default PaywallCpnt