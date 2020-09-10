export default class EdigitalContent {
    constructor() {
        this.classMain = 'edigital-content-cpnt'
        this.colLeft = document.querySelector(`.${this.classMain} .col-left`)
        this.colRight = document.querySelector(`.${this.classMain} .col-right`)

        this.init()
    }

    init() {
        if ((!this.colLeft && !this.colRight) || !window.glbEdigitalContent)
            return null

        const settings = window.glbEdigitalContent ? { ...this.settings(), ...window.glbEdigitalContent } : this.settings()

        this.addTemplate(this.colLeft, settings.colLeft, this.templateColLeft)
        this.addTemplate(this.colRight, settings.colRight, this.templateColRight)


        this.showConsole()
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
                    oldValue: 19.90,
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

    addTemplate(element, config, template) {
        element.insertAdjacentHTML('beforeend', template(config))
    }

    templateColLeft(config) {

        return `
        <div class="capa-hoje">
            <img src="${config.image}" alt="${config.title}">
        </div>
        <div class="links-apps">
            <h1><span>${config.product} </span>${config.title}</h1>
            <p>${config.text}</p>
            <a target="_blank" class="apple sm-hidden"
                href="${config.urlApple}">Baixar na App Store</a>
            <a target="_blank" class="android sm-hidden"
                href="${config.urlGoogle}">Disponível no
                Google Play</a>
        </div>
        `
    }

    templateColRight(config) {
        const topText = config?.topText ? config?.topText : ''
        const image = config?.image ? config?.image : ''
        const title = config?.title ? config?.title : ''
        const text = config?.text ? config?.text : ''
        const oldValue = config?.price?.oldValue ? toCurrency(config.price.oldValue, true) : ''
        const value = config?.price?.value ? toCurrency(config.price.value).toString().split(',') : ''
        const valuePart1 = value[0] ? value[0] : ''
        const valuePart2 = value[1] ? value[1] : ''
        const period = config?.price?.period ? config?.price?.period : ''
        const info = config?.price?.info ? config?.price?.info : ''
        const btnText = config?.btnText ? config?.btnText : ''
        const btnUrl = config?.btnUrl ? config?.btnUrl : ''

        function toCurrency(valueData = null, showCurrency = false) {
            const currencyFormat = {
                minimumFractionDigits: 2,
            }

            if (showCurrency) {
                currencyFormat.style = 'currency'
                currencyFormat.currency = 'BRL'
            }

            if (valueData)
                return valueData.toLocaleString('pt-BR', currencyFormat)
        }

        return `
        <div class="promocao-wrap">
            <div class="promocao-text">${topText}</div>
            <div class="promocao-content">
                <img src="${image}">
                <div class="promocao-text-mob">${topText}</div>
                <h2>${title}</h2>
                <p>${text}</p>
                <div class="mais-informacoes globo-somente">
                    <div class="preco">
                        <del>${oldValue}</del>
                        <span class="preco-final">
                            <span class="valor-rs">${valuePart1 ? `R$ ${valuePart1}` : ''}</span>
                            <span class="primeiro-valor">${valuePart1}</span>
                            <span class="holder-valor-tempo">
                                <span class="segundo-valor">,${valuePart2}</span>
                                <span class="tempo">${period}</span>
                            </span>
                            <small>${info}</small>
                        </span>
                    </div>
                    <div class="link-assine">
                        <a id="assine-agora"
                            href="${btnUrl}"
                            target="_blank">${btnText}</a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
