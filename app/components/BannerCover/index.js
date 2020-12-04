class BannerCover {

    constructor() {
        this.classMain = 'banner-cover-cpnt'
        this.styleClassMain = `.${this.classMain}`
        this.elBody = document.body
        this.elCpnt = null
        this.elTarget = document.querySelector('.banner-cover-cpnt, .block--advertising-header')
        this.isProductOGlobo = window.tinyCpnt.Product.name === 'oglobo'
        this.isProductValor = window.tinyCpnt.Product.name === 'valor'
        this.isProductMagazines = window.tinyCpnt.Product.name !== 'oglobo' && window.tinyCpnt.Product.name !== 'valor'

        if (!this.elTarget) return null

        this.init()
        this.showConsole()
    }

    init() {
        window.glbBannerCover = window.glbBannerCover ? { ...this.settings(), ...window.glbBannerCover } : this.settings()

        this.addStyle()
        this.add()
        this.show()
        this.click()
        this.setGa()
        this.fixVerticalPadding()
    }

    showConsole() {
        console.groupCollapsed('BannerCover Component')

        console.group('Constructor')
        console.log(this)
        console.groupEnd()

        console.group('glbBannerCover')
        console.table(window.glbBannerCover)
        console.groupEnd()

        console.groupEnd()
    }

    setGa() {
        const calledBy = 'BannerCover'
        const action = window.glbBannerCover?.ga?.action || 'Mobiliario Chamada de Capa';
        const label = window.glbBannerCover?.ga?.label;

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
            image: 'https://via.placeholder.com/296x157',
            url: '//google.com',
            text: 'Test', // Test
        }
    }

    add() {
        const insertPosition = this.isProductOGlobo ? 'afterend' : 'beforeend'
        this.elTarget.insertAdjacentHTML(insertPosition, this.render())
        this.elCpnt = document.querySelector(`${this.styleClassMain}-box`)
    }

    show() {
        setTimeout(() => {
            this.elCpnt.classList.remove(`${this.classMain}--hide`)
        }, 500)
    }

    fixVerticalPadding() {
        const elBox = document.querySelector('.banner-cover-cpnt-box')
        const elText = document.querySelector('.banner-cover-cpnt-text')
        const elImage = document.querySelector('.banner-cover-cpnt-image-img')
        let count = 0

        const inteval = setInterval(() => {
            if (elImage?.height) {
                if (elImage.height > elText.offsetHeight) {
                    const verticalPadding = ((elImage.height - elText.offsetHeight) / 2) + 20
                    elBox.style.padding = `${verticalPadding}px 0`
                }

                clearInterval(inteval)
            }

            if (count === 5)
                clearInterval(inteval)

            count++
        }, 1000);


    }

    addStyle() {
        this.elBody.insertAdjacentHTML('beforeend', this.style())
    }

    click() {
        const element = document.querySelector(`${this.styleClassMain}-target`)
        if (!element) return null

        element.addEventListener('click', (evt) => {
            evt.preventDefault()

            setTimeout(() => {
                window.open(element.href)
            }, 500)
        })
    }

    render() {
        return `
        <div class="${this.classMain}-box ${this.classMain}--hide">
            <a class="${this.classMain}-target" href="${window.glbBannerCover.url}" target="_blank">
                <div class="${this.classMain}-image" id="linkImage">
                    <img class="${this.classMain}-image-img" alt="" src="${window.glbBannerCover.image}"/>
                </div>
                <div class="${this.classMain}-text">
                    ${window.glbBannerCover.text}
                </div>
            </a>
        </div>
		`
    }

    style() {
        return `
		<style>
			 ${this.styleClassMain}-box {
				cursor: pointer;
				opacity: 1;
                transition: opacity .4s;

				margin: 0 auto 0px;
				max-width: 1260px;
                padding: 20px 0px;
			}

			@media (max-width: 1023px) {
				${this.styleClassMain}-box {
                    ${this.isProductOGlobo ? 'padding: 40px 0px;' : ''}
                    ${this.isProductValor ? 'padding: 40px 0px 0px;' : ''}
                    ${this.isProductMagazines ? 'padding: 20px 0px;' : ''}
				}
			}

			${this.styleClassMain}--hide {
				opacity: 0;
			}

			.main-content ${this.styleClassMain}-box {
				padding: 80px 0 0px;
			}

			${this.styleClassMain}-target {
				text-decoration: none;
				color: currentColor;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #efeff0;
				border-top: #ddd 1px solid;
				border-bottom: #ddd 1px solid;
			}

			${this.styleClassMain}-image {
				position: relative;
				width: calc(21%);
				text-align: right;
			}

			${this.styleClassMain}-image-img {
				position: absolute;
				right: 0;
				top: 0;
                width: auto;
                transform: translate(0, -50%);
                max-height: 100px;
            }
            @media (max-width: 1023px) {
				${this.styleClassMain}-image-img {
                    max-width: 90%;
				}
			}



			${this.styleClassMain}-text {
				font-family: 'Source Sans Pro', sans-serif;
				width: 60%;
				padding: 15px 10% 15px 20px;
                color: darkslategray;
                font-size: 16px;
            }

            ${this.styleClassMain}-text strong {
				font-weight: bold;
            }

			@media (max-width: 1023px) {
				${this.styleClassMain}-text {
					font-size: 86%;
				}
			}
		</style>
		`
    }
}

export default BannerCover
