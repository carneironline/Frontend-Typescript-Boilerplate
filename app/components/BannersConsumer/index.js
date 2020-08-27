export default class Banners {
    constructor() {
        this.classMain = 'banner-consumer'
        this.styleClassMain = `.${this.classMain}`
        this.bannersFound = document.querySelectorAll(this.styleClassMain)

        console.table(this)

        window.glbBannersConsumer = [
            {
                selector: 'banner-subscribe',
                imageDesk: 'https://via.placeholder.com/804x128',
                imageMobi: 'https://via.placeholder.com/300x150',
                url: '',
            },
        ]

        this.init()
    }

    init() {
        if (!this.bannersFound || !window.glbBannersConsumer) return null

        this.addStyle()

        this.bannersFound.forEach((element) => {
            window.glbBannersConsumer.forEach((config) => {
                if (config.selector === element.dataset.name)
                    this.addBanner(element, config)
            })
        })
    }

    addBanner(element, config) {
        element.insertAdjacentHTML('beforeend', this.render(config))
    }

    addStyle() {
        const elBody = document.body
        elBody.insertAdjacentHTML('beforeend', this.style())
    }

    render(config) {
        return `
            <div class="${this.classMain}"
        >
            <a href={url || '#'} target={target || ''} rel='noreferrer'>
                <picture>
                    <source srcset="${config.imageDesk}" media='(min-width: 600px)' />
                    <source srcset="${config.imageMobi}" />
                    <img
                        className="${this.classMain}-image"
                        src="${config.imageMobi}"
                        alt='MDN'
                    />
                </picture>
            </a>
        </div>
        `
    }

    style() {
        return `
        <style>
        ${this.styleClassMain} {
            a {
              overflow: hidden;
              position: relative;
            }
            a, picture {
              display: flex;
            }
          
            img {
              z-index: 2;
            }
          }

          ${this.styleClassMain}-responsive {
            img {
              max-width: 100%;
              height: auto;
            } 
          }
        
          ${this.styleClassMain}-full {
            a {
              justify-content: center;
            }
          }
        </style>
        `
    }
}
