export default class SubscribeButtonOverride {
    constructor() {
        this.classMain = 'subscribe-button-cpnt'
        this.styleClassMain = `.${this.classMain}`
        this.buttonsFound = document.querySelectorAll(this.styleClassMain)

        window.glbSubscribeButtonOverride = {
            all: {
                text: 'Assine',
                url: '//google.com',
                target: '_blank',
                rel: 'noopener',
            },
            items: [
                {
                    selector: 'subscribe-button-one',
                    text: 'Teste',
                    style: {
                        backgroundColor: '#fff000',
                        textColor: '#000fff',
                    },
                },
            ],
        }

        this.init()
    }

    init() {
        if (!this.buttonsFound || !window.glbSubscribeButtonOverride)
            return null

        this.buttonsFound.forEach((element) => {
            if (window.glbSubscribeButtonOverride.all)
                this.setAttributes(
                    element,
                    window.glbSubscribeButtonOverride.all
                )

            window.glbSubscribeButtonOverride.items?.forEach((config) => {
                if (config.selector === element.dataset.subscribeButtonName) {
                    this.setAttributes(element, config)
                }
            })
        })

        this.showConsole()
    }

    showConsole() {
        console.groupCollapsed('SubscribeButtonOverride Component')

        console.group('Constructor')
        console.table(this)
        console.groupEnd()

        console.group('glbSubscribeButtonOverride')
        console.table(window.glbSubscribeButtonOverride)
        console.groupEnd()

        console.groupEnd()
    }

    setAttributes(element, config) {
        if (config.text) element.innerHTML = config.text
        if (config.text) element.setAttribute('title', config.text)
        if (config.url) element.setAttribute('href', config.url)
        if (config.target) element.setAttribute('target', config.target)
        if (config.rel) element.setAttribute('rel', config.rel)

        this.setStyles(element, config)
    }

    setStyles(element, config) {
        if (!config.style) return null

        if (config.style.backgroundColor)
            element.style.backgroundColor = config.style.backgroundColor

        if (config.style.textColor) element.style.color = config.style.textColor
    }
}