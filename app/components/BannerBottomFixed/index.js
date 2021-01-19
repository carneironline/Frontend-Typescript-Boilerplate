class BannerBottomFixed {

    constructor() {

        this.classMain = 'banner-bottom-fixed-cpnt'
        this.styleClassMain = `.${this.classMain}`
        this.elBody = document.body
        this.elCpnt = null


        this.init()
        this.showConsole()
    }

    init() {
        const debug = window.glbBannerBottomFixed?.debug

        if (debug) {
            window.glbBannerBottomFixed = this.settingsDebug()
        } else {
            window.glbBannerBottomFixed = window.glbBannerBottomFixed ? { ...this.settings(), ...window.glbBannerBottomFixed } : {}
        }

        if (!window.glbBannerBottomFixed?.image) return null

        this.addStyle()
        this.add()
        this.show()
        this.fixBodyPaddingBottom()
        this.click()
        this.setGa()
    }

    showConsole() {
        console.groupCollapsed('BannerBottomFixed Component')

        console.group('Constructor')
        console.log(this)
        console.groupEnd()

        console.group('glbBannerBottomFixed')
        console.table(window.glbBannerBottomFixed)
        console.groupEnd()

        console.groupEnd()
    }

    setGa() {
        const calledBy = 'BannerBottomFixed'
        const action = window.glbBannerBottomFixed?.ga?.action || 'Mobiliario Footer';
        const label = window.glbBannerBottomFixed?.ga?.label;

        if (label) {
            window.tinyCpnt.GA.setEvents(
                calledBy,
                action,
                label,
            )
        }
    }

    settings() {
        return {
            image: '',
            url: '',
            bgColor: '',
        }
    }

    settingsDebug() {
        return {
            image: 'https://via.placeholder.com/1384x60',
            url: '//google.com',
            bgColor: ' #999',
        }
    }

    add() {
        this.elBody.insertAdjacentHTML('beforeend', this.render())
        this.elCpnt = document.querySelector(`${this.styleClassMain}`)
    }

    fixBodyPaddingBottom() {
        this.elBody.classList.add(`${this.classMain}--active`)
    }

    show() {
        setTimeout(() => {
            this.elCpnt.classList.remove(`${this.classMain}--hide`)
        }, 200)
    }

    addStyle() {
        this.elBody.insertAdjacentHTML('beforeend', this.style())
    }

    click() {
        if (!window.glbBannerBottomFixed?.url) return null

        const element = document.querySelector(`${this.styleClassMain}-image`)

        element.addEventListener('click', (evt) => {
            evt.preventDefault()

            window.tinyCpnt.GA.setEvents(
                'BannerBottomFixed => click',
                'Clique',
                'Assine (link para pagamento) - Posicao 1',
                'Banner Footer'
            )

            setTimeout(() => {
                window.open(evt.target.href)
            }, 500)
        })
    }

    render() {
        const url = window.glbBannerBottomFixed.url ? `href="${window.glbBannerBottomFixed.url}"` : ''
        const tagTarget = window.glbBannerBottomFixed.url
            ? `<a class="${this.classMain}-image" ${url} style="background: ${window.glbBannerBottomFixed.bgColor} url(${window.glbBannerBottomFixed.image}) no-repeat center center;"></a>`
            : `<span class="${this.classMain}-image" ${url} style="background: ${window.glbBannerBottomFixed.bgColor} url(${window.glbBannerBottomFixed.image}) no-repeat center center;"></span>`

        return `
		<div class="${this.classMain} ${url ? '' : 'u-no-link'} ${this.classMain}--hide">
			${tagTarget}
		</div>
		`
    }

    style() {
        return `
		<style>
			 ${this.styleClassMain} {
				position: fixed;
				bottom: 0;
				width: 100%;
				z-index: 15;
				cursor: pointer;
				opacity: 1;
				transition: opacity .4s;
            }

            ${this.styleClassMain}.u-no-link {
				cursor: unset;
			}

			${this.styleClassMain}--hide {
				opacity: 0;
			}

			 ${this.styleClassMain}-image {
				display: block;
				height: 60px;
            }

			${this.styleClassMain}--active {
				padding-bottom: 60px;
			}
		</style>
		`
    }
}

export default BannerBottomFixed
