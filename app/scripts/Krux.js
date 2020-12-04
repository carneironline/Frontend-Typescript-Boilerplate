import Helpers from './Helpers'
import Piano from './Piano'

export default class Krux {
    constructor() {
        window.tinyCpnt.Krux = this
    }

    init() {
        Piano.addGlobalProps('krux', this.methods)
    }

    get methods() {
        return {
            tem() {
                return !!window.localStorage.getItem(window.Piano.variaveis.constante.krux.SEGMENTACOES)
            },
            ligado() {
                const parametro = window.Piano.variaveis.constante.krux.KRUXLIGADO
                const valorParametro = window.Piano.util.getValorParametroNaUrl(parametro)
        
                if (valorParametro === 'false' && !window.tinyCpnt.isProduction) {
                    Helpers.setCookie(parametro, valorParametro, 1)
                    return false
                }
        
                if (valorParametro === 'true' || window.tinyCpnt.isProduction) {
                    Helpers.setCookie(parametro, '', -1)
                    return true
                }
        
                if (Helpers.getCookie(window.Piano.variaveis.constante.krux.KRUXLIGADO) === 'false') {
                    return false
                }
        
                return true
            },
            obtemSegmentacao() {
                if (window.Piano.krux.tem() && window.Piano.krux.ligado()) {
                    const segmentacoes = window.localStorage
                        .getItem(window.Piano.variaveis.constante.krux.SEGMENTACOES)
                        .split(',')
        
                    for (let i = 0; i < segmentacoes.length; i++) {
                        window.tp.push(['setCustomVariable', segmentacoes[i], segmentacoes[i], ])
                    }
                }
            },
        }
    }
    
}
