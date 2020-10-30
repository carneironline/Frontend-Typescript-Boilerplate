import Helpers from './Helpers'
import TinyModule from './Tiny'
import Piano from './Piano'
import GAModule from './GA'
import SwgModule from './Swg'
import KruxModule from './Krux'
import getProductsObject from './ProductsRequester'

import BannersConsumer from '../components/BannersConsumer'
import PaywallCpnt from '../components/PaywallCpnt'
import PaywallInlineCpnt from '../components/PaywallInlineCpnt'
import SubscribeButtonOverride from '../components/SubscribeButtonOverride'
import EdigitalContent from '../components/EdigitalContent'
import BannerBottomFixed from '../components/BannerBottomFixed'
import BannerSubscribeHeader from '../components/BannerSubscribeHeader'
import BannerCover from '../components/BannerCover'
import AdblockCpnt from '../components/AdblockCpnt'

console.table(process.env)

const Tiny = new TinyModule() 
const PianoModule = new Piano()  
const GA = new GAModule()  
const Krux = new KruxModule()  
const Adblock = new AdblockCpnt()

getProductsObject(window.ambienteUtilizadoPiano, function (productsJson) {
    window.productsObject = JSON.parse(productsJson)
})

window.Piano.banner = {
    mostrarFooter(versao) {
        window.Piano.util.adicionarCss(
            `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/footer-piano/${versao}/styles/styles.css'>`
        )
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/footer-piano/${versao}/scripts/novo-banner-footer.js`
        )
    },

    // TODO Remover depois que inserir todos os Piano.componentes.show('botaoAssineHeader') na Piano
    mostrarBotaoAssinaturaHeaderFooter() {
        try {
            new BannerSubscribeHeader()
        } catch (error) {
            console.error('BannerSubscribeHeader Component - ', error)
        }
    },
    mostrarAvatarHeader(versao) {
        window.Piano.util.adicionarCss(
            `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/avatar-header-piano/${versao}/styles/styles.css'>`
        )
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/avatar-header-piano/${versao}/scripts/avatar-header-piano.js`
        )
    },
    // TODO Remover depois que inserir todos os Piano.componentes.show('footer') na Piano
    bottomFixed(params = {}) {
        window.glbBannerBottom = params
        
        try {
            new BannerBottomFixed()
        } catch (error) {
            console.error('BannerBottomFixed Component - ', error)
        }
    },

    // TODO Remover depois que inserir todos os Piano.componentes.show('capa') na Piano
    mostrarSWG() {
        try {
            new BannerCover()
        } catch (error) {
            console.error('BannerCover Component - ', error)
        }
    },
    mostrarHighlightSale(versao) {
        window.Piano.util.adicionarCss(
            `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/highlight-sale/${versao}/styles/styles.css'>`
        )
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/highlight-sale/${versao}/scripts/highlight-sale.js`
        )
    },
    mostrarSubscribeButtonValor(versao) {
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/valor-subscribe-button/${versao}/scripts/subscribe-button.js`
        )
    },
}

window.Piano.components = {
    AdblockCpnt() {
        try {
            Adblock.init()
        } catch (error) {
            console.error('AdblockCpnt Component - ', error)
        }
    },
    BannerBottomFixed() {
        try {
            new BannerBottomFixed()
        } catch (error) {
            console.error('BannerBottomFixed Component - ', error)
        }
    },
    BannersConsumer() {
        try {
            new BannersConsumer()
        } catch (error) {
            console.error('BannersConsumer Component - ', error)
        }
    },
    BannerCover() {
        try {
            new BannerCover()
        } catch (error) {
            console.error('BannerCover Component - ', error)
        }
    },
    BannerSubscribeHeader() {
        try {
            new BannerSubscribeHeader()
        } catch (error) {
            console.error('BannerSubscribeHeader Component - ', error)
        }
    },
    SubscribeButtonOverride() {
        try {
            new SubscribeButtonOverride()
        } catch (error) {
            console.error('SubscribeButtonOverride Component - ', error)
        }
    },
    EdigitalContent() {
        try {
            new EdigitalContent()
        } catch (error) {
            console.error('EdigitalContent Component - ', error)
        }
    },
    
    show(typeData = null) {
        if(!typeData) return null

        switch(typeData) {
            case 'adblock': 
                window.Piano.components.AdblockCpnt();
                break;
            case 'footer': 
                window.Piano.components.BannerBottomFixed();
                break;
            case 'edigital': 
                window.Piano.components.EdigitalContent();
                break;
            case 'capa': 
                window.Piano.components.BannerCover();
                break;
            case 'botaoAssineHeader': 
                window.Piano.components.BannerSubscribeHeader(); 
                break;
            default: return null
        }
    }
}

