import PianoModule from '../Piano'
import PaywallGAModule from './Paywall-ga'
import SwgModule from '../Swg'
import FbModule from '../FB'

export default class PaywallCpt {
    constructor() {
        this.Piano = new PianoModule()
        this.GA = new PaywallGAModule()
        this.SWG = new SwgModule()
        this.FB = new FbModule(this.GA.metrics.fb)

        this.debug = window.tinyCpt.debug.paywall
        this.domain = window.tinyCpt.isProduction
            ? 'https://login.globo.com/'
            : 'https://login.qa.globoi.com/'
        this.setTemplateSettings(() => {
            this.init()
        })

        window.PaywallCpt = this

        window.tinyCpt.Paywall = {
            domain: this.domain,
            GA: this.GA.metrics,
        }
    }

    setTemplateSettings(callback) {
        const templateSettings = {
            template: 'default',
            assetsPath: '',
            display: null,
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
            middleText: '',
            middleTextLink: '',
            hideLoginArea: false,
            loginText: 'Faça login',
            loginPreText: 'Já possui cadastro?',
        }

        window.glbPaywall = { ...templateSettings, ...window.glbPaywall }

        if (this.debug) this.setDebugTemplateSettings()

        this.tagTitle()
        this.tagLogin()
        this.tagBannerTop()
        this.tagBannerLeft()
        this.tagBannerRight()
        this.tagMiddleText()

        callback()
    }

    tagTitle() {
        if (!window.glbPaywall.title) {
            window.glbPaywall.TagTitle = ''
            return
        }

        window.glbPaywall.TagTitle = `
            <div class="paywall-cpt-wrap__text-head">
                ${window.glbPaywall.title}
            </div>
        `
    }

    tagLogin() {
        if (
            (!window.glbPaywall.loginText && !this.getUrlLoginRegister()) ||
            window.glbPaywall.hideLoginArea
        ) {
            window.glbPaywall.TagMiddleText = ''
            return
        }

        window.glbPaywall.TagLogin = `
        <div class="paywall-cpt-wrap__text-center">
            ${
            window.glbPaywall.loginPreText
            } <a href="${this.getUrlLoginRegister()}" data-is-login="true" data-ga-action="Clique em link" data-ga-label="Link 2 - Faça login" data-ga-resetUtp="false" data-href-target=" ${
            window.glbPaywall.targetBlank
            } ">${window.glbPaywall.loginText}</a>
        </div>
        `
    }

    tagBannerTop() {
        window.glbPaywall.TagBannerTop = `
            <div class="paywall-cpt-wrap__top">
                <a href="${window.glbPaywall.topLink}" data-ga-image-position="top" data-ga-action="Clique em link" data-ga-label="Link 1 -" data-ga-resetUtp="true" data-href-target="${window.glbPaywall.targetBlank}">
                    <picture>
                        <source srcset="${window.glbPaywall.topMobi}" media="(max-width: 1023px)">
                        <source srcset="${window.glbPaywall.topDesk}" media="(min-width: 1024px)">
                        <img src="${window.glbPaywall.topMobi}" />
                    </picture>
                </a>
            </div>
        `
    }

    tagBannerLeft() {
        window.glbPaywall.TagBannerLeft = `
            <div class="paywall-cpt-wrap__left">
                <a href="${window.glbPaywall.leftLink}" data-ga-action="Clique em link" data-ga-label="Link 4 - Banner oferta esquerda" data-ga-resetUtp="true" data-href-target="${window.glbPaywall.targetBlank}">
                    <picture>
                        <source srcset="${window.glbPaywall.leftMobi}" media="(max-width: 1023px)">
                        <source srcset="${window.glbPaywall.leftDesk}" media="(min-width: 1024px)">
                        <img src="${window.glbPaywall.leftMobi}" />
                    </picture>
                </a>
            </div>
        `
    }

    tagBannerRight() {
        window.glbPaywall.TagBannerRight = `
            <div class="paywall-cpt-wrap__right">
                <a href="${window.glbPaywall.rightLink}"  data-ga-action="Clique em link" data-ga-label="Link 5 - Banner oferta direita" data-ga-resetUtp="true" data-href-target="${window.glbPaywall.targetBlank}">
                    <picture>
                        <source srcset="${window.glbPaywall.rightMobi}" media="(max-width: 1023px)">
                        <source srcset="${window.glbPaywall.rightDesk}" media="(min-width: 1024px)">
                        <img src="${window.glbPaywall.rightMobi}" />
                    </picture>
                </a>
            </div>
        `
    }

