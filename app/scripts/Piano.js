import Helpers from './Helpers'

export default class Piano {
    constructor() {
        this.debug = window.tinyCpnt.debug
        this.content = null
    }

    init() {
        Piano.setGlobalVars()
        this.setInitialGlobalProps()
        this.setExperience()

    }

    get isDefined() {
        if (typeof window.tinyCpnt !== 'undefined' && typeof window.tinyCpnt.Piano !== 'undefined') {
            this.content = window.tinyCpnt.Piano
            return true
        }

        return false
    }

    static setGlobalVars() {
        window.tinyCpnt.Piano = window.tinyCpnt.Piano || this
        window.Piano = window.Piano || {}
    }

    setInitialGlobalProps() {
        Piano.addGlobalProps('typePaywall', null)
        Piano.addGlobalProps('variaveis', this.vars)
        Piano.addGlobalProps('janelaAnonima', this.incognitoWindow)
        Piano.addGlobalProps('regionalizacao', this.regionalization)
        Piano.addGlobalProps('metricas', this.metrics)
        Piano.addGlobalProps('util', this.useful)
        Piano.addGlobalProps('configuracao', this.configuration)
        Piano.addGlobalProps('helper', this.helpers)
        Piano.addGlobalProps('construtor', this.construtores)
        Piano.addGlobalProps('resetUtp', this.resetUtp)
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
                    return Helpers.getCookie(window.Piano.variaveis.constante.cookie.AMBIENTE)
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
                    window.tinyCpnt.GA.setEventsError(
                        'getNomeProduto()',
                        'Nome do produto não definido.',
                        window.location.href,
                    )
                    return
                }

