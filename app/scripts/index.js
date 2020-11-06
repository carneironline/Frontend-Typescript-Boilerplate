import Helpers from './Helpers'
import TinyModule from './Tiny'
import Piano from './Piano'
import GAModule from './GA'
import SwgModule from './Swg'
import KruxModule from './Krux'
import getProductsObject from './ProductsRequester'
import LoginHelper from './LoginHelper'

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

getProductsObject(window.ambienteUtilizadoPiano, (productsJson) => {
    window.productsObject = JSON.parse(productsJson)
})

LoginHelper.createSessionIdCookie()

const Tiny = new TinyModule() 
const PianoModule = new Piano()  
const GA = new GAModule()  
const Krux = new KruxModule()  
const Adblock = new AdblockCpnt()

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
            PianoModule.triggerAdvertising()
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

window.Piano.registerPaywall = {
    mostrarBarreira(versao = null, tipo = null) {
        window.Piano.typePaywall = tipo

        if (!versao || !window.Piano.typePaywall) {
            PianoModule.triggerAdvertising()
        } else {
            window.Piano.util.adicionarCss(
                `<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/register-paywall-piano/${versao}/styles/styles.css'>`
            )
            window.Piano.xmlHttpRequest.geraScriptNaPagina(
                `https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/register-paywall-piano/${versao}/scripts/register-paywall-piano.js`,
                (data) => {
                    if (data.status !== 200) {
                        PianoModule.triggerAdvertising()
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
        window.Piano.xmlHttpRequest.geraScriptNaPagina(`https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/bloqueio/liberaTeclado.js`)
    },
    bloqueiaViewMode() {
        window.Piano.xmlHttpRequest.geraScriptNaPagina(`https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/bloqueio/bloqueiaViewmode.js`)
    },
}

window.Piano.parceiro = {
    mostraFooterParceiro(versao) {
        window.Piano.util.adicionarCss(`<link rel='stylesheet' type='text/css' href='https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/footer-parceiros-piano/${versao}/styles/styles.css'>`)
        window.Piano.xmlHttpRequest.geraScriptNaPagina(`https://static${window.Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/footer-parceiros-piano/${versao}/scripts/footer-parceiros-piano.js`)
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
                    window.Piano.metricas.setaVariaveis(respJson.usuarioId, 'Globo ID', 'O Globo')
                }
            })
            .catch(() => {
                GA.setEventsError(
                    'fazRequisicaoBarramentoApiAutorizacaoAcesso',
                    'API de autorizacao de acesso',
                    `${xhr.status} - ${glbid}`,
                )

                window.Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, ' ')
            })
    },
    async verificarAutorizacaoDeAcesso(){      
        let accessToken = this.getAccessToken()
        
        if (!accessToken){
            accessToken = this.getRefreshedAccessToken()
        }

        if (!accessToken){
            LoginHelper.deleteSession()
        }

        await this.fazRequisicaoBarramentoApiAutorizacaoAcessoV4(accessToken)
    },
    async getAccessToken(){
        const url = this.getUrlForOidcService('access_token')

        const accessToken = this.getToken(url)
                                .then((token) => token)

        return accessToken;
    },
    async getRefreshedAccessToken(){
        const url = this.getUrlForOidcService('refresh_token')

        const accessToken = this.getToken(url)
                                .then((token) => token)

        return accessToken;
    },
    getUrlForOidcService(requestType){
        const sessionId = LoginHelper.getSessionId()

        const oidcUrl =
            window.Piano.configuracao.jsonConfiguracaoTinyPass[
                window.Piano.variaveis.getAmbientePiano()
            ].urlOidcService
        
        return `${oidcUrl}${requestType}?sessionId=${sessionId}&productName=${window.Piano.variaveis.getNomeProduto()}`
    },
    async getToken(url){
        const accessToken = await fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then((response) => response.json())

        return accessToken;
    },
    async fazRequisicaoBarramentoApiAutorizacaoAcessoV4(accessToken) {
        const codigoProduto = window.Piano.variaveis.getCodigoProduto()

        if (codigoProduto === 'error') {
            return
        }

        const data = JSON.stringify({
            'token-acesso': accessToken,
            codigoProduto,
        })

        const xhr = new XMLHttpRequest()

        const url =
            window.Piano.configuracao.jsonConfiguracaoTinyPass[
                window.Piano.variaveis.getAmbientePiano()
            ].urlVerificaLeitorV4

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
                    accessToken,
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
                            swgService.saveSubscription(accessToken)
                        } catch (error) {
                            GA.setEventsError(
                                'fazRequisicaoBarramentoApiAutorizacaoAcessoV4',
                                'Erro ao chamar a função showSaveSubscription do Aldebaran.',
                                `URL: ${document.location.href} GLBID: ${accessToken} Erro: ${error}`,
                            )
                        }
                    }
                }

                if (respJson.autorizado === true) {
                    window.Piano.metricas.setaVariaveis(respJson.usuarioId, 'Globo ID', 'O Globo')
                }
            })
            .catch(() => {
                GA.setEventsError(
                    'fazRequisicaoBarramentoApiAutorizacaoAcessoV4',
                    'API de autorizacao de acesso',
                    `${xhr.status} - ${accessToken}`,
                )

                window.Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, ' ')
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

            const sessionId = LoginHelper.getSessionId();

            if (sessionId){
                await window.Piano.xmlHttpRequest.verificarAutorizacaoDeAcesso()
            }
            else {
                await window.Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso(
                    glbid
                )
            }
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

function pianoInit() {
    PianoModule.checkPianoActive()

    if (window.tinyCpt.isProduction && window.tinyCpt.Swg.global) {
        window.SWG.push((subscriptions) => {
            window.swg = subscriptions

            subscriptions.setOnEntitlementsResponse((entitlementsPromise) => {
                entitlementsPromise.then((entitlements) => {
                    window.swgEntitlements = entitlements

                    if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
                        try {
                            window.tinyCpt.Piano.construtor.initTp(() =>
                                PianoModule.loadPianoExperiences()
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
            window.tinyCpt.Piano.construtor.initTp(() => PianoModule.loadPianoExperiences())
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
