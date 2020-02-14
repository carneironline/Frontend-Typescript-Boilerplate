import Helpers from './Helpers';
import TinyModule from './Tiny';
import GAModule from './GA';
import SwgModule from './Swg';
import PaywallCpt from './cpnt-paywall/Paywall';
import PaywallCptInline from './cpnt-paywall-inline/Paywall';

const Tiny = new TinyModule();
const GA = new GAModule();

GA.setGlobalVars();

Piano.typePaywall = null;
Piano.variaveis = {
	ambientesAceitos: "int,qlt,prd",
	statusHttpObterAutorizacaoAcesso: "400,404,406,500,502,503,504",
	statusHttpObterAssinaturaInadimplente: "400,404,500,502,503,504",
	isCallbackMetterExpired: false,
	constante: {
		cookie: {
			GCOM: 'GLBID',
			UTP: '_utp',
			RTIEX: '_rtiex',
			AMBIENTE: 'ambientePiano',
			SAVE_SUBSCRIPTION: 'saveSubscriptionCookie',
			CREATED_GLOBOID: 'createdGloboId',
			GLOBOID_MESSAGE: 'globoIdMessage'
		},
		metricas: {
			EVENTO_SEM_ACAO: 'sem acao',
			ERRO: 'Erro'
		},
		krux: {
			SEGMENTACOES: 'kxglobo_segs',
			KRUXLIGADO: 'krux-ligado'
		},
		util: {
			IP: "127.0.0.1",
			AMBIENTE: "ambiente-desejado",
			DEBUG: "debug-piano"
		}
	},
	isConteudoExclusivo: function() {
		return window.conteudoExclusivo ? true : false;
	},
	getAmbientePiano: function() {
		if (Piano.variaveis.ambientesAceitos.indexOf(Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE)) > -1) {
			Helpers.setCookie(Piano.variaveis.constante.cookie.AMBIENTE, Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE), 1);
			return Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE);
		}
		if (Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE) == 'false') {
			Helpers.setCookie(Piano.variaveis.constante.cookie.AMBIENTE, "", -1);
		}
		if (Helpers.getCookie(Piano.variaveis.constante.cookie.AMBIENTE)) {
			return Helpers.getCookie(Piano.variaveis.constante.cookie.AMBIENTE);
		};
		return Piano.variaveis.ambientesAceitos.indexOf(window.ambienteUtilizadoPiano) > -1 ? window.ambienteUtilizadoPiano : 'prd';
	},
	getTipoConteudoPiano: function() {
		return window.tipoConteudoPiano;
	},
	executouPageview: function() {
		return window.executouPageview ? true : false;
	},
	getNomeProduto: function() {
		if (!window.nomeProdutoPiano){
			GA.setEventsError("Nome do produto não definido.", window.location.href);
			return;
		}
		return window.nomeProdutoPiano;
	},
	getServicoId: function() {
		var id = '0000';

		if(Piano.variaveis.getNomeProduto() === 'oglobo'
			|| Piano.variaveis.getNomeProduto() === 'blogs'
			|| Piano.variaveis.getNomeProduto() === 'kogut'
			|| Piano.variaveis.getNomeProduto() === 'acervo'
			|| Piano.variaveis.getNomeProduto() === 'jornaldigital'
			|| Piano.variaveis.getNomeProduto() === 'blogAnalitico'){
			return id = '3981';
		}
		if (Piano.util.isRevista() && Piano.variaveis.getNomeProduto() === 'monet'){
			return id = '6618';
		}else if (Piano.util.isRevista()){
			return id = '6697';
		}

		if(Piano.variaveis.getNomeProduto() === 'valor'){
            return id = '6668';
		}

		if (id === '0000')
			GA.setEventsError('ServiceID não definido.', document.location.href +
				' nomeProduto: ' + Piano.variaveis.getNomeProduto() );

		return id;
	},
	getCodigoProduto: function(){
		var nomeProduto = Piano.variaveis.getNomeProduto();
		switch (nomeProduto){
			case 'oglobo':
			case 'blogs':
			case 'kogut':
			case 'blogAnalitico':
				return 'OG03';
			case 'acervo':
				return 'OG04';
			case 'jornaldigital':
				return 'OG01';
			case 'auto-esporte':
			case 'epoca':
			case 'vogue':
			case 'glamour':
			case 'casa-vogue':
			case 'marie-claire':
			case 'globo-rural':
			case 'gq':
			case 'monet':
			case 'crescer':
			case 'galileu':
				return nomeProduto;
			case 'casa-e-jardim':
				return 'casa-jardim';
			case 'quem-acontece':
				return 'quem';
			case 'valor':
				return 'valordigital';
			default:
				GA.setEventsError("Ao obter código do produto", nomeProduto + " - " + document.location.href);
				Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, " ");
				return 'error';
		}
	}
};

