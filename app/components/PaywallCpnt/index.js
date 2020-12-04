import Products from '../../scripts/Products'
import PaywallDefaultCpnt from '../PaywallDefaultCpnt'
import BarberBarrier from '../BarberBarrier'
import Tiny from '../../scripts/Tiny'

class PaywallCpnt {
    constructor() {
        this.Tiny = new Tiny()
        this.Products = new Products()
        this.debug = window.tinyCpnt.debug.paywall
        this.componentName = 'PaywallCpnt'
        this.componentActive = null

        this.Tiny.setActiveComponent(this.componentName, () => {
            this.setTemplateSettings(() => {
                this.init()
            })
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

        this.checkPseudoVars()

        window.glbPaywall = { ...templateSettings, ...window.glbPaywall }

        if (this.debug) this.setDebugTemplateSettings()

        callback()
    }

    checkPseudoVars() {
        const checkLinkProps = ['topLink', 'leftLink', 'rightLink', 'middleTextLink']
        const checkBarberBarrierLinkProps = ['urlTop', 'urlBottom']
        const pseudoVars = ['@loginUrl', '@registerUrl']

        checkLinkProps.forEach(prop => {
            pseudoVars.forEach(pseudoVar => {
                if(window.glbPaywall[prop] === pseudoVar)
                    window.glbPaywall[prop] = pseudoVar.includes('login') ? this.Products.getLoginUrl() : this.Products.getRegisterUrl()
            })
        })

        checkBarberBarrierLinkProps.forEach(prop => { 
            pseudoVars.forEach(pseudoVar => {
                if(window.glbPaywall.barberBarrier &&  window.glbPaywall.barberBarrier[prop] === pseudoVar)
                    window.glbPaywall.barberBarrier[prop] = pseudoVar.includes('login') ? this.Products.getLoginUrl() : this.Products.getRegisterUrl()
            })
        })

    }

    get loginUrl() {
        return this.Products.getLoginUrl()
    }

    get logoutUrl() {
        return this.Products.getLogoutUrl()
    }

    get registerUrl() {
        return this.Products.getRegisterUrl()
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
        const media = window.matchMedia("(max-width: 1023px)").matches

        setTimeout(() => {
            if ((hasBarberBarrier && media) || hasOnlyBarberBarrier) {
                this.componentActive = 'BarberBarrier' 
                new BarberBarrier(this)
            } else {
                this.componentActive = 'PaywallDefaultCpnt'
                new PaywallDefaultCpnt(this)
            }

            this.showConsole()
        }, delayTimer)
    }

    checksAdblockIsEnabled() {
        document.cookie = '__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        
        const setNptTechAdblockerCookie = function (adblocker) {
            const d = new Date()
            d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000)
            document.cookie = `__adblocker=${adblocker ? 'true' : 'false'
                }; expires=${d.toUTCString()}; path=/`
        }

        const script = document.createElement('script')
        script.setAttribute('async', true)
        script.setAttribute('src', 'https://www.npttech.com/advertising.js')
        script.setAttribute('onerror', 'setNptTechAdblockerCookie(true);')
        
        document.getElementsByTagName('head')[0].appendChild(script)
    }
}

export default PaywallCpnt