window.Piano.register = {
    mostrarBarreira(versao) {
        window.Piano.util.adicionarCss(
            `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/register-piano/${versao}/styles/styles.css'>`
        )
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/register-piano/${versao}/scripts/nova-tela-register.js`
        )
        Helpers.setCookie(window.Piano.variaveis.constante.cookie.UTP, '', -1)
        GA.setEvents('window.Piano.register.mostrarBarreira', 'Exibicao Register', window.Piano.metricas.montaRotuloGA())
        Helpers.setCookie(
            window.Piano.variaveis.constante.cookie.RTIEX,
            true,
            1
        )
    },
}

window.Piano.helper = {
    mostrarBarreira() {
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            'https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/helper/register.js'
        )
        Helpers.setCookie(window.Piano.variaveis.constante.cookie.UTP, '', -1)
        GA.setEvents('window.Piano.helper.mostrarBarreira', 'Exibicao Register', window.Piano.metricas.montaRotuloGA())
        Helpers.setCookie(
            window.Piano.variaveis.constante.cookie.RTIEX,
            true,
            1
        )
    },
}

window.Piano.paywall = {
    redirecionarBarreira(url) {
        GA.setEvents('window.Piano.paywall.redirecionarBarreira', 'Barreira', window.Piano.metricas.montaRotuloGA())

        Helpers.setCookie(window.Piano.variaveis.constante.cookie.UTP, '', -1)

        setTimeout(function () {
            window.location.href = url
        }, 1000)
    },
    show(typePaywall = null) {
        window.Piano.typePaywall = typePaywall

        try {
            new PaywallCpnt()
            window.hasPaywall = true
        } catch (error) {
            console.error('PaywallCpnt - ', error)
            window.Piano.triggerAdvertising()
        }
    },
    analytic() {
        try {
            new PaywallInlineCpnt()
            window.hasPaywall = true
        } catch (err) {
            console.error('PaywallAnalytic - Error on load', err)
        }
    },
    naoBarreira() {
        window.Piano.util.adicionarCss(`<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/barreira/nao-barreira/styles/styles.css'>`)
        window.Piano.xmlHttpRequest.geraScriptNaPagina(`https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/barreira/nao-barreira/scripts/index.js`)
    },
}

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
                const experiences = window.tp.experience._getLastExecutionResult()
                    .result.events
                const experiencesClone = Array.from(
                    window.tp.experience._getLastExecutionResult().result.events
                )
                const experiencesChanged = Object.is(
                    JSON.stringify(experiences),
                    JSON.stringify(experiencesClone)
                )

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

window.Piano.checkPianoActive = function () {
    let count = 0

    const interval = setInterval(function () {
        if (
            window.tp !== 'undefined' &&
            window.tp.experience &&
            window.tp.experience._getLastExecutionResult() &&
            window.tp.experience._getLastExecutionResult().result &&
            window.tp.experience._getLastExecutionResult().result.events
        ) {
            window.Piano.checkPaywall(
                window.tp.experience._getLastExecutionResult().result.events
            )
            clearInterval(interval)
        } else {
            if (count === 10) {
                window.Piano.triggerAdvertising()
                clearInterval(interval)
            }

            count++
        }
    }, 500)
}

window.Piano.checkPaywall = function (PianoResultEvents = null) {
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
                    window.Piano.triggerPaywallOpened()
                }
            }
        })

        if (!hasRunJsWithPaywall) window.Piano.triggerAdvertising()
    }
}

window.Piano.triggerAdvertising = function () {
    window.hasPaywall = false
    console.log('%c dispatchEvent clearForAds ', Helpers.consoleColor().header)
    const event = new CustomEvent('clearForAds')
    document.dispatchEvent(event)
}

