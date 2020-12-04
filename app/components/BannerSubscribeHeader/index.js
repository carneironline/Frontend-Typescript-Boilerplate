class BannerSubscribeHeader {

    constructor() {

        this.classMain = 'banner-subscribe-header-cpnt'
        this.styleClassMain = `.${this.classMain}`
        this.elBody = document.body
        this.elCpnt = null
        this.elTarget = document.querySelector('#banner-assinatura-header')

        if (!this.elTarget) return null

        this.init()
        this.showConsole()
    }

    init() {
        window.glbBannerSubscribeHeader = window.glbBannerSubscribeHeader ? { ...this.settings(), ...window.glbBannerSubscribeHeader } : this.settings()

        this.addStyle()
        this.add()
        this.show()
        this.click()
        this.setGa()
    }

    showConsole() {
        console.groupCollapsed('BannerSubscribeHeader Component')

        console.group('Constructor')
        console.log(this)
        console.groupEnd()

        console.group('glbBannerSubscribeHeader')
        console.table(window.glbBannerSubscribeHeader)
        console.groupEnd()

        console.groupEnd()
    }

    setGa() {
        const calledBy = 'BannerSubscribeHeader'
        const action = window.glbBannerSubscribeHeader?.ga?.action || 'Mobiliario Botao';
        const label = window.glbBannerSubscribeHeader?.ga?.label;

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
            image: 'https://via.placeholder.com/180x40',
            url: '//google.com',
        }
    }

    add() {
        this.elTarget.insertAdjacentHTML('beforeend', this.render())
        this.elCpnt = document.querySelector(`${this.styleClassMain}`)
    }

    show() {
        setTimeout(() => {
            this.elCpnt.classList.remove(`${this.classMain}--hide`)
        }, 500)
    }

    addStyle() {
        this.elBody.insertAdjacentHTML('beforeend', this.style())
    }

    click() {
        const element = document.querySelector(`${this.styleClassMain}-target`)

        element.addEventListener('click', (evt) => {
            evt.preventDefault()

            setTimeout(() => {
                window.open(evt.target.href)
            }, 500)
        })
    }

    render() {
        return `
        <div class="${this.classMain} ${this.classMain}--hide" >
            <a
                class="${this.classMain}-target"
                href="${window.glbBannerSubscribeHeader.url}"
            >
                Assinatura
            </a>
        </div>
		`
    }

    style() {
        return `
		<style>
			 ${this.styleClassMain} {
				cursor: pointer;
				opacity: 1;
                transition: opacity .4s;
                margin-left: 10px;
                display: flex;
			}

			${this.styleClassMain}--hide {
				opacity: 0;
            }

            ${this.styleClassMain}-target {
                background-image: url(${window.glbBannerSubscribeHeader.image});
                width: 46px;
                height: 20px;
                overflow:hidden;
                text-indent: -999px;

                background-size: contain;
                background-repeat: no-repeat;
                background-color: transparent;
                background-position: 0 50%;
                color: transparent;
                font-size: 0px;
                text-decoration: none;
                display: block;
            }

            @media (min-width: 768px) {
                ${this.styleClassMain}-target {
                    width: 110px;
                    height: 44px;
                }
            }

            @media (min-width:1024px)  {
                ${this.styleClassMain}-target {
                    width: 180px;
                    height: 44px;
                }
            }
		</style>
		`
    }
}

export default BannerSubscribeHeader