Piano.janelaAnonima = {
	retry : function(isDone, next) {
		var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
		var id = window.setInterval(
			function() {
				if (isDone()) {
					window.clearInterval(id);
					next(is_timeout);
				}
				if (current_trial++ > max_retry) {
					window.clearInterval(id);
					is_timeout = true;
					next(is_timeout);
				}
			},
			10
		);
	},
	isIE10OrLater : function(user_agent) {
		let ua = user_agent.toLowerCase();
		let match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);

		if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
			return false;
		}
		if (match && parseInt(match[1], 10) >= 10) {
			return true;
		}
		return false;
	},
	detectPrivateMode : function(callback) {
		var is_private;

		if (window.webkitRequestFileSystem) {
			window.webkitRequestFileSystem(
				window.TEMPORARY, 1,
				function() {
					is_private = false;
				},
				function(e) {
					is_private = true;
				}
			);
		} else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
			var db;
			try {
				db = window.indexedDB.open('test');
			} catch(e) {
				is_private = true;
			}

			if (typeof is_private === 'undefined') {
				Piano.janelaAnonima.retry(
					function isDone() {
						return db.readyState === 'done' ? true : false;
					},
					function next(is_timeout) {
						if (!is_timeout) {
							is_private = db.result ? false : true;
						}
					}
				);
			}
		} else if (Piano.janelaAnonima.isIE10OrLater(window.navigator.userAgent)) {
			is_private = false;
			try {
				if (!window.indexedDB) {
					is_private = true;
				}
			} catch (e) {
				is_private = true;
			}
		} else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
			try {
				window.localStorage.setItem('test', 1);
			} catch(e) {
				is_private = true;
			}

			if (typeof is_private === 'undefined') {
				is_private = false;
				window.localStorage.removeItem('test');
			}
		}

		Piano.janelaAnonima.retry(
			function isDone() {
				return typeof is_private !== 'undefined' ? true : false;
			},
			function next(is_timeout) {
				callback(is_private);
			}
		);
	}
};

Piano.krux = {
	tem: function() {
		return window.localStorage.getItem(Piano.variaveis.constante.krux.SEGMENTACOES) ? true : false;
	},
	ligado: function() {
		var parametro = Piano.variaveis.constante.krux.KRUXLIGADO;
		var valorParametro = Piano.util.getValorParametroNaUrl(parametro);
		if (valorParametro == 'false' && window.ambienteUtilizadoPiano != "prd") {
			Helpers.setCookie(parametro, valorParametro, 1);
			return false;
		}
		if (valorParametro == 'true' || window.ambienteUtilizadoPiano == "prd") {
			Helpers.setCookie(parametro, "", -1);
			return true;
		}
		if (Helpers.getCookie(Piano.variaveis.constante.krux.KRUXLIGADO) == "false") {
			return false;
		}
		return true;
	},
	obtemSegmentacao: function() {
		if (Piano.krux.tem() && Piano.krux.ligado()) {
			var segmentacoes = window.localStorage.getItem(Piano.variaveis.constante.krux.SEGMENTACOES).split(',');
			for (var i = 0; i < segmentacoes.length; i++) {
				tp.push(["setCustomVariable", segmentacoes[i], segmentacoes[i]]);
			}
		}
	}
};

Piano.regionalizacao = {
	getRegion: function() {
		var kruxGeo = localStorage.getItem('kxglobo_geo');
		if (kruxGeo) {
			kruxGeo.split('&').forEach(item => {
				let data = item.split('=');
				let key = data[0];
				let value = data[1];
				if (key === 'region') {
					tp.push(["setCustomVariable", "region", value]);
				}
			});
		}
	}
};