window.Piano.triggerPaywallOpened = function () {
    console.log('%c dispatchEvent blockForAds ', Helpers.consoleColor().header)
    const event = new CustomEvent('blockForAds')
    document.dispatchEvent(event)
}

window.Piano.registerPaywall = {
    mostrarBarreira(versao = null, tipo = null) {
        window.Piano.typePaywall = tipo

        if (!versao || !window.Piano.typePaywall) {
            window.Piano.triggerAdvertising()
        } else {
            window.Piano.util.adicionarCss(
                `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/register-paywall-piano/${versao}/styles/styles.css'>`
            )
            window.Piano.xmlHttpRequest.geraScriptNaPagina(
                `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/register-paywall-piano/${versao}/scripts/register-paywall-piano.js`,
                (data) => {
                    if (data.status !== 200) {
                        window.Piano.triggerAdvertising()
                    } else {
                        window.hasPaywall = true
                    }
                }
            )

            if (
                window.Piano.typePaywall === 'register' ||
                window.Piano.typePaywall === 'exclusivo'
            ) {
                GA.setEvents(
                    'window.Piano.registerPaywall.mostrarBarreira',
                    'Exibicao Register',
                    window.Piano.metricas.montaRotuloGA(),
                )
                Helpers.setCookie(
                    window.Piano.variaveis.constante.cookie.RTIEX,
                    true,
                    1
                )
            } else {
                GA.setEvents('window.Piano.registerPaywall.mostrarBarreira', 'Barreira', window.Piano.metricas.montaRotuloGA())
            }
        }
    },
}

window.Piano.comunicado = {
    mostrarInformacao(versao) {
        window.Piano.util.adicionarCss(
            `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/comunicacao-piano/${versao}/styles/styles.css'>`
        )
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/comunicacao-piano/${versao}/scripts/comunicacao-piano.js`
        )
    },
}

// TODO Remover depois que inserir todos os Piano.componentes.show('adblock') na Piano
window.Piano.adblock = {
    mostrarAdBlock() {
        try {
            Adblock.init()
        } catch (error) {
            console.error('AdblockCpnt Component - ', error)
        }
    },
}

window.Piano.bloqueios = {
    liberarEsc() {
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/bloqueio/liberaTeclado.js`
        )
    },
    bloqueiaViewMode() {
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/bloqueio/bloqueiaViewmode.js`
        )
    },
}

window.Piano.parceiro = {
    mostraFooterParceiro(versao) {
        window.Piano.util.adicionarCss(
            `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/footer-parceiros-piano/${versao}/styles/styles.css'>`
        )
        window.Piano.xmlHttpRequest.geraScriptNaPagina(
            `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/footer-parceiros-piano/${versao}/scripts/footer-parceiros-piano.js`
        )
    },
}

window.Piano.inadimplente = {
    getLinkAssinatura(link) {
        for (let i = 0; i < link.length; i++) {
            if (link[i].rel === 'assinatura') return link[i].href
        }
        return ''
    },
}

