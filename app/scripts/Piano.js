import Helpers from './Helpers'
import GA from './GA'

export default class Piano {
    constructor() {
        this.debug = window.tinyCpt.debug
        this.content = null
        this.setExperience()
        this.setInitialGlobalProps()
    }

    get isDefined() {
        if (typeof window.tinyCpt !== 'undefined' && typeof window.tinyCpt.Piano !== 'undefined') {
            this.content = window.tinyCpt.Piano
            return true
        }

        return false
    }

    setInitialGlobalProps() {
        this.addGlobalProps('typePaywall', null)
        this.addGlobalProps('variaveis', this.vars)
        this.addGlobalProps('janelaAnonima', this.incognitoWindow)
        this.addGlobalProps('regionalizacao', this.regionalization)
        this.addGlobalProps('metricas', this.metrics)
    }

    get vars() {
        return {
            ambientesAceitos: 'int,qlt,prd',
            statusHttpObterAutorizacaoAcesso: '400,404,406,500,502,503,504',
            statusHttpObterAssinaturaInadimplente: '400,404,500,502,503,504',
            isCallbackMetterExpired: false,
            constante: {
                cookie: {
                    GCOM: 'GLBID',
                    UTP: '_utp',
                    RTIEX: '_rtiex',
                    AMBIENTE: 'ambientePiano',
                    SAVE_SUBSCRIPTION: 'saveSubscriptionCookie',
                    CREATED_GLOBOID: 'createdGloboId',
                    GLOBOID_MESSAGE: 'globoIdMessage',
                    DEFERRED_FLOW_NOT_ACCEPTED_COOKIE: 'deferredFlowNotAccepted'
                },
                metricas: {
                    EVENTO_SEM_ACAO: 'sem acao',
                    ERRO: 'Erro',
                },
                krux: {
                    SEGMENTACOES: 'kxglobo_segs',
                    KRUXLIGADO: 'krux-ligado',
                },
                util: {
                    IP: '127.0.0.1',
                    AMBIENTE: 'ambiente-desejado',
                    DEBUG: 'debug-piano',
                },
                swgProducts: {
                    VALOR: 'Valor',
                    OGLOBO: 'O Globo'
                },
                swgProductIds: {
                    VALOR: 'valor.globo.com',
                    OGLOBO: 'oglobo.globo.com'
                }
            },
            isConteudoExclusivo() {
                return !!window.conteudoExclusivo
            },
            getAmbientePiano() {
                if (window.Piano.variaveis.ambientesAceitos.indexOf(window.Piano.util.getValorParametroNaUrl(window.Piano.variaveis.constante.util.AMBIENTE)) > -1) {
                    Helpers.setCookie(window.Piano.variaveis.constante.cookie.AMBIENTE, window.Piano.util.getValorParametroNaUrl(window.Piano.variaveis.constante.util.AMBIENTE), 1)

                    return window.Piano.util.getValorParametroNaUrl(window.Piano.variaveis.constante.util.AMBIENTE)
                }

                if (window.Piano.util.getValorParametroNaUrl(window.Piano.variaveis.constante.util.AMBIENTE) === 'false') {
                    Helpers.setCookie(window.Piano.variaveis.constante.cookie.AMBIENTE, '', -1)
                }

                if (Helpers.getCookie(window.Piano.variaveis.constante.cookie.AMBIENTE)) {
                    return Helpers.getCookie( window.Piano.variaveis.constante.cookie.AMBIENTE)
                }

                return window.Piano.variaveis.ambientesAceitos.indexOf(window.ambienteUtilizadoPiano) > -1 ? window.ambienteUtilizadoPiano : 'prd'
            },
            getTipoConteudoPiano() {
                return window.tipoConteudoPiano
            },
            executouPageview() {
                return !!window.executouPageview
            },
            getNomeProduto() {
                if (!window.nomeProdutoPiano) {
                    GA.setEventsError(
                        'getNomeProduto()',
                        'Nome do produto não definido.',
                        window.location.href,
                    )
                    return
                }
                return window.nomeProdutoPiano
            },
            getServicoId() {
                const { id } = window.productsObject[window.Piano.variaveis.getNomeProduto()]
        
                if (!id) {
                    GA.setEventsError(
                        'getServicoId()',
                        'ServiceID não definido.',
                        `${document.location.href} nomeProduto: ${window.Piano.variaveis.getNomeProduto()}`,
                    )
        
                    return '0000'
                }
        
                return id
            },
            getCodigoProduto() {
                const codProd = window.productsObject[window.Piano.variaveis.getNomeProduto()].cod_prod
        
                if (!codProd) {
                    GA.setEventsError(
                        'getCodigoProduto()',
                        'Ao obter código do produto',
                        `${window.nomeProduto} - ${document.location.href}`,
                    )
        
                    window.Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, ' ')

                    return 'error'
                }
        
                return codProd
            },
        }
    }

    get incognitoWindow() {
        return {
            retry(isDone, next) {
                let currentTrial = 0
                const maxRetry = 50
                let isTimeout = false
                const id = window.setInterval(function () {
                    if (isDone()) {
                        window.clearInterval(id)
                        next(isTimeout)
                    }
                    if (currentTrial++ > maxRetry) {
                        window.clearInterval(id)
                        isTimeout = true
                        next(isTimeout)
                    }
                }, 10)
            },
            isIE10OrLater(userAgent) {
                const ua = userAgent.toLowerCase()
                const match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua)
        
                if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
                    return false
                }
                if (match && parseInt(match[1], 10) >= 10) {
                    return true
                }
                return false
            },
            detectPrivateMode(callback) {
                let isPrivate
        
                if (window.webkitRequestFileSystem) {
                    window.webkitRequestFileSystem(
                        window.TEMPORARY,
                        1,
                        function () {
                            isPrivate = false
                        },
                        function (e) {
                            isPrivate = true
                        }
                    )
                } else if (
                    window.indexedDB &&
                    /Firefox/.test(window.navigator.userAgent)
                ) {
                    let db
                    try {
                        db = window.indexedDB.open('test')
                    } catch (e) {
                        isPrivate = true
                    }
        
                    if (typeof isPrivate === 'undefined') {
                        window.Piano.janelaAnonima.retry(
                            function isDone() {
                                return db.readyState === 'done'
                            },
                            function next(isTimeout) {
                                if (!isTimeout) {
                                    isPrivate = !db.result
                                }
                            }
                        )
                    }
                } else if (
                    window.Piano.janelaAnonima.isIE10OrLater(window.navigator.userAgent)
                ) {
                    isPrivate = false
                    try {
                        if (!window.indexedDB) {
                            isPrivate = true
                        }
                    } catch (e) {
                        isPrivate = true
                    }
                } else if (
                    window.localStorage &&
                    /Safari/.test(window.navigator.userAgent)
                ) {
                    try {
                        window.localStorage.setItem('test', 1)
                    } catch (e) {
                        isPrivate = true
                    }
        
                    if (typeof isPrivate === 'undefined') {
                        isPrivate = false
                        window.localStorage.removeItem('test')
                    }
                }
        
                window.Piano.janelaAnonima.retry(
                    function isDone() {
                        return typeof isPrivate !== 'undefined'
                    },
                    function next(isTimeout) {
                        callback(isPrivate)
                    }
                )
            },
        }
    }

    get regionalization() {
        return {
            getRegion() {
                const kruxGeo = localStorage.getItem('kxglobo_geo')
                if (kruxGeo) {
                    kruxGeo.split('&').forEach((item) => {
                        const data = item.split('=')
                        const key = data[0]
                        const value = data[1]
                        if (key === 'region') {
                            window.tp.push(['setCustomVariable', 'region', value])
                        }
                    })
                }
            },
        }
    }

    get metrics() {
        return {
            enviaEventosGA(_GAAcao, _GARotulo) {
                // TODO: arquivo tinypass.js, inserido pela Piano, utiliza essa função
                const isProductValor = !!(typeof window.nomeProdutoPiano !== 'undefined' && window.nomeProdutoPiano === 'valor')
        
                if (isProductValor)
                    window._gaq.push([
                        '_trackEvent',
                        'Piano',
                        _GAAcao,
                        _GARotulo,
                        '',
                        true,
                    ])
                else
                    window.dataLayer.push({
                        event: 'EventoGAPiano',
                        eventoGACategoria: 'Piano',
                        eventoGAAcao: _GAAcao,
                        eventoGARotulo: _GARotulo,
                    })
            },
        
            montaRotuloGA() {
                // TODO: at Piano as setExperience() | Check on old tiny before remove
                if (window.regrasTiny && window.regrasTiny.nomeExperiencia) {
                    return window.subsegmentacaoPiano ? `${window.regrasTiny.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.regrasTiny.nomeExperiencia
                }

                if (window.nomeExperiencia) {
                    return window.subsegmentacaoPiano ? `${window.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.nomeExperiencia
                }

                return ' '
            },
            setLimiteContagem(metricas) {
                window._GALimite = '-'
                window._GAContagem = '-'
        
                if (!metricas) return
        
                window._GAContagem = `${metricas.views}`
        
                if (window._GAContagem.length === 1) {
                    window._GAContagem = `0${window._GAContagem}`
                }

                window._GALimite = `${metricas.nomeExperiencia} : ${metricas.maxViews}`
            },
            identificarPassagemRegister(regras) {
                let passagem = window.Piano.variaveis.constante.metricas.EVENTO_SEM_ACAO

                if (Helpers.getCookie(window.Piano.variaveis.constante.cookie.RTIEX)) {
                    passagem =  regras.fluxo.indexOf('hardwall') !== -1 ? 'register-hardwall-passou' : 'register-contagem-passou'

                    Helpers.setCookie(
                        window.Piano.variaveis.constante.cookie.RTIEX,
                        '',
                        -1
                    )
                }

                return passagem
            },
            executaAposPageview(expirou) {
                if (!window.Piano.variaveis.executouPageview()) {
                    window.regrasTiny.fluxo = window.tpContext ? window.tpContext.toLowerCase() : '-'
                    window.regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : ''
                    window.Piano.metricas.setLimiteContagem(window.regrasTiny)
                    
                    if (expirou === false)
                        GA.setEvents(
                            'executaAposPageview',
                            window.Piano.metricas.identificarPassagemRegister(
                                window.regrasTiny
                            ),
                            window.Piano.metricas.montaRotuloGA(),
                        )
                    window.executouPageview = true
                }
            },
            setaVariaveis(idLogin, tipoLogin, assinaturaLogada) {
                window.PaywallAnalytics.idLoginAssinante = idLogin
                window.PaywallAnalytics.tipoLoginAssinante = tipoLogin
                window.PaywallAnalytics.assinaturaLogada = assinaturaLogada
            },
        }
    }

    setExperience() {
        let experienceName = ''
        window.Piano.experience = {}

        if (window.regrasTiny && window.regrasTiny.nomeExperiencia)
            experienceName = window.subsegmentacaoPiano ? `${window.regrasTiny.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.regrasTiny.nomeExperiencia

        if (window.nomeExperiencia)
            experienceName = window.subsegmentacaoPiano ? `${window.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.nomeExperiencia

        window.Piano.experience.name = experienceName
    }

    resetUtp() {
        if (this.isDefined)
            Helpers.setCookie(this.content.variaveis.constante.cookie.UTP, '', -1)
    }

    addGlobalProps(propName, value) {
        window.Piano[propName] = value
    }
}