Piano.metricas = {
	enviaEventosGA: function(_GAAcao, _GARotulo) { //TODO: arquivo tinypass.js, inserido pela Piano, utiliza essa função
		const isProductValor = (typeof window.nomeProdutoPiano !== 'undefined' && window.nomeProdutoPiano === 'valor') ? true : false;

        if (isProductValor)
			_gaq.push(['_trackEvent', 'Piano', _GAAcao, _GARotulo, ,true]);
		else
			dataLayer.push({'event': 'EventoGAPiano', 'eventoGACategoria': 'Piano', 'eventoGAAcao': _GAAcao, 'eventoGARotulo':_GARotulo});
	},

	montaRotuloGA: function() { //TODO: at Piano as setExperience() | Check on old tiny before remove
		if(window.regrasTiny && window.regrasTiny.nomeExperiencia) {
			return window.subsegmentacaoPiano ? window.regrasTiny.nomeExperiencia + " - " + window.subsegmentacaoPiano : window.regrasTiny.nomeExperiencia;
		} else if (window.nomeExperiencia) {
			return window.subsegmentacaoPiano ? window.nomeExperiencia + " - " + window.subsegmentacaoPiano : window.nomeExperiencia;
		}
		return " ";
	},
	setLimiteContagem: function(metricas) {
		window._GALimite = "-";
		window._GAContagem = "-";

		if(!metricas) return;

		window._GAContagem = "" + metricas.views;

		if (window._GAContagem.length == 1) {
			window._GAContagem = "0" + window._GAContagem;
		}
		window._GALimite = metricas.nomeExperiencia +" : "+ metricas.maxViews;
	},
	identificarPassagemRegister: function(regras) {
		var passagem = Piano.variaveis.constante.metricas.EVENTO_SEM_ACAO;
		if(Helpers.getCookie(Piano.variaveis.constante.cookie.RTIEX)) {
			passagem = regras.fluxo.indexOf("hardwall") != -1 ? 'register-hardwall-passou' : 'register-contagem-passou';
			Helpers.setCookie(Piano.variaveis.constante.cookie.RTIEX, "", -1);
		}
		return passagem;
	},
	executaAposPageview: function(expirou) {
		if (!Piano.variaveis.executouPageview()) {
			window.regrasTiny.fluxo = window.tpContext ? tpContext.toLowerCase() : '-';
			window.regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : '';
			Piano.metricas.setLimiteContagem(window.regrasTiny);
			if (expirou == false) GA.setEvents(Piano.metricas.identificarPassagemRegister(window.regrasTiny), Piano.metricas.montaRotuloGA());
			executouPageview = true;
		}
	},
	setaVariaveis: function(idLogin, tipoLogin, assinaturaLogada){
		PaywallAnalytics.idLoginAssinante = idLogin;
        PaywallAnalytics.tipoLoginAssinante = tipoLogin;
        PaywallAnalytics.assinaturaLogada = assinaturaLogada;
	}
};


Piano.banner = {
	mostrarFooter: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-piano/"+versao+"/scripts/novo-banner-footer.js");
	},
	mostrarBotaoAssinaturaHeaderFooter: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-header-footer-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-header-footer-piano/"+versao+"/scripts/banner-header-footer-piano.js");
	},
	mostrarAvatarHeader: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/avatar-header-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/avatar-header-piano/"+versao+"/scripts/avatar-header-piano.js");
	},
	bottomFixed: function(params = {}) {
		window.glbBannerBottom = params;

		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-bottom-fixed/styles/banner-bottom-fixed.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/banner-bottom-fixed/scripts/banner-bottom-fixed.js");
	},
	mostrarSWG: function() {
		const css = `<link rel='stylesheet' type='text/css' href='https://static${Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/swg/v1/styles/style.css'>`;
		const scriptJs = `https://static${Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/swg/v1/script/anuncio-swg.js`;

		Piano.util.adicionarCss(css);
		Piano.xmlHttpRequest.geraScriptNaPagina(scriptJs);
	},
	mostrarHighlightSale: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/highlight-sale/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/highlight-sale/"+versao+"/scripts/highlight-sale.js");
	},
	mostrarSubscribeButtonValor: function(versao) {
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/valor-subscribe-button/"+versao+"/scripts/subscribe-button.js");
	}

};

Piano.register = {
	mostrarBarreira: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/"+versao+"/scripts/nova-tela-register.js");
		Helpers.setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
		GA.setEvents("Exibicao Register", Piano.metricas.montaRotuloGA());
		Helpers.setCookie(Piano.variaveis.constante.cookie.RTIEX, true, 1);
	}
};

Piano.helper = {
	mostrarBarreira: function() {
		Piano.xmlHttpRequest.geraScriptNaPagina("https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/helper/register.js");
		Helpers.setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
		GA.setEvents("Exibicao Register", Piano.metricas.montaRotuloGA());
		Helpers.setCookie(Piano.variaveis.constante.cookie.RTIEX, true, 1);
	}
};

Piano.paywall = {
	redirecionarBarreira: function(url) {
		GA.setEvents("Barreira", Piano.metricas.montaRotuloGA());
		Helpers.setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
		setTimeout(function() {window.location.href = url;}, 1000);
	},
	show: function(typePaywall = null) {
		Piano.typePaywall = typePaywall;

		try {
			new PaywallCpt();
			window.hasPaywall = true;
		}
		catch(e) {
			console.error('Paywall - Error on load')
			Piano.triggerAdvertising();
		}
	},
	analytic: function () {
		try {
			new PaywallCptInline();
			window.hasPaywall = true
		} catch (err) {
			console.error('PaywallAnalytic - Error on load', err)
		}
	}
};

function analyticalUnblockedForPiano() {
	let event = new CustomEvent('analyticalUnblockedForPiano')
	document.dispatchEvent(event);
}

function analyticalBlockedForPiano() {
	let event = new CustomEvent('analyticalBlockedForPiano')
	document.dispatchEvent(event);
}