    tagMiddleText() {
        if (
            !window.glbPaywall.middleText &&
            !window.glbPaywall.middleTextLink
        ) {
            window.glbPaywall.TagMiddleText = ''
            return
        }

        window.glbPaywall.TagMiddleText = `
        <div class="paywall-cpt-wrap__text-center paywall-cpt-wrap__middle-text">
            <a href="${window.glbPaywall.middleTextLink}">
                ${window.glbPaywall.middleText}
            </a>
        </div>
        `
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
        obj.middleText = 'Lorem ipsum dollor si amet'
        obj.middleTextLink = '//google.com'

        window.glbPaywall = { ...window.glbPaywall, ...obj }
    }

    bodyAdjust() {
        this.elBody.style.setProperty('overflow', 'hidden', 'important')
        this.elBody.style.setProperty('position', 'fixed', 'important')
        this.elBody.style.setProperty('width', '100%', 'important')
    }

    setElWrapper() {
        this.elCpt = document.querySelector('.paywall-cpt')
    }

    removeElements() {
        this.setElWrapper()

        if (this.elCpt) this.elCpt.remove()

        const elToRemove = document.querySelectorAll(
            '.protected-content, #infoarte-main-content'
        )

        elToRemove.forEach((element) => {
            element.remove()
        })
    }

    createTemplate() {
        this.elBody = document.body
        this.bodyAdjust()
        this.removeElements()
        this.elBody.insertAdjacentHTML('beforeend', this.cssMinified)
        this.elBody.insertAdjacentHTML('beforeend', this.template)
        this.activeTemplateSettings()

        if (window.matchMedia('(min-width: 1024px)').matches) {
            window.addEventListener('resize', () => {
                this.activeTemplateSettings()
            })
        }

        this.GA.paywallLoad()
    }

    activeTemplateSettings() {
        this.setElWrapper()
        this.elCptWrap = this.elCpt.querySelector('.paywall-cpt-wrap')

        setTimeout(() => {
            const elBodyHeight = window.innerHeight + 4
            const elCptWrapHeight = this.elCptWrap.offsetHeight
            const currentTop = window.matchMedia('(min-width: 1024px)').matches
                ? Math.abs(elBodyHeight / 2)
                : Math.abs(elBodyHeight / 2)
            const topWithFullElement = elBodyHeight - elCptWrapHeight

            this.elCpt.style.top = `${currentTop}px`
            this.elCpt.style.opacity = 1
            this.elCpt.style.zIndex = 20

            this.evtWheel(currentTop, topWithFullElement)
            this.evtTouch(currentTop, topWithFullElement)
            this.activeEvents()

            this.FB.setPixelType()
        }, 1000)
    }

    activeEvents() {
        const clickTargets = this.elCptWrap.querySelectorAll('a')

        clickTargets.forEach((element) => {
            element.addEventListener(
                'click',
                function (evt) {
                    evt.preventDefault()
                    const isLogin = Boolean(element.dataset.isLogin) || false
                    const url = element.getAttribute('href') || false
                    const isUrlSwg = url
                        ? url.toLowerCase().includes('ofertaswg')
                        : false
                    const notBlank = element.dataset.hrefTarget || true

                    this.GA.trigger(element)

                    if (!isLogin && isUrlSwg) this.SWG.setUtms()

                    if (url && !isUrlSwg) {
                        setTimeout(function () {
                            notBlank
                                ? (window.location.href = url)
                                : window.open(url)
                        }, 300)
                    }
                }.bind(this)
            )
        })
    }

    evtWheel(currentTop, topWithFullElement) {
        let newtop = currentTop

        window.addEventListener(
            'wheel',
            function (evt) {
                const step = currentTop / 100
                const multiplier = 20

                if (evt.deltaY >= 1) {
                    const elTop = newtop - step * multiplier
                    newtop =
                        elTop < topWithFullElement ? topWithFullElement : elTop

                    this.elCpt.style.top = `${newtop}px`
                }

                if (evt.deltaY <= -1) {
                    const elTop = newtop + step * multiplier
                    newtop = elTop > currentTop ? currentTop : elTop

                    this.elCpt.style.top = `${newtop}px`
                }
            }.bind(this)
        )
    }

