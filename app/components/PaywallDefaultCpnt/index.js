import PaywallGAModule from '../PaywallCpnt/ga'
import SwgModule from '../../scripts/Swg'
import FbModule from '../../scripts/FB'

class PaywallDefaultCpnt {
    constructor(superClass) {
        this.super = superClass
        this.GA = new PaywallGAModule()
        this.SWG = new SwgModule()
        this.FB = new FbModule(this.GA.metrics.fb)

        this.debug = window.tinyCpt.debug.paywall

        this.init()
    }

    init() {
        this.createTemplate()
    }

    tagTitle() {
        if (!window.glbPaywall.title) {
            return ''
        }

        return `
            <div class="paywall-cpt-wrap__text-head">
                ${window.glbPaywall.title}
            </div>
        `
    }

    tagLogin() {
        if (
            (!window.glbPaywall.loginText && !this.super.loginUrl) ||
            window.glbPaywall.hideLogin
        ) {
            return ''
        }

        return `
        <div class="paywall-cpt-wrap__text-center">
            ${window.glbPaywall.loginPreText
            } <a href="${this.super.loginUrl}" data-is-login="true" data-ga-action="Clique em link" data-ga-label="Link 2 - Faça login" data-ga-resetUtp="false" data-href-target=" ${window.glbPaywall.targetBlank
            } ">${window.glbPaywall.loginText}</a>
        </div>
        `
    }

    tagBannerTop() {
        return `
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
        return `
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
        return `
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
            return ''
        }

        return `
        <div class="paywall-cpt-wrap__text-center paywall-cpt-wrap__middle-text">
        ${window.glbPaywall.middlePreText}
            <a href="${window.glbPaywall.middleTextLink}" style="color:${window.glbPaywall.middleTextColor}; text-decoration:underline" data-ga-action="Clique em link" data-ga-label="Link 3 - Texto no" data-ga-resetUtp="true">
                ${window.glbPaywall.middleText}
            </a>
        </div>
        `
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
        this.elBody.insertAdjacentHTML('beforeend', this.addStyle)
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

    get templateVars() {
        return window.glbPaywall
    }

    get template() {
        const template = `
	  <div class="paywall-cpt ${this.templateVars.productClass}"> 
        <div class="paywall-cpt-wrap">
            ${this.tagTitle()}
            
            ${this.tagLogin()}

            ${this.tagBannerTop()}

            ${this.tagMiddleText()}
            
            <div class="paywall-cpt-wrap__banners-bottom">
            ${this.tagBannerLeft()}

            ${this.tagBannerRight()}
            </div>
		</div>
	  </div>
	  `

        return template
    }

    get addStyle() {
        return `<style>
        .paywall-cpt{
            opacity:0;
            position:fixed;
            bottom:0;
            left:0;
            width:100vw;
            overflow:hidden;
            background:#fff;
            -webkit-box-shadow:0 0 70px 0 rgba(0,0,0,.5);
            box-shadow:0 0 70px 0 rgba(0,0,0,.5);
            font-family:Arial,Helvetica,sans-serif
        }
        .paywall-cpt,.paywall-cpt *{
            -webkit-box-sizing:border-box;
            box-sizing:border-box;
            -webkit-transition:all .2s ease;
            transition:all .2s ease
        }
        .paywall-cpt a{
            font-weight:700;
            text-decoration:none
        }
        .paywall-cpt a:hover{
            text-decoration:underline
        }
        .paywall-cpt .paywall-cpt-wrap__text-head,.paywall-cpt a{
            color:#000
        }
        .paywall-cpt-oglobo .paywall-cpt-wrap__text-head,.paywall-cpt-oglobo a{
            color:#325e94
        }
        .paywall-cpt-wrap{
            position:relative;
            display:flex;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
            -ms-flex-direction:column;
            flex-direction:column;
            -webkit-box-align:center;
            -ms-flex-align:center;
            align-items:center;
            padding-bottom:20px
        }
        .paywall-cpt-wrap img{
            display:block;
            max-width:100%;
            height:auto
        }
        .paywall-cpt-wrap__top{
            padding-top:20px;
            padding-bottom:20px
        }
        .paywall-cpt-wrap__middle-text{
            padding-top:0!important
        }
        .paywall-cpt-wrap__text-head{
            width:100%;
            text-align:center;
            font-size:20px;
            font-weight:700;
            padding:20px 0 0
        }
        .paywall-cpt-wrap__text-center{
            width:100%;
            text-align:center;
            color:#767676;
            font-size:16px;
            padding:20px 0
        }
        .paywall-cpt-wrap__text-center.is-hide{
            padding-bottom:0
        }
        .paywall-cpt-wrap__banners-bottom{
            display:flex
        }
        @media screen and (min-width: 1024px){
            .paywall-cpt-wrap{
                -ms-flex-wrap:wrap;
                flex-wrap:wrap;
                -webkit-box-orient:horizontal;
                -webkit-box-direction:normal;
                -webkit-box-pack:center;
                -ms-flex-pack:center;
                justify-content:center
            }
        }
        @media screen and (max-width: 1023px){
            .paywall-cpt-wrap__banners-bottom{
                flex-direction:column
            }
        }
        
	  </style>`
    }
}

export default PaywallDefaultCpnt