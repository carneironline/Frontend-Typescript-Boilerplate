class EdigitalContent {
    constructor() {
        this.classMain = 'edigital-content-cpnt'
        this.classColLeft = '.col-left'
        this.classColRight = '.col-right'
        this.colLeft = document.querySelector(`.${this.classMain} ${this.classColLeft}`)
        this.colRight = document.querySelector(`.${this.classMain} ${this.colRight}`)

        this.init()
    }

    init() {
        if ((!this.colLeft && !this.colRight) || !window.glbEdigitalContent)
            return null

        const settings = window.glbEdigitalContent ? { ...this.settings(), ...window.glbEdigitalContent } : this.settings()

        this.templateColLeft(settings.colLeft)
        this.templateColRight(settings.colRight)
        this.removeLoaders()

        this.showConsole()
    }

    removeLoaders() {
        const classLoader = 'loader'
        const classShow = 'u-show'
        const elementsLoader = document.querySelectorAll(`.${classLoader}`)
        const elementsShow = document.querySelectorAll(`.${classShow}`)

        if (elementsShow) {
            elementsShow.forEach(element => {
                element.classList.add('is-show')
            })
        }

        if (elementsLoader) {
            elementsLoader.forEach(element => {
                element.classList.add('is-hide')
            })
        }
    }

    settings() {
        return {
            colLeft: {
                image: 'https://jornaldigital.oglobo.globo.com/globo/images/capa.jpg',
                product: 'O Globo',
                title: 'Jornal Digital',
                text: 'Acesso exclusivo para assinantes do Globo. Para ler, faça sua assinatura.',
                urlApple: 'https://itunes.apple.com/br/app/o-globo/id390832733?mt=8',
                urlGoogle: 'https://play.google.com/store/apps/details?id=br.com.infoglobo.oglobo',
            },
            colRight: {
                topText: 'AINDA NÃO É ASSINANTE?',
                image: 'https://jornaldigital.oglobo.globo.com/globo/images/oglobo-digital.png',
                title: 'GLOBO DIGITAL',
                text: 'Réplica do jornal em versão digital, acesso ilimitado ao site e aplicativo do Globo, Acervo e descontos em centenas de parceiros com o Clube O Globo.',
                price: {
                    text: 'A partir de',
                    value: 2.90,
                    period: '/MÊS',
                    info: 'no 1° mês'
                },
                btnText: 'Assine Já',
                btnUrl: 'https://assinaturaglobo.globo.com/o-globo/vitrine/globo?interno_origem=siteoglobo&amp;interno_midia=display&amp;interno_campanha=og_jornaldigital'

            }
        }
    }

    showConsole() {
        console.groupCollapsed('EdigitalContent Component')

        console.group('Constructor')
        console.table(this)
        console.groupEnd()

        console.group('glbEdigitalContent')
        console.table(window.glbEdigitalContent)
        console.groupEnd()

        console.groupEnd()
    }

    setElementData(selector, html = null, attr = {}) {
        const elements = document.querySelectorAll(selector)

        if (!elements) return null

        elements.forEach(element => {

            if (html)
                element.innerHTML = html

            if (Object.keys(attr).length) {
                Object.entries(attr).forEach(([key, value]) => {
                    element.setAttribute(key, value)
                });
            }

        })
    }

    templateColLeft(config) {
        const classTarget = this.classColLeft

        this.setElementData(`${classTarget}-image`, null, { src: config.image, alt: config.title })
        this.setElementData(`${classTarget}-product`, config.product)
        this.setElementData(`${classTarget}-title`, config.title)
        this.setElementData(`${classTarget}-text`, config.text)
        this.setElementData(`${classTarget}-urlApple`, null, { href: config.urlApple, target: '_blank', })
        this.setElementData(`${classTarget}-urlGoogle`, null, { href: config.urlGoogle, target: '_blank' })
    }

    templateColRight(config) {

        const classTarget = this.classColRight
        const priceText = config?.price?.text ? config?.price?.text : ''
        const value = toCurrency(config.price.value).toString().split(',')
        const valuePart1 = value[0]
        const valuePart2 = value[1]
        const period = config?.price?.period ? config?.price?.period : ''
        const info = config?.price?.info ? config?.price?.info : ''
        const btnStyle = config?.btnStyle ? config?.btnStyle : ''

        function toCurrency(valueData = null, showCurrency = false) {
            const currencyFormat = {
                minimumFractionDigits: 2,
            }

            if (showCurrency) {
                currencyFormat.style = 'currency'
                currencyFormat.currency = 'BRL'
            }

            if (typeof valueData === 'number')
                return valueData.toLocaleString('pt-BR', currencyFormat)
        }

        this.setElementData(`${classTarget}-topText`, config.topText)
        this.setElementData(`${classTarget}-image`, null, { src: config.image, alt: config.title })
        this.setElementData(`${classTarget}-title`, config.title)
        this.setElementData(`${classTarget}-text`, config.text)
        this.setElementData(`${classTarget} .preco .text`, priceText)
        this.setElementData(`${classTarget}-valuePart1`, valuePart1)
        this.setElementData(`${classTarget}-valuePart2`, `,${valuePart2}`)
        this.setElementData(`${classTarget}-period`, period)
        this.setElementData(`${classTarget}-info`, info)
        this.setElementData(`${classTarget}-btn`, config.btnText, { href: config.btnUrl, target: '_blank', style: btnStyle })
    }
}

// export default EdigitalContent