window.Piano.xmlHttpRequest = {
    geraScriptNaPagina(urlScript, callback) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', urlScript)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const resposta = xhr.responseText
                    const appendDeScript = document.createElement('script')
                    appendDeScript.innerHTML = resposta
                    document.body.appendChild(appendDeScript)
                } else {
                    GA.setEventsError(
                        'geraScriptNaPagina',
                        'Erro na função gerar script na página.',
                        `url: ${urlScript} StatusErro: ${this.status} Stack: ${this.statusText}`,
                    )
                }
            }

            if (callback) callback(xhr)
        }
    },
    fazRequisicaoBarramentoApiObterAssinaturaInadimplente(
        hrefAssinaturaInadimplente
    ) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', hrefAssinaturaInadimplente, false)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send()

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const resposta = xhr.responseText
                const respJson = JSON.parse(resposta)
                const situacaoPagamento = respJson.situacaoPagamento.toLowerCase()
                window.tp.push([
                    'setCustomVariable',
                    'situacaoPagamento',
                    situacaoPagamento,
                ])
                const _jsonLeitor = { situacaoPagamento }
                const _jsonLeitorEncoded = btoa(
                    encodeURI(JSON.stringify(_jsonLeitor))
                )
                Helpers.setCookie(
                    window.Piano.variaveis.constante.cookie.UTP,
                    _jsonLeitorEncoded,
                    1
                )
            } else if (
                xhr.status !== 0 &&
                window.Piano.variaveis.statusHttpObterAssinaturaInadimplente.indexOf(
                    xhr.status
                ) > -1
            ) {
                GA.setEventsError(
                    'fazRequisicaoBarramentoApiObterAssinaturaInadimplente',
                    'Api de inadimplente',
                    `${xhr.status} - ${hrefAssinaturaInadimplente}`,
                )
            } else {
                GA.setEventsError(
                    'fazRequisicaoBarramentoApiObterAssinaturaInadimplente',
                    'Api de inadimplente',
                    `${'Status Desconhecido - '}${hrefAssinaturaInadimplente}`,
                )
            }
        }
    },
    async fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid) {
        const codigoProduto = window.Piano.variaveis.getCodigoProduto()

        if (codigoProduto === 'error') {
            return
        }

        const data = JSON.stringify({
            'token-autenticacao': glbid,
            ipUsuario: window.Piano.variaveis.constante.util.IP,
            codigoProduto,
        })

        const xhr = new XMLHttpRequest()

        const url =
            window.Piano.configuracao.jsonConfiguracaoTinyPass[
                window.Piano.variaveis.getAmbientePiano()
            ].urlVerificaLeitor

        await fetch(url, {
            method: 'post',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((respJson) => {
                let respostaDeTermoDeUso = ''
                let respostaDeMotivo = ''
                let hrefAssinaturaInadimplente = ''
                let _jsonLeitorAux = {}

                if (typeof respJson.motivo !== 'undefined') {
                    respostaDeMotivo = respJson.motivo.toLowerCase()
                }

                if (typeof respJson.temTermoDeUso !== 'undefined') {
                    respostaDeTermoDeUso = respJson.temTermoDeUso
                }

                if (typeof respJson.link !== 'undefined') {
                    hrefAssinaturaInadimplente = window.Piano.inadimplente.getLinkAssinatura(
                        respJson.link
                    )
                }

                const isAutorizado = window.Piano.autenticacao.isAutorizado(
                    respostaDeTermoDeUso,
                    respostaDeMotivo,
                    respJson.autorizado,
                    hrefAssinaturaInadimplente
                )

                window.Piano.autenticacao.defineUsuarioPiano(
                    respJson.autorizado,
                    respostaDeMotivo,
                    isAutorizado,
                    respostaDeTermoDeUso
                )

                const cookieUTP = Helpers.getCookie(
                    window.Piano.variaveis.constante.cookie.UTP
                )

                if (cookieUTP !== '') {
                    _jsonLeitorAux = JSON.parse(decodeURI(atob(cookieUTP)))
                }

                let _jsonLeitor = {
                    ..._jsonLeitorAux,
                    autorizado: respJson.autorizado,
                    motivo: respostaDeMotivo,
                    logado: isAutorizado,
                    temTermoDeUso: respostaDeTermoDeUso,
                    glbid,
                    produto: window.Piano.variaveis.getNomeProduto(),
                    codProduto: codigoProduto,
                    uuid: respJson.usuarioId,
                }

                _jsonLeitor = btoa(encodeURI(JSON.stringify(_jsonLeitor)))

                Helpers.setCookie(
                    window.Piano.variaveis.constante.cookie.UTP,
                    _jsonLeitor,
                    1
                )

                if (typeof swg !== 'undefined') {
                    if (window.Piano.google.showSaveSubscription(respJson)) {
                        try {
                            const swgService = new SwgService()
                            swgService.saveSubscription(glbid)
                        } catch (error) {
                            GA.setEventsError(
                                'fazRequisicaoBarramentoApiAutorizacaoAcesso',
                                'Erro ao chamar a função showSaveSubscription do Aldebaran.',
                                `URL: ${document.location.href} GLBID: ${glbid} Erro: ${error}`,
                            )
                        }
                    }
                }

                if (respJson.autorizado === true) {
                    window.Piano.metricas.setaVariaveis(
                        respJson.usuarioId,
                        'Globo ID',
                        'O Globo'
                    )
                }
            })
            .catch(() => {
                GA.setEventsError(
                    'fazRequisicaoBarramentoApiAutorizacaoAcesso',
                    'API de autorizacao de acesso',
                    `${xhr.status} - ${glbid}`,
                )

                window.Piano.autenticacao.defineUsuarioPiano(
                    true,
                    'erro',
                    true,
                    ' '
                )
            })
    },
}

window.Piano.google = {
    isAuthorized() {
        const swgProductId = window.Piano.util.isValor() ? window.Piano.variaveis.constante.swgProductIds.VALOR : window.Piano.variaveis.constante.swgProductIds.OGLOBO
        const currentProduct = window.Piano.util.isValor() ? window.Piano.variaveis.constante.swgProducts.VALOR : window.Piano.variaveis.constante.swgProducts.OGLOBO

        if (window.swgEntitlements.getEntitlementForSource(swgProductId)) {
            window.Piano.metricas.setaVariaveis(window.swgEntitlements.getEntitlementForSource(swgProductId).subscriptionToken, 'Conta Google', currentProduct)
            return true
        }

        if (Helpers.getCookie(window.Piano.variaveis.constante.cookie.CREATED_GLOBOID)) {
            window.Piano.metricas.setaVariaveis(Helpers.getCookie(window.Piano.variaveis.constante.cookie.CREATED_GLOBOID), 'Conta Google', 'Google')
            return true
        }

        return false
    },

    isSpecificGoogleUser() {
        if (window.Piano.google.isAuthorized()) return

        try {
            if (window.Piano.util.isValor()) {
                const valorBusiness = new ValorBusiness();
                valorBusiness.verifyIfUserHasAccessOrDeferred(window.swgEntitlements);

            } else {
                const oGloboBusiness = new OGloboBusiness()
                oGloboBusiness.verifyIfUserHasAccessOrDeferred(window.swgEntitlements)

            }
        } catch (error) {
            GA.setEventsError(
                'isSpecificGoogleUser',
                'Erro ao executar o Aldebaran',
                `Error: ${error} - Entitlements: ${window.swgEntitlements.entitlements[0].subscriptionToken}`,
            )
        }
    },

    showSaveSubscription(response) {
        if (
            !(window.swgEntitlements && window.swgEntitlements?.enablesThis()) &&
            response.motivo === 'autorizado' &&
            !Helpers.getCookie(
                window.Piano.variaveis.constante.SAVE_SUBSCRIPTION
            )
        ) {
            return true
        }
        return false
    },
}

window.Piano.autenticacao = {
    isLogadoCadun(glbid, utp) {
        if (!glbid) {
            if (utp)
                Helpers.setCookie(
                    window.Piano.variaveis.constante.cookie.UTP,
                    '',
                    -1
                )
            if (
                Helpers.getCookie(window.Piano.variaveis.constante.cookie.RTIEX)
            )
                Helpers.setCookie(
                    window.Piano.variaveis.constante.cookie.RTIEX,
                    '',
                    -1
                )
        }
        return glbid !== ''
    },
    async verificaUsuarioLogadoNoBarramento(glbid, utp) {
        if (window.Piano.autenticacao.isLogadoCadun(glbid, utp)) {
            if (utp) {
                const _leitor = JSON.parse(decodeURI(atob(utp)))

                if (
                    glbid === _leitor.glbid &&
                    (typeof _leitor.produto === 'undefined' ||
                        _leitor.produto ===
                        window.Piano.variaveis.getNomeProduto())
                ) {
                    if (_leitor.situacaoPagamento) {
                        window.tp.push([
                            'setCustomVariable',
                            'situacaoPagamento',
                            _leitor.situacaoPagamento,
                        ])
                    }

                    window.Piano.autenticacao.defineUsuarioPiano(
                        _leitor.autorizado,
                        _leitor.motivo,
                        _leitor.logado,
                        _leitor.temTermoDeUso
                    )

                    if (_leitor.autorizado) {
                        window.Piano.metricas.setaVariaveis(
                            _leitor.uuid,
                            'Globo ID',
                            'O Globo'
                        )
                    }

                    return
                }

                Helpers.setCookie(
                    window.Piano.variaveis.constante.cookie.UTP,
                    '',
                    -1
                )
            }

            await window.Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso(
                glbid
            )
        }
    },
    isAutorizado(termoDeUso, motivo, autorizado, hrefAssinaturaInadimplente) {
        if (autorizado || motivo === 'indisponivel' || termoDeUso !== false) {
            if (autorizado && hrefAssinaturaInadimplente)
                window.Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente(
                    hrefAssinaturaInadimplente
                )
            return true
        }
        if (Helpers.getCookie(window.Piano.variaveis.constante.cookie.RTIEX))
            Helpers.setCookie(
                window.Piano.variaveis.constante.cookie.RTIEX,
                '',
                -1
            )
        return false
    },
    defineUsuarioPiano(autorizado, motivo, logado, temTermoDeUso) {
        window.tp.push(['setCustomVariable', 'autorizado', autorizado])
        window.tp.push(['setCustomVariable', 'motivo', motivo])
        window.tp.push(['setCustomVariable', 'logado', logado])
        if (temTermoDeUso !== '')
            window.tp.push(['setCustomVariable', 'temTermo', temTermoDeUso])
    },
}

window.Piano.util = {
    isSection() {
        return window.Piano.variaveis.getTipoConteudoPiano() === 'section'
    },
    temVariaveisObrigatorias() {
        if (
            typeof window.Piano.variaveis.getTipoConteudoPiano() === 'undefined'
        ) {
            GA.setEventsError(
                'temVariaveisObrigatorias',
                'Variavel tipoConteudoPiano nao esta definida',
                document.location.href,
            )
            return false
        }
        if (typeof window.Piano.variaveis.getNomeProduto() === 'undefined') {
            GA.setEventsError(
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

        for (
            let idxParamCampanha = 0;
            idxParamCampanha < chavesCampanha.length;
            idxParamCampanha++
        ) {
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
        const regexRobos = new RegExp(
            '(ia_archiver)|(Googlebot)|(Mediapartners-Google)|(AdsBot-Google)|(msnbot)|(Yahoo! Slurp)|(ZyBorg)|(Ask Jeeves/Teoma)|(bingbot)|(cXensebot)'
        )
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
        const valorParametro = window.Piano.util.getValorParametroNaUrl(
            parametro
        )
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
        if (
            url.match(regex)[1].indexOf('oglobo') > -1 ||
            (url.match(regex)[1].indexOf('globoi') > -1 &&
                url.match(regex)[1].indexOf('edg') === -1)
        ) {
            return url.match(regex)[1]
        }
        return ''
    },
    callbackMeter(meterData) {
        window.regrasTiny = meterData
        window.Piano.metricas.executaAposPageview(false)
    },
    callbackMeterExpired(meterData) {
        window.regrasTiny = meterData
        window.Piano.variaveis.isCallbackMetterExpired = true
        window.Piano.metricas.executaAposPageview(true)
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
        window.tp = []

        if (typeof window.regrasTiny !== 'undefined') {
            window.regrasTiny.nomeExperiencia = ''
        }

        if (postElement) {
            if (!postOpened) {
                analyticalPostIsOpened()
            } else {
                analyticalPostIsLoading()

                window.Piano.construtor.initTp(() => {
                    loadPianoExperiences()

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
        if (window.Piano.variaveis.getNomeProduto() === 'valor') return true
        return false
    },
}

window.Piano.configuracao = {
    jsonConfiguracaoTinyPass: {
        int: {
            idSandboxTinypass: 'dXu7dvFKRi',
            idSandboxTinypassRevistas: 'MctFgRCEsu',
            setSandBox: 'true',
            urlSandboxPiano:
                'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
            urlSandboxPianoRevistas:
                'https://sandbox.tinypass.com/xbuilder/experience/load?aid=MctFgRCEsu',
            urlVerificaLeitor: `https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/${window.Piano.variaveis.getServicoId()}/autorizacao-acesso`,
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
            urlVerificaLeitor: `https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/${window.Piano.variaveis.getServicoId()}/autorizacao-acesso`,
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
            urlVerificaLeitor: `https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/${window.Piano.variaveis.getServicoId()}/autorizacao-acesso`,
            urlDominioPaywall: 'https://assinatura.oglobo.globo.com/',
            urlDominioSiteOGlobo: `${window.Piano.util.isDominioOGlobo()}/`,
        },
    },
}

window.Piano.construtor = {
    async initTp(callback = null) {
        window.tp = window.tp || []
        window.tp.push(['setTags', [window.Piano.variaveis.getTipoConteudoPiano()],])
        if (window.Piano.util.isRevista() || window.Piano.util.isValor()) {
            window.tp.push(['setAid', window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].idSandboxTinypassRevistas,])
        } else {
            window.tp.push(['setAid', window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].idSandboxTinypass,])
        }
        window.tp.push(['setSandbox', window.Piano.configuracao.jsonConfiguracaoTinyPass[window.Piano.variaveis.getAmbientePiano()].setSandBox,])
        window.tp.push(['setDebug', window.Piano.util.isDebug()])
        const cleanUrl = window.Piano.util.getWindowLocationHref().split('?')[0]
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
            window.Piano.autenticacao.defineUsuarioPiano(
                true,
                'autorizado',
                true,
                ''
            )

        } else {
            await window.Piano.autenticacao.verificaUsuarioLogadoNoBarramento(
                Helpers.getCookie(window.Piano.variaveis.constante.cookie.GCOM),
                Helpers.getCookie(window.Piano.variaveis.constante.cookie.UTP)
            )
        }

        window.Piano.regionalizacao.getRegion()
        window.Piano.krux.obtemSegmentacao()

        window.tp.push(['setCustomVariable', 'bannerContadorLigado', true])
        window.Piano.util.isOrigemBuscador() ||
            window.Piano.util.extraiParametrosCampanhaDaUrl()
        window.tp.push([
            'addHandler',
            'meterActive',
            window.Piano.util.callbackMeter,
        ])

        window.tp.push([
            'addHandler',
            'meterExpired',
            window.Piano.util.callbackMeterExpired,
        ])

        if (callback) callback()
    },
}

function loadPianoExperiences() {
    const a = document.createElement('script')
    a.type = 'text/javascript'
    a.async = true
    if (window.Piano.util.isRevista() || window.Piano.util.isValor()) {
        a.src =
            window.Piano.configuracao.jsonConfiguracaoTinyPass[
                window.Piano.variaveis.getAmbientePiano()
            ].urlSandboxPianoRevistas
    } else {
        a.src =
            window.Piano.configuracao.jsonConfiguracaoTinyPass[
                window.Piano.variaveis.getAmbientePiano()
            ].urlSandboxPiano
    }

    const b = document.getElementsByTagName('script')[0]

    b.parentNode.insertBefore(a, b)
}

function pianoInit() {
    window.Piano.checkPianoActive()

    if (window.tinyCpt.isProduction && window.tinyCpt.Swg.global) {
        window.SWG.push((subscriptions) => {
            window.swg = subscriptions

            subscriptions.setOnEntitlementsResponse((entitlementsPromise) => {
                entitlementsPromise.then((entitlements) => {
                    window.swgEntitlements = entitlements

                    if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
                        try {
                            window.tinyCpt.Piano.construtor.initTp(() =>
                                loadPianoExperiences()
                            )
                        } catch (error) {
                            GA.setEventsError(
                                'pianoInit',
                                'Piano nao foi carregada corretamente!',
                                document.location.href,
                            )
                        }
                    }
                })
            })
        })
    } else {
        GA.setEventsError('pianoInit', 'Entitlements não carregado', document.location.href)
        if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
            window.tinyCpt.Piano.construtor.initTp(() => loadPianoExperiences())
        }
    }
}

async function tinyInit() {
    Adblock.checksAdblockIsEnabled()
    
    Tiny.setPiano(window.Piano)
    
    try {
        const Swg = new SwgModule()
        await Swg.init()
    } catch (e) {
        console.error(e)
    }

    pianoInit()
}

tinyInit()