function checkExperiencesHasChange() {
	return new Promise( (resolve, reject) => {
		let count = 0; 
		
		let interval = setInterval(() => {
			if(window.tp !== 'undefined'
			&& window.tp.experience
			&& window.tp.experience._getLastExecutionResult()
			&& window.tp.experience._getLastExecutionResult().result
			&& window.tp.experience._getLastExecutionResult().result.events)
			{
				const experiences = window.tp.experience._getLastExecutionResult().result.events
				const experiencesClone = Array.from(window.tp.experience._getLastExecutionResult().result.events)
				const experiencesChanged = Object.is(JSON.stringify(experiences), JSON.stringify(experiencesClone))

				if(experiencesChanged) {
					experiences.forEach(item => {
						if(item.eventType === 'runJs') {
							if(item.eventParams.snippet !== 'undefined' && (item.eventParams.snippet.includes('paywall.analytic') ) ) {
								resolve(true);
								clearInterval(interval);
							}
						}
					})
				}
				
				if(count === 10) {
					resolve(false);
					clearInterval(interval);
				}

				count++;
			}
		}, 100);
	});
}

Piano.checkPianoActive = function () {
	let count = 0

	let interval = setInterval(function () {
		if(window.tp !== 'undefined'
          && window.tp.experience
          && window.tp.experience._getLastExecutionResult()
          && window.tp.experience._getLastExecutionResult().result
          && window.tp.experience._getLastExecutionResult().result.events)
	     {
			Piano.checkPaywall(window.tp.experience._getLastExecutionResult().result.events)
			clearInterval(interval)
		}
		else {
			if(count === 10) {
				Piano.triggerAdvertising()
				clearInterval(interval)
			}

			count++
		}

	  }, 500);

}; 

Piano.checkPaywall = function(PianoResultEvents = null) {
   let hasRunJsWithPaywall = false

	if(PianoResultEvents) {
        PianoResultEvents.forEach(item => {
            if(item.eventType === 'runJs') {
				if(item.eventParams.snippet !== 'undefined' && (item.eventParams.snippet.includes('paywall.show')
				|| item.eventParams.snippet.includes('paywall.analytic')
				|| item.eventParams.snippet.includes('mostrarBarreira') ) ) {
                    window.hasPaywall = true
					hasRunJsWithPaywall = true
					Piano.triggerPaywallOpened()
                }
            }
        })

        if(!hasRunJsWithPaywall)
           Piano.triggerAdvertising()
    }

};

Piano.triggerAdvertising = function() {
	window.hasPaywall = false;
	let event = new CustomEvent('clearForAds')
	document.dispatchEvent(event);
};

Piano.triggerPaywallOpened = function() {
	let event = new CustomEvent('blockForAds')
	document.dispatchEvent(event);
};

Piano.registerPaywall = {
	mostrarBarreira: function(versao = null, tipo = null) {
		Piano.typePaywall = tipo;

		if(!versao || !Piano.typePaywall ) {
			Piano.triggerAdvertising();
		} else {
			Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-paywall-piano/"+versao+"/styles/styles.css'>");
			Piano.xmlHttpRequest.geraScriptNaPagina(
				"https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-paywall-piano/"+versao+"/scripts/register-paywall-piano.js",
				data => {
					if(data.status !== 200) {
						Piano.triggerAdvertising();
					}
					else {
						window.hasPaywall = true;
					}
				}
			);

			if(Piano.typePaywall === 'register' || Piano.typePaywall === 'exclusivo' ) {
				GA.setEvents("Exibicao Register", Piano.metricas.montaRotuloGA());
				Helpers.setCookie(Piano.variaveis.constante.cookie.RTIEX, true, 1);
			} else {
				GA.setEvents("Barreira", Piano.metricas.montaRotuloGA());
			}
		}

	}
};

Piano.comunicado = {
	mostrarInformacao: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/comunicacao-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/comunicacao-piano/"+versao+"/scripts/comunicacao-piano.js");
	}
};

Piano.adblock = {
	mostrarAdBlock: function(params = {}) {

		params.assetsPath = `https://static${Piano.util.montaUrlStg()}.infoglobo.com.br/paywall/adblock-piano/v4/`;

		window.glbAdblock = params;

		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/adblock-piano/v4/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/adblock-piano/v4/scripts/adblock-piano.js");
	}
};

Piano.bloqueios = {
	liberarEsc: function() {
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/bloqueio/liberaTeclado.js");
	},
	bloqueiaViewMode: function() {
        Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/bloqueio/bloqueiaViewmode.js");
    }
};

Piano.parceiro = {
	mostraFooterParceiro: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-parceiros-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-parceiros-piano/"+versao+"/scripts/footer-parceiros-piano.js");
	}
};

Piano.inadimplente = {
	getLinkAssinatura: function(link) {
		for (var i = 0; i < link.length; i++) {
			if (link[i].rel == 'assinatura') return link[i].href;
		}
		return '';
	}
};

