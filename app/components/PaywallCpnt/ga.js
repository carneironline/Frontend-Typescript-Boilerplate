import Helpers from '../../scripts/Helpers'

export default class PaywallGAModule {
    constructor() {
        this.metrics = {
            paywall: {},
            fb: {
                pixel: {},
            },
        }

        this.paywallType()
    }

    paywallLoad() {
        if (!window.Piano) return

        window.tinyCpnt.GA.setEvents(
            'PaywallGAModule',
            this.metrics.paywall.viewName,
            window.Piano.experience.name,
        )

        Helpers.setCookie(window.Piano.variaveis.constante.cookie.RTIEX, true, 1)
    }

    trigger(element) {
        const resetUtp = element.dataset.gaResetutp || null
        const imageTop = element.dataset.gaImagePosition
        const label =
            imageTop === 'top'
                ? element.dataset.gaLabel + this.metrics.paywall.label
                : element.dataset.gaLabel
        const action = element.dataset.gaAction || null

        if (!action) return null

        const data = {
            event: 'EventoGA',
            eventoGACategoria: this.metrics.paywall.name,
            eventoGAAcao: action,
            eventoGARotulo: label,
            eventoGAValor: 0,
            eventoGAInteracao: false,
        }

        if (resetUtp) window.tinyCpnt.Piano.resetUtp()

        this.setDatalayer(data)
    }

    paywallType() {
        const type = window.tinyCpnt?.Piano?.typePaywall ? window.tinyCpnt.Piano.typePaywall.toLowerCase() : 'paywall'

        switch (type) {
            case 'register':
                this.metrics.paywall.viewName = 'Exibicao Register'
                this.metrics.paywall.name = 'Register comum'
                this.metrics.paywall.label = 'Cadastre-se'
                this.metrics.fb.pixel.name = 'ViewRegisterWall'
                break
            case 'exclusivo':
                this.metrics.paywall.viewName = 'Exibicao Register'
                this.metrics.paywall.name = 'Register exclusivo'
                this.metrics.paywall.label = 'Assine agora'
                this.metrics.fb.pixel.name = 'ViewLoginExclusivo'
                break
            case 'suspenso':
                this.metrics.paywall.viewName = 'Suspenso'
                this.metrics.paywall.name = 'Suspenso'
                this.metrics.paywall.label = 'Assine agora'
                this.metrics.fb.pixel.name = 'ViewPaywallSuspenso'
                break
            case 'paywall':
                this.metrics.paywall.viewName = 'Barreira'
                this.metrics.paywall.name = 'Barreira'
                this.metrics.paywall.label = 'Assine agora'
                this.metrics.fb.pixel.name = 'ViewPaywallExclusivo'
                break
            default:
                this.metrics.paywall.viewName = 'Exibicao Register'
                this.metrics.paywall.name = 'Register comum'
                this.metrics.paywall.label = 'Cadastre-se'
                this.metrics.fb.pixel.name = 'ViewRegisterWall'
        }
    }

    setDatalayer(data = {}) {
        if (Object.keys(data).length) {
            window.dataLayer.push(data)
        }
    }
}
