export default class Banners {
    constructor() {
        this.classMain = 'banner-consumer'
        this.styleClassMain = `.${this.classMain}`
        this.bannersFound = document.querySelectorAll(this.styleClassMain)

        console.table(this)

        window.glbBannersConsumer = [
            {
                selector: 'banner-subscribe',
                imageDesk: '',
                imageMobi: '',
                url: '',
            },
        ]

        this.init()
    }

    init() { }

    render() {
        return `
            <div class="${this.classMain}"
        >
            <a href={url || '#'} target={target || ''} rel='noreferrer'>
                <picture>
                    <source srcSet={imageDesk} media='(min-width: 600px)' />
                    <img
                        className="${this.classMain}-image"
                        src={imageMobi || imageDesk}
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