Piano.xmlHttpRequest = {
	geraScriptNaPagina: function(urlScript, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", urlScript);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(this.readyState === 4){
				if(this.status === 200) {
					var resposta = xhr.responseText;
					var appendDeScript = document.createElement('script');
					appendDeScript.innerHTML = resposta;
					document.body.appendChild(appendDeScript);
				} else {
					GA.setEventsError('Erro na função gerar script na página.', 'url: ' + urlScript
						+ ' StatusErro: ' + this.status
						+ ' Stack: ' + this.statusText);
				}
			}

			if(callback)
				callback(xhr);
		};
	},
	fazRequisicaoBarramentoApiObterAssinaturaInadimplente: function(hrefAssinaturaInadimplente) {

		var xhr = new XMLHttpRequest();
		xhr.open("GET", hrefAssinaturaInadimplente, false);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();

		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var resposta = xhr.responseText;
				var respJson = JSON.parse(resposta);
				var situacaoPagamento = respJson.situacaoPagamento.toLowerCase();
				tp.push(["setCustomVariable", "situacaoPagamento", situacaoPagamento]);

			}else{
				if (xhr.status != 0 && Piano.variaveis.statusHttpObterAssinaturaInadimplente.indexOf(xhr.status) > -1) {
					GA.setEventsError("Api de inadimplente", xhr.status + " - " + hrefAssinaturaInadimplente);
				} else {
					GA.setEventsError("Api de inadimplente", "Status Desconhecido" + " - " + hrefAssinaturaInadimplente);
				}
			}
		}
	},
	fazRequisicaoBarramentoApiAutorizacaoAcesso: function(glbid) {

		var codigoProduto = Piano.variaveis.getCodigoProduto();
		if(codigoProduto == 'error') {
			return;
		}

		var data = JSON.stringify({"token-autenticacao": glbid, "ipUsuario": Piano.variaveis.constante.util.IP, "codigoProduto": codigoProduto});

		var xhr = new XMLHttpRequest();
		xhr.open("POST", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlVerificaLeitor, false);
		xhr.setRequestHeader("Accept","application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(data);

		if(xhr.readyState === 4){
			if (xhr.status === 200){
				var resposta = xhr.responseText;
				var respJson = JSON.parse(resposta);
				var respostaDeTermoDeUso = false, respostaDeMotivo = '', hrefAssinaturaInadimplente = '';
				if (typeof respJson.motivo != "undefined") {
					respostaDeMotivo = respJson.motivo.toLowerCase();
				}
				if (typeof respJson.temTermoDeUso != "undefined") {
					respostaDeTermoDeUso = respJson.temTermoDeUso;
				}
				if (typeof respJson.link != "undefined") {
					hrefAssinaturaInadimplente = Piano.inadimplente.getLinkAssinatura(respJson.link);
				}
				var isAutorizado = Piano.autenticacao.isAutorizado(respostaDeTermoDeUso, respostaDeMotivo, respJson.autorizado, hrefAssinaturaInadimplente);
				Piano.autenticacao.defineUsuarioPiano(respJson.autorizado, respostaDeMotivo, isAutorizado, respostaDeTermoDeUso);
				var _jsonLeitor = {
						"autorizado" : respJson.autorizado,
						"motivo": respostaDeMotivo,
						"logado": isAutorizado,
						"temTermoDeUso": respostaDeTermoDeUso,
						"glbid": glbid,
						"produto": Piano.variaveis.getNomeProduto(),
						"codProduto": codigoProduto,
						"uuid": respJson.usuarioId
					};
				_jsonLeitor = btoa(encodeURI(JSON.stringify(_jsonLeitor)));
				Helpers.setCookie(Piano.variaveis.constante.cookie.UTP, _jsonLeitor, 1);

				if (typeof swg !== 'undefined') {
					if(Piano.google.showSaveSubscription(respJson)){
						try{
							var swgService = new SwgService();
							swgService.saveGloboSubscription(glbid);
						} catch(error) {
							GA.setEventsError('Erro ao chamar a função showSaveSubscription do Aldebaran.',
																'URL: ' + document.location.href
																+ ' GLBID: ' + glbid
																+ ' Erro: ' + error);
						}
					}
				}

				if(respJson.autorizado == true){
					Piano.metricas.setaVariaveis(respJson.usuarioId, "Globo ID", "O Globo");
				}


			}else{
				GA.setEventsError("API de autorizacao de acesso", xhr.status + " - " + glbid);
				Piano.autenticacao.defineUsuarioPiano(true, 'erro', true, " ");
			}
		}
	}
};