                return window.nomeProdutoPiano
            },
            getServicoId() {
                const { id, name } = window.tinyCpnt.Product

                if (!id) {
                    window.tinyCpnt.GA.setEventsError(
                        'getServicoId()',
                        'ServiceID não definido.',
                        `${document.location.href} nomeProduto: ${name}`,
                    )

                    return '0000'
                }

                return id
            },
            getCodigoProduto() {
                const codProd = window.tinyCpnt.Product.code

                if (!codProd) {
                    window.tinyCpnt.GA.setEventsError(
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
                    window.indexedDB && /Firefox/.test(window.navigator.userAgent)
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
                    function next() {
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
                    passagem = regras.fluxo.indexOf('hardwall') !== -1 ? 'register-hardwall-passou' : 'register-contagem-passou'

                    Helpers.setCookie(window.Piano.variaveis.constante.cookie.RTIEX, '', -1)
                }

                return passagem
            },
            executaAposPageview(expirou) {
                Helpers.console('', 'executaAposPageview')

                if (!window.Piano.variaveis.executouPageview()) {
                    window.regrasTiny.fluxo = window.tpContext ? window.tpContext.toLowerCase() : '-'
                    window.regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : ''
                    window.Piano.metricas.setLimiteContagem(window.regrasTiny)
                    
                    if (expirou === false)
                        window.tinyCpnt.GA.setEvents(
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

    get useful() {
        return {
            isSection() {
                return window.Piano.variaveis.getTipoConteudoPiano() === 'section'
            },
            temVariaveisObrigatorias() {
                if (typeof window.Piano.variaveis.getTipoConteudoPiano() === 'undefined') {
                    window.tinyCpnt.GA.setEventsError(
                        'temVariaveisObrigatorias',
                        'Variavel tipoConteudoPiano nao esta definida',
                        document.location.href,
                    )

                    return false
                }
                if (typeof window.Piano.variaveis.getNomeProduto() === 'undefined') {
                    window.tinyCpnt.GA.setEventsError(
                        'temVariaveisObrigatorias',
                        'Variavel nomeProdutoPiano nao esta definida',
                        document.location.href,
                    )
                    return false
                }
                return true
            },
            extraiParametrosCampanhaDaUrl() {
                const url = window.Piano.util.getWindowLocationSearch()
                const chavesCampanha = ['utm_medium', 'utm_source']
                const valoresCampanha = []

                for (let idxParamCampanha = 0; idxParamCampanha < chavesCampanha.length; idxParamCampanha++) {
                    const chaveCampanha = chavesCampanha[idxParamCampanha]

                    if (url.indexOf(`${chaveCampanha}=`) !== -1) {
                        const regex = new RegExp(`[?(&)]${chaveCampanha}=([^&#]*)`)
                        const valorCampanha = url.match(regex)[1]

                        if (valorCampanha) {
                            valoresCampanha.push(valorCampanha)
                        }
                    }
                }
                if (valoresCampanha.length > 0) {
                    window.tp.push([
                        'setCustomVariable',
                        'utm',
                        valoresCampanha.join(';'),
                    ])
                }

                if (url.indexOf('utm_campaign=') !== -1) {
                    const regex = new RegExp('utm_campaign=(\\w+)')
                    const campanha = url.match(regex)[1]
                    if (campanha) {
                        window.tp.push(['setCustomVariable', 'campanha', campanha])
                    }
                }
            },
            isOrigemBuscador() {
                const { userAgent } = navigator
                const regexRobos = new RegExp('(ia_archiver)|(Googlebot)|(Mediapartners-Google)|(AdsBot-Google)|(msnbot)|(Yahoo! Slurp)|(ZyBorg)|(Ask Jeeves/Teoma)|(bingbot)|(cXensebot)')
                const ehRobo = regexRobos.test(userAgent)

                window.tp.push(['setCustomVariable', 'buscador', ehRobo])

                return ehRobo
            },
            montaUrlStg() {
                return window.Piano.variaveis.getAmbientePiano() !== 'prd' ? '-stg' : ''
            },
            temParametroNaUrl(paramName) {
                const parametros = window.Piano.util.getWindowLocationSearch()
                return parametros.indexOf(paramName) !== -1
            },
            getValorParametroNaUrl(parametro) {
                if (window.Piano.util.temParametroNaUrl(parametro)) {
                    const parametros = window.Piano.util.getWindowLocationSearch()
                    const regex = new RegExp(`[?(&)]${parametro}=([^&#]*)`)

                    return parametros.match(regex)[1]
                }

                return 'sem parametro'
            },
            isDebug() {
                const parametro = window.Piano.variaveis.constante.util.DEBUG
                const valorParametro = window.Piano.util.getValorParametroNaUrl(parametro)

                if (valorParametro === 'true') {
                    Helpers.setCookie(parametro, valorParametro, 1)
                    return true
                }

                if (valorParametro === 'false') {
                    Helpers.setCookie(parametro, '', -1)
                    return false
                }

                if (Helpers.getCookie(window.Piano.variaveis.constante.util.DEBUG)) {
                    return true
                }

                return false
            },
            isDominioOGlobo() {
                const regex = new RegExp('://(.*?)/')
                const url = window.Piano.util.getWindowLocationHref()

                if (url.match(regex)[1].indexOf('oglobo') > -1 || (url.match(regex)[1].indexOf('globoi') > -1 && url.match(regex)[1].indexOf('edg') === -1)) {
                    return url.match(regex)[1]
                }

                return ''
            },
            callbackMeter(meterData) {
                window.regrasTiny = meterData
                window.Piano.metricas.executaAposPageview(false)
                Helpers.console(meterData, 'callbackMeter')
            },
            callbackMeterExpired(meterData) {
                window.regrasTiny = meterData
                window.Piano.variaveis.isCallbackMetterExpired = true
                window.Piano.metricas.executaAposPageview(true)
                Helpers.console(meterData, 'callbackMeterExpired')
            },
            getWindowLocationSearch() {
                return window.location.search
            },
            getWindowLocationHref() {
                return window.location.href
            },
            adicionarCss(cssPath) {
                const e = document.createElement('div')
                e.innerHTML = cssPath
                document.body.insertBefore(e, document.body.lastChild)
            },
            isRevista() {
                const revistas = [
                    'epoca',
                    'auto-esporte',
                    'vogue',
                    'glamour',
                    'casa-vogue',
                    'marie-claire',
                    'casa-e-jardim',
                    'quem-acontece',
                    'globo-rural',
                    'gq',
                    'monet',
                    'crescer',
                    'galileu',
                    'epoca-negocios',
                    'pegn',
                    'edigital-epoca',
                    'edigital-auto-esporte',
                    'edigital-vogue',
                    'edigital-glamour',
                    'edigital-casa-vogue',
                    'edigital-marie-claire',
                    'edigital-casa-e-jardim',
                    'edigital-quem-acontece',
                    'edigital-globo-rural',
                    'edigital-gq',
                    'edigital-monet',
                    'edigital-crescer',
                    'edigital-galileu',
                    'edigital-epoca-negocios',
                    'edigital-pegn',
                ]

                if (revistas.indexOf(window.Piano.variaveis.getNomeProduto()) > -1)
                    return true

                return false
            },
            recarregaPiano(tipoConteudo, isExclusivo, nomeProduto, postOpened) {
                const postElement = window.analiticoPost
                window.tipoConteudoPiano = tipoConteudo
                window.conteudoExclusivo = isExclusivo
                window.nomeProdutoPiano = nomeProduto

                function analyticalUnblockedForPiano() {
                    const event = new CustomEvent('analyticalUnblockedForPiano')
                    document.dispatchEvent(event)
                }

                function analyticalBlockedForPiano() {
                    const event = new CustomEvent('analyticalBlockedForPiano')
                    document.dispatchEvent(event)
                }

                function analyticalPostIsOpened() {
                    const event = new CustomEvent('analyticalPostIsOpened')
                    document.dispatchEvent(event)
                }

                function analyticalPostIsLoading() {
                    const event = new CustomEvent('analyticalPostIsLoading')
                    document.dispatchEvent(event)
                }

                function checkExperiencesHasChange() {
                    return new Promise((resolve) => {
                        let count = 0

                        const interval = setInterval(() => {
                            if (
                                window.tp !== 'undefined' &&
                                window.tp.experience &&
                                window.tp.experience._getLastExecutionResult() &&
                                window.tp.experience._getLastExecutionResult().result &&
                                window.tp.experience._getLastExecutionResult().result.events
                            ) {
                                const experiences = window.tp.experience._getLastExecutionResult().result.events
                                const experiencesClone = Array.from(window.tp.experience._getLastExecutionResult().result.events)
                                const experiencesChanged = Object.is(JSON.stringify(experiences), JSON.stringify(experiencesClone))

                                if (experiencesChanged) {
                                    experiences.forEach((item) => {
                                        if (item.eventType === 'runJs') {
                                            if (
                                                item.eventParams.snippet !== 'undefined' &&
                                                item.eventParams.snippet.includes(
                                                    'paywall.analytic'
                                                )
                                            ) {
                                                resolve(true)
                                                clearInterval(interval)
                                            }
                                        }
                                    })
                                }

                                if (count === 10) {
                                    resolve(false)
                                    clearInterval(interval)
                                }

                                count++
                            }
                        }, 100)
                    })
                }

                if (typeof window.regrasTiny !== 'undefined') {
                    window.regrasTiny.nomeExperiencia = ''
                }

                if (postElement) {
                    if (!postOpened) {
                        analyticalPostIsOpened()
                    } else {
                        analyticalPostIsLoading()

                        window.Piano.construtor.initTp(() => {
                            Piano.loadPianoExperiences()

                            checkExperiencesHasChange().then(function (changed) {
                                if (changed) {
                                    analyticalBlockedForPiano()
                                } else {
                                    analyticalUnblockedForPiano()
                                }
                            })
                        })
                    }
                }
            },
            isValor() {
                return window.Piano.variaveis.getNomeProduto() === 'valor'
            },
        }
    }

    get configuration() {
        return {
            jsonConfiguracaoTinyPass: {
                int: {
                    idSandboxTinypass: 'dXu7dvFKRi',
                    idSandboxTinypassRevistas: 'MctFgRCEsu',
                    setSandBox: 'true',
                    urlSandboxPiano:
                        'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
                    urlSandboxPianoRevistas:
                        'https://sandbox.tinypass.com/xbuilder/experience/load?aid=MctFgRCEsu',
                    urlVerificaLeitor: `https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/${window.tinyCpnt.Product.id}/autorizacao-acesso`,
                    urlDominioPaywall: 'https://assinatura.globostg.globoi.com/',
                    urlDominioSiteOGlobo: `${window.Piano.util.isDominioOGlobo()}/`,
                },
                qlt: {
                    idSandboxTinypass: 'GTCopIDc5z',
                    idSandboxTinypassRevistas: 'VnaP3rYVKc',
                    setSandBox: 'false',
                    urlSandboxPiano:
                        'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
                    urlSandboxPianoRevistas:
                        'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
                    urlVerificaLeitor: `https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/${window.tinyCpnt.Product.id}/autorizacao-acesso`,
                    urlDominioPaywall: 'https://assinatura.globostg.globoi.com/',
                    urlDominioSiteOGlobo: `${window.Piano.util.isDominioOGlobo()}/`,
                },
                prd: {
                    idSandboxTinypass: 'GTCopIDc5z',
                    idSandboxTinypassRevistas: 'VnaP3rYVKc',
                    setSandBox: 'false',
                    urlSandboxPiano:
                        'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
                    urlSandboxPianoRevistas:
                        'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
                    urlVerificaLeitor: `https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/${window.tinyCpnt.Product.id}/autorizacao-acesso`,
                    urlDominioPaywall: 'https://assinatura.oglobo.globo.com/',
                    urlDominioSiteOGlobo: `${window.Piano.util.isDominioOGlobo()}/`,
                },
            },
        }
    }

    get helpers() {
        return {
            mostrarBarreira() {
                window.Piano.xmlHttpRequest.geraScriptNaPagina('https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/helper/register.js')

                Helpers.setCookie(window.Piano.variaveis.constante.cookie.UTP, '', -1)

                window.tinyCpnt.GA.setEvents('window.Piano.helper.mostrarBarreira', 'Exibicao Register', window.Piano.metricas.montaRotuloGA())

                Helpers.setCookie(window.Piano.variaveis.constante.cookie.RTIEX, true, 1)
            },
        }
    }

    get construtores() {
        return {
            async initTp(callback = null) {
                const cleanUrl = window.Piano.util.getWindowLocationHref().split('?')[0]

                window.tp.push(['setTags', [window.Piano.variaveis.getTipoConteudoPiano()],])

                if (window.Piano.util.isRevista() || window.Piano.util.isValor()) {
                    window.tp.push(['setAid', window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].idSandboxTinypassRevistas,])
                } else {
                    window.tp.push(['setAid', window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].idSandboxTinypass,])
                }

                window.tp.push(['setSandbox', window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].setSandBox,])
                window.tp.push(['setDebug', window.Piano.util.isDebug()])
                window.tp.push(['setPageURL', cleanUrl])
                window.tp.push(['setZone', window.Piano.variaveis.getNomeProduto()])
                window.tp.push(['setCustomVariable', 'nomeProduto', window.Piano.variaveis.getNomeProduto(),])

                window.Piano.janelaAnonima.detectPrivateMode(function (isPrivate) {
                    window.tp.push(['setCustomVariable', 'anonimo', isPrivate])
                })

                if (window.Piano.variaveis.isConteudoExclusivo()) {
                    window.tp.push(['setCustomVariable', 'conteudoExclusivo', true])
                }

                if (Helpers.getCookie(window.Piano.variaveis.constante.cookie.DEFERRED_FLOW_NOT_ACCEPTED_COOKIE) === "true") {
                    Helpers.setCookie(window.Piano.variaveis.constante.cookie.DEFERRED_FLOW_NOT_ACCEPTED_COOKIE, false, -1)

                    window.Piano.autenticacao.defineUsuarioPiano(
                        false,
                        'deferred_flow_nao_aceito',
                        true,
                        ''
                    )
                } else if (typeof swg !== 'undefined' && typeof window.swgEntitlements !== 'undefined' && window.swgEntitlements?.enablesThis()) {
                    window.Piano.google.isSpecificGoogleUser(window.swgEntitlements);
                    window.Piano.autenticacao.defineUsuarioPiano(true, 'autorizado', true, '')

                } else {
                    const glbid = Helpers.getCookie(window.Piano.variaveis.constante.cookie.GCOM) 
                    || Helpers.getQuery('GLBID') 
                    || Helpers.getQuery('glbid') 
                    || ''

                    await window.Piano.autenticacao.verificaUsuarioLogadoNoBarramento(
                        glbid,
                        Helpers.getCookie(window.Piano.variaveis.constante.cookie.UTP)
                    )
                }

                window.Piano.regionalizacao.getRegion()
                window.Piano.krux.obtemSegmentacao()

                window.tp.push(['setCustomVariable', 'bannerContadorLigado', true])
                window.Piano.util.isOrigemBuscador() || window.Piano.util.extraiParametrosCampanhaDaUrl()
                window.tp.push(['addHandler', 'meterActive', window.Piano.util.callbackMeter,])

                window.tp.push(['addHandler', 'meterExpired', window.Piano.util.callbackMeterExpired,])

                if (callback) callback()
            },
        }
    }

    setExperience() {
        let experienceName = ''
        window.Piano.experience = {}

        const interval = setInterval(() => {
            if (window.regrasTiny && window.regrasTiny.nomeExperiencia)
                experienceName = window.subsegmentacaoPiano ? `${window.regrasTiny.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.regrasTiny.nomeExperiencia

            if (window.nomeExperiencia)
                experienceName = window.subsegmentacaoPiano ? `${window.nomeExperiencia} - ${window.subsegmentacaoPiano}` : window.nomeExperiencia

            if (experienceName) {
                window.Piano.experience.name = experienceName
                clearInterval(interval)
            }
        }, 100);
    }

    resetUtp() {
        if (this.isDefined)
            Helpers.setCookie(this.content.variaveis.constante.cookie.UTP, '', -1)
    }

    static loadPianoExperiences() {
        const a = document.createElement('script')
        a.type = 'text/javascript'
        a.async = true

        if (window.Piano.util.isRevista() || window.Piano.util.isValor()) {
            a.src = window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].urlSandboxPianoRevistas
        } else {
            a.src =
                window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].urlSandboxPiano
        }

        const b = document.getElementsByTagName('script')[0]

        b.parentNode.insertBefore(a, b)
    }

    checkPaywall(PianoResultEvents = null) {
        let hasRunJsWithPaywall = false

        if (PianoResultEvents) {
            PianoResultEvents.forEach((item) => {
                if (item.eventType === 'runJs') {
                    if (
                        item.eventParams.snippet !== 'undefined' &&
                        (item.eventParams.snippet.includes('paywall.show') ||
                            item.eventParams.snippet.includes('paywall.analytic') ||
                            item.eventParams.snippet.includes('paywall.naoBarreiraGcom') ||
                            item.eventParams.snippet.includes('paywall.barreiraBarbeira') ||
                            item.eventParams.snippet.includes('mostrarBarreira'))
                    ) {
                        window.hasPaywall = true
                        hasRunJsWithPaywall = true
                        this.triggerPaywallOpened()
                    }
                }
            })

            if (!hasRunJsWithPaywall) this.triggerAdvertising()
        }
    }

    checkPianoActive() {
        let count = 0

        const interval = setInterval(() => {
            if (
                window.tp !== 'undefined' &&
                window.tp.experience &&
                window.tp.experience._getLastExecutionResult() &&
                window.tp.experience._getLastExecutionResult().result &&
                window.tp.experience._getLastExecutionResult().result.events
            ) {
                this.checkPaywall(window.tp.experience._getLastExecutionResult().result.events)
                clearInterval(interval)
            } else {
                if (count === 10) {
                    this.triggerAdvertising()
                    clearInterval(interval)
                }

                count++
            }
        }, 500)
    }

    triggerAdvertising() {
        window.hasPaywall = false
        Helpers.console('DispatchEvent clearForAds', 'triggerAdvertising')
        const event = new CustomEvent('clearForAds')
        document.dispatchEvent(event)
    }

    triggerPaywallOpened() {
        Helpers.console('DispatchEvent blockForAds', 'triggerPaywallOpened')
        const event = new CustomEvent('blockForAds')
        document.dispatchEvent(event)
    }

    static addGlobalProps(propName, value) {
        Piano.setGlobalVars()
        window.Piano[propName] = value
        window.tinyCpnt.Piano[propName] = value

    }
}
