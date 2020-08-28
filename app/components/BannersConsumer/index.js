export default class BannersConsumer {
    constructor() {
        this.classMain = 'banner-consumer'
        this.classAuxiliary = 'is-full'
        this.styleClassMain = `.${this.classMain}`
        this.bannersFound = document.querySelectorAll(this.styleClassMain)

        window.glbBannersConsumer = [
            {
                selector: 'banner-subscribe',
                imageDesk: 'https://via.placeholder.com/804x128',
                imageMobi: 'https://via.placeholder.com/300x150',
            },
            {
                selector: 'banner-whatever',
                imageDesk: 'https://via.placeholder.com/804x128',
                imageMobi: 'https://via.placeholder.com/300x150',
                url: '//google.com',
                target: '_blank',
            },
        ]

        this.init()
    }

    bannerSettingsDefault() {
        return {
            selector: 'banner-test',
            imageDesk: 'https://via.placeholder.com/804x128',
            imageMobi: 'https://via.placeholder.com/300x150',
            url: '#',
            target: '_self',
        }
    }

    init() {
        if (!this.bannersFound || !window.glbBannersConsumer) return null

        this.addStyle()

        this.bannersFound.forEach((element) => {
            window.glbBannersConsumer.forEach((config) => {
                if (config.selector === element.dataset.name) {
                    const finalConfig = {
                        ...this.bannerSettingsDefault(),
                        ...config,
                    }

                    this.addBanner(element, finalConfig)
                }
            })
        })

        this.showConsole()
    }

    showConsole() {
        console.groupCollapsed('BannerConsumer Component')

        console.group('Constructor')
        console.table(this)
        console.groupEnd()

        console.group('glbBannersConsumer')
        console.table(window.glbBannersConsumer)
        console.groupEnd()

        console.groupEnd()
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
            <div class="${this.classMain} ${this.classAuxiliary}"
        >
            <a href="${config.url || '#'}" target="${
            config.target || ''
            }" rel='noreferrer'>
                <picture>
                    <source srcset="${
            config.imageDesk
            }" media='(min-width: 600px)' />
                    <source srcset="${config.imageMobi}" />
                    <img
                        className="${this.classMain}-image"
                        src="${config.imageMobi}"
                        alt=''
                    />
                </picture>
            </a>
        </div>
        `
    }

    style() {
        return `
        <style>
        ${this.styleClassMain} a, picture { 
            display: flex;
        }

        ${this.styleClassMain} a { 
            overflow: hidden;
            position: relative;
        }

        ${this.styleClassMain} img { 
            z-index: 2;
        }

          ${this.styleClassMain}.is-responsive img {
            max-width: 100%;
            height: auto; 
          }
        
          ${this.styleClassMain}.is-full a {
            justify-content: center;
          }
        </style>
        `
    }
}