Piano.google = {
  isAuthorized: function () {
		if(swgEntitlements.getEntitlementForSource("oglobo.globo.com")){
			Piano.metricas.setaVariaveis(swgEntitlements.getEntitlementForSource("oglobo.globo.com").subscriptionToken, "Conta Google", "O Globo");
			return true;
		}

		if(Helpers.getCookie(Piano.variaveis.constante.cookie.CREATED_GLOBOID)){
			Piano.metricas.setaVariaveis(Helpers.getCookie(Piano.variaveis.constante.cookie.CREATED_GLOBOID), "Conta Google", "Google");
			return true;
		}

		return false;
  },

  isSpecificGoogleUser: function() {
		if (Piano.google.isAuthorized())
			return;

		try{
			var oGloboBusiness = new OGloboBusiness();
			oGloboBusiness.verifyIfUserHasAccessOrDeferred(swgEntitlements);
		} catch(error) {
			GA.setEventsError("Erro ao executar o Aldebaran", "Error: " + error + " - Entitlements: " + swgEntitlements.entitlements[0].subscriptionToken);
		}
	},

	showSaveSubscription: function(response){
		if(!swgEntitlements.enablesThis() && response.motivo ==="AUTORIZADO" && !Helpers.getCookie(Piano.variaveis.constante.SAVE_SUBSCRIPTION)){
			return true;
		}
		return false;
	}

};

Piano.autenticacao = {
	isLogadoCadun: function(glbid, utp) {
		if (!glbid) {
			if (utp) Helpers.setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
			if (Helpers.getCookie(Piano.variaveis.constante.cookie.RTIEX)) Helpers.setCookie(Piano.variaveis.constante.cookie.RTIEX, "", -1);
		}
		return glbid != '';
	},
	verificaUsuarioLogadoNoBarramento: function(glbid, utp) {
		if (Piano.autenticacao.isLogadoCadun(glbid, utp)) {
			if (utp) {
				var _leitor = JSON.parse(decodeURI(atob(utp)));
				if (glbid == _leitor.glbid && (typeof _leitor.produto == "undefined" || _leitor.produto == Piano.variaveis.getNomeProduto())) {
					Piano.autenticacao.defineUsuarioPiano(_leitor.autorizado, _leitor.motivo, _leitor.logado, _leitor.temTermoDeUso);
					if(_leitor.autorizado){
						Piano.metricas.setaVariaveis(_leitor.uuid, "Globo ID", "O Globo");
					}
					return;
				}
				Helpers.setCookie(Piano.variaveis.constante.cookie.UTP, "", -1);
			}
			Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid);
		}
	},
	isAutorizado: function(termoDeUso, motivo, autorizado, hrefAssinaturaInadimplente) {
		if (autorizado || motivo == "indisponivel" || termoDeUso != false) {
			if (autorizado && hrefAssinaturaInadimplente) Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente(hrefAssinaturaInadimplente);
			return true;
		};
		if (Helpers.getCookie(Piano.variaveis.constante.cookie.RTIEX)) Helpers.setCookie(Piano.variaveis.constante.cookie.RTIEX, "", -1);
		return false;
	},
	defineUsuarioPiano:function(autorizado, motivo, logado, temTermoDeUso){
		tp.push(["setCustomVariable", "autorizado", autorizado]);
		tp.push(["setCustomVariable", "motivo", motivo]);
		tp.push(["setCustomVariable", "logado", logado]);
		if(temTermoDeUso != " ")
			tp.push(["setCustomVariable", "temTermo", temTermoDeUso]);
	}
};