    evtTouch(currentTop, topWithFullElement) {
        let newtop = currentTop
        let touchstartY = 0
        let touchendY = 0

        window.addEventListener('touchstart', function (evt) {
            touchstartY = evt.changedTouches[0].screenY
        })

        window.addEventListener(
            'touchmove',
            function (evt) {
                const multiplier = 20
                touchendY = evt.changedTouches[0].screenY

                if (touchendY < touchstartY) {
                    const diff = Math.abs(touchstartY) - Math.abs(touchendY)
                    const elTop = newtop - diff
                    newtop =
                        elTop < topWithFullElement ? topWithFullElement : elTop

                    this.elCpt.style.top = `${newtop}px`
                }

                if (touchendY > touchstartY) {
                    const diff = touchendY - touchstartY
                    const elTop = newtop + diff
                    newtop = elTop > currentTop ? currentTop : elTop

                    this.elCpt.style.top = `${newtop}px`
                }
            }.bind(this)
        )
    }

    montaUrlRetorno() {
        return encodeURIComponent(document.location.href)
    }

    getUrlLoginRegister(type = '') {
        const serviceId = window.tinyCpt.Piano.variaveis.getServicoId() || null
        let str = ''

        if (!this.debug && this.Piano.isDefined) {
            const urlRetorno = this.montaUrlRetorno()
            if (type === 'register') {
                str = `${this.domain}cadastro/${serviceId}?url=${urlRetorno}`
            } else {
                str = `${this.domain}login/${serviceId}?url=${urlRetorno}`
            }
        }

        return str
    }

    get templateVars() {
        return window.glbPaywall
    }

    get template() {
        const template = `
	  <div class="paywall-cpt ${this.templateVars.productClass}"> 
        <div class="paywall-cpt-wrap">
            ${this.templateVars.TagTitle}
            
            ${this.templateVars.TagLogin}

            ${this.templateVars.TagBannerTop}

            ${this.templateVars.TagMiddleText}

            ${this.templateVars.TagBannerLeft}

            ${this.templateVars.TagBannerRight}
		</div>
	  </div>
	  `

        return template
    }

    get cssMinified() {
        return `<style>
        .paywall-cpt{opacity:0;position:fixed;bottom:0;left:0;width:100vw;overflow:hidden;background:#fff;-webkit-box-shadow:0 0 70px 0 rgba(0,0,0,.5);box-shadow:0 0 70px 0 rgba(0,0,0,.5);font-family:Arial,Helvetica,sans-serif}.paywall-cpt,.paywall-cpt *{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease;transition:all .2s ease}.paywall-cpt a{font-weight:700;text-decoration:none}.paywall-cpt a:hover{text-decoration:underline}.paywall-cpt .paywall-cpt-wrap__text-head,.paywall-cpt a{color:#000}.paywall-cpt-oglobo .paywall-cpt-wrap__text-head,.paywall-cpt-oglobo a{color:#325e94}.paywall-cpt-wrap{position:relative;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:20px}.paywall-cpt-wrap img{display:block;max-width:100%;height:auto}.paywall-cpt-wrap__top{padding-top:20px;padding-bottom:20px}.paywall-cpt-wrap__middle-text{padding-top:0 !important}.paywall-cpt-wrap__text-head{width:100%;text-align:center;font-size:20px;font-weight:700;padding:20px 0 0}.paywall-cpt-wrap__text-center{width:100%;text-align:center;color:#767676;font-size:16px;padding:20px 0}.paywall-cpt-wrap__text-center.is-hide{padding-bottom:0}@media screen and min-width1024px{.paywall-cpt-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}
	  </style>`
    }

    init() {
        const delayTimer =
            window.glbPaywall && window.glbPaywall.delayTimer
                ? window.glbPaywall.delayTimer * 1000
                : 0

        setTimeout(() => {
            this.createTemplate()
        }, delayTimer)
    }
}