Piano.util = {
	isSection: function() {
		return Piano.variaveis.getTipoConteudoPiano() === 'section' ? true : false;
	},
	temVariaveisObrigatorias: function() {
		if (typeof Piano.variaveis.getTipoConteudoPiano() === 'undefined') {
			GA.setEventsError('Variavel tipoConteudoPiano nao esta definida', document.location.href);
			return false;
		};
		if (typeof Piano.variaveis.getNomeProduto() === 'undefined') {
			GA.setEventsError('Variavel nomeProdutoPiano nao esta definida', document.location.href);
			return false;
		};
		return true;
	},
	extraiParametrosCampanhaDaUrl: function() {
		var url = Piano.util.getWindowLocationSearch();
		var chavesCampanha = ['utm_medium','utm_source'];
		var valoresCampanha = [];

		for (var idxParamCampanha = 0; idxParamCampanha < chavesCampanha.length; idxParamCampanha++) {
			var chaveCampanha = chavesCampanha[idxParamCampanha];
			if (url.indexOf(chaveCampanha + '=') != -1) {
				var regex = new RegExp("[\?(&)]" + chaveCampanha + "=([^&#]*)");
				var valorCampanha = url.match(regex)[1];
				if(valorCampanha){
					valoresCampanha.push(valorCampanha);
				}
			}
		}
		if (valoresCampanha.length > 0) {
			tp.push(["setCustomVariable", "utm", valoresCampanha.join(";")]);
		}
		if (url.indexOf('utm_campaign=') != -1) {
			var regex = new RegExp("utm_campaign=(\\w+)");
			var campanha = url.match(regex)[1];
			if(campanha){
				tp.push(["setCustomVariable", "campanha", campanha]);
			}
		}
	},
	isOrigemBuscador: function() {
		var userAgent = navigator.userAgent;
		var regexRobos = new RegExp("(ia_archiver)|(Googlebot)|(Mediapartners-Google)|(AdsBot-Google)|(msnbot)|(Yahoo! Slurp)|(ZyBorg)|(Ask Jeeves/Teoma)|(bingbot)|(cXensebot)");
		var ehRobo = regexRobos.test(userAgent);
		tp.push(["setCustomVariable", "buscador", ehRobo]);
		return ehRobo;
	},
	montaUrlStg: function() {
		return Piano.variaveis.getAmbientePiano() != 'prd' ? '-stg' : '';
	},
	temParametroNaUrl: function(paramName) {
		var parametros = Piano.util.getWindowLocationSearch();
		return parametros.indexOf(paramName) != -1 ? true : false;
	},
	getValorParametroNaUrl: function(parametro) {
		if (Piano.util.temParametroNaUrl(parametro)) {
			var parametros = Piano.util.getWindowLocationSearch();
			var regex = new RegExp("[\?(&)]" + parametro + "=([^&#]*)");
			return parametros.match(regex)[1];
		}
		return "sem parametro";
	},
	isDebug: function() {
		var parametro = Piano.variaveis.constante.util.DEBUG;
		var valorParametro = Piano.util.getValorParametroNaUrl(parametro);
		if (valorParametro == 'true') {
			Helpers.setCookie(parametro, valorParametro, 1);
			return true;
		}
		if (valorParametro == 'false') {
			Helpers.setCookie(parametro, "", -1);
			return false;
		}
		if (Helpers.getCookie(Piano.variaveis.constante.util.DEBUG)) {
			return true;
		}
		return false;
	},
	isDominioOGlobo: function() {
		var regex = new RegExp("://(.*?)/"), url = Piano.util.getWindowLocationHref();
		if (url.match(regex)[1].indexOf("oglobo") > -1 || (url.match(regex)[1].indexOf("globoi") > -1 && url.match(regex)[1].indexOf("edg") == -1)) {
			return url.match(regex)[1];
		}
		return '';
	},
	callbackMeter: function(meterData) {
		window.regrasTiny = meterData;
		Piano.metricas.executaAposPageview(false);
	},
	callbackMeterExpired: function(meterData) {
		window.regrasTiny = meterData;
		Piano.variaveis.isCallbackMetterExpired = true;
		Piano.metricas.executaAposPageview(true);
	},
	getWindowLocationSearch: function(){
		return window.location.search;
	},
	getWindowLocationHref: function(){
		return window.location.href;
	},
	adicionarCss: function(cssPath){
		var e = document.createElement('div');
		e.innerHTML = cssPath;
		document.body.insertBefore(e, document.body.lastChild);
	},
	isRevista: function(){
		var revistas = ["epoca", "auto-esporte", "vogue", "glamour", "casa-vogue", "marie-claire", "casa-e-jardim", "quem-acontece", "globo-rural", "gq", "monet", 'crescer','galileu'];
		if(revistas.indexOf(Piano.variaveis.getNomeProduto()) > -1)
			return true;
		else
			return false;
	},
	recarregaPiano: function (tipoConteudo, isExclusivo, nomeProduto) {
		window.tipoConteudoPiano = tipoConteudo;
		window.conteudoExclusivo = isExclusivo;
		window.nomeProdutoPiano = nomeProduto;

		if (typeof window.regrasTiny !== 'undefined') {
			window.regrasTiny.nomeExperiencia = "";
		}
		window["tp"] = []
		Piano.construtor.initTp();
		loadPianoExperiences();

		checkExperiencesHasChange()
		.then(changed => {
			if(changed) {
				analyticalBlockedForPiano()
			} else {
				analyticalUnblockedForPiano()
			}
		});
	},
	isValor: function () {
		if(Piano.variaveis.getNomeProduto() === "valor")
			return true;
		else
			return false;
	}
};

Piano.configuracao = {
	jsonConfiguracaoTinyPass: {
		'int': {
			'idSandboxTinypass':'dXu7dvFKRi',
			'idSandboxTinypassRevistas':'MctFgRCEsu',
			'setSandBox':'true',
			'urlSandboxPiano':'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
			'urlSandboxPianoRevistas':'https://sandbox.tinypass.com/xbuilder/experience/load?aid=MctFgRCEsu',
			'urlVerificaLeitor':'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/'+ Piano.variaveis.getServicoId() +'/autorizacao-acesso',
			'urlDominioPaywall':'https://assinatura.globostg.globoi.com/',
			'urlDominioSiteOGlobo':''+Piano.util.isDominioOGlobo()+'/'
		},
		'qlt':{
			'idSandboxTinypass':'GTCopIDc5z',
			'idSandboxTinypassRevistas':'VnaP3rYVKc',
			'setSandBox':'false',
			'urlSandboxPiano':'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
			'urlSandboxPianoRevistas':'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
			'urlVerificaLeitor':'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/'+ Piano.variaveis.getServicoId() +'/autorizacao-acesso',
			'urlDominioPaywall':'https://assinatura.globostg.globoi.com/',
			'urlDominioSiteOGlobo':''+Piano.util.isDominioOGlobo()+'/'
		},
		'prd':{
			'idSandboxTinypass':'GTCopIDc5z',
			'idSandboxTinypassRevistas':'VnaP3rYVKc',
			'setSandBox':'false',
			'urlSandboxPiano':'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
			'urlSandboxPianoRevistas':'https://experience.tinypass.com/xbuilder/experience/load?aid=VnaP3rYVKc',
			'urlVerificaLeitor':'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/'+ Piano.variaveis.getServicoId() +'/autorizacao-acesso',
			'urlDominioPaywall':'https://assinatura.oglobo.globo.com/',
			'urlDominioSiteOGlobo':''+Piano.util.isDominioOGlobo()+'/'
		}
	}
};

Piano.construtor = {
	initTp: function() {
		GA.setEvents("Carregamento Piano", "Inicio InitTp");
		tp = window["tp"] || [];
		tp.push(["setTags", [Piano.variaveis.getTipoConteudoPiano()]]);
		if (Piano.util.isRevista() || Piano.util.isValor()) {
			tp.push(["setAid", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypassRevistas]);
		}
		else {
			tp.push(["setAid", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypass]);
		}
		tp.push(["setSandbox", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].setSandBox]);
		tp.push(["setDebug", Piano.util.isDebug()]);
		var clean_url = Piano.util.getWindowLocationHref().split("?")[0];
		tp.push(["setPageURL",clean_url]);
		tp.push(["setZone", Piano.variaveis.getNomeProduto()]);
		tp.push(["setCustomVariable", "nomeProduto", Piano.variaveis.getNomeProduto()]);
		Piano.janelaAnonima.detectPrivateMode(function (is_private) {
			tp.push(["setCustomVariable", "anonimo", is_private]);
		});

		if (Piano.variaveis.isConteudoExclusivo()) {
			tp.push(["setCustomVariable", "conteudoExclusivo", true]);
		}

		if (typeof swg !== 'undefined' && (typeof swgEntitlements !== 'undefined' && swgEntitlements.enablesThis()) ) {
			Piano.google.isSpecificGoogleUser(swgEntitlements);
			Piano.autenticacao.defineUsuarioPiano(true,"AUTORIZADO", true, "");
		}else{
			Piano.autenticacao.verificaUsuarioLogadoNoBarramento(Helpers.getCookie(Piano.variaveis.constante.cookie.GCOM), Helpers.getCookie(Piano.variaveis.constante.cookie.UTP));
		}

		Piano.regionalizacao.getRegion();
		Piano.krux.obtemSegmentacao();

		tp.push(["setCustomVariable", "bannerContadorLigado", true]);
		Piano.util.isOrigemBuscador() || Piano.util.extraiParametrosCampanhaDaUrl();
		tp.push(["addHandler", "meterActive", Piano.util.callbackMeter]);
		tp.push(["addHandler", "meterExpired", Piano.util.callbackMeterExpired]);
		GA.setEvents("Carregamento Piano", "Fim InitTp");
	}
};

function loadPianoExperiences(){
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.async = true;
	if(Piano.util.isRevista() || Piano.util.isValor()) {
		a.src = Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlSandboxPianoRevistas;
	} else {
		a.src = Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlSandboxPiano;
	}

	var b = document.getElementsByTagName("script")[0];

	b.parentNode.insertBefore(a, b);
	GA.setEvents("Carregamento Piano", "Script adicionado");
}

function pianoInit() {
	window.Piano.checkPianoActive()

	if(window.tinyCpt.debug.tiny)
		console.log('log-method', 'pianoInit')

    if (window.tinyCpt.Swg.global) {
		window.SWG.push((subscriptions) => {
			if(window.tinyCpt.debug.swg)
				console.log('log-subscriptions', subscriptions)

			swg = subscriptions;

			subscriptions.setOnEntitlementsResponse(entitlementsPromise => {
				entitlementsPromise.then(entitlements => {
					window.swgEntitlements = entitlements;

					GA.setEvents("Carregamento SWG", "Entitlements recebidos");

					if (window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
						try{
							window.tinyCpt.Piano.construtor.initTp();
							loadPianoExperiences();
						}
						catch(error){
							GA.setEventsError("Piano nao foi carregada corretamente!", document.location.href);
						}
					}
				});
			});
		});
    } else {
        GA.setEventsError("Entitlements não carregado", document.location.href);
        if(window.tinyCpt.Piano.util.temVariaveisObrigatorias()) {
            window.tinyCpt.Piano.construtor.initTp();
            loadPianoExperiences();
        }
    }
}

async function tinyInit() {
	Tiny.setPiano(Piano);
    const Swg = new SwgModule();

	try {
		await Swg.init();
	}
	catch(e) { console.error(e) }

	pianoInit();
};

tinyInit();