window.hasPaywall = window.hasPaywall || false;
window["dataLayer"] = window["dataLayer"] || [];
var Piano = {};
var PaywallAnalytics = {};
Piano.activePaywall = true;
Piano.typePaywall = null;
Piano.variaveis = {
	ambientesAceitos: "int,qlt,prd",
	statusHttpObterAutorizacaoAcesso: "400,404,406,500,502,503,504",
	statusHttpObterAssinaturaInadimplente: "400,404,500,502,503,504",
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
			Piano.cookies.set(Piano.variaveis.constante.cookie.AMBIENTE, Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE), 1);
			return Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE);
		}
		if (Piano.util.getValorParametroNaUrl(Piano.variaveis.constante.util.AMBIENTE) == 'false') {
			Piano.cookies.set(Piano.variaveis.constante.cookie.AMBIENTE, "", -1);
		}
		if (Piano.cookies.get(Piano.variaveis.constante.cookie.AMBIENTE)) {
			return Piano.cookies.get(Piano.variaveis.constante.cookie.AMBIENTE);
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
		return window.nomeProdutoPiano;
	},
	getServicoId: function() {
		var id = '0000';

		if(Piano.variaveis.getNomeProduto() === 'oglobo' 
			|| Piano.variaveis.getNomeProduto() === 'blogs' 
			|| Piano.variaveis.getNomeProduto() === 'kogut'
			|| Piano.variaveis.getNomeProduto() === 'acervo'
			|| Piano.variaveis.getNomeProduto() === 'jornaldigital'){
			return id = '3981';
		}
		if (Piano.util.isRevista()) { 
			return id = '6697';
		} 
		return id;
	},
	getCodigoProduto: function(){
		var nomeProduto = Piano.variaveis.getNomeProduto();
		switch (nomeProduto){
			case 'oglobo':
			case 'blogs':
			case 'kogut':
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
			case 'quem':
				return nomeProduto;
			case 'casa-e-jardim':
				return 'casa-jardim';
			default:
				Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Ao obter código do produto - " + nomeProduto);
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
		var ua = user_agent.toLowerCase();
		if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
			return false;
		}
		var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
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

Piano.cookies = {
	set: function(c_name, value, expiredays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = c_name + "=" +escape(value) + ((expiredays==null) ? "" : ";expires=" + exdate.toUTCString())
		+ "; path=/;" + "domain=." + location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0];
	},
	get: function(name) {
		match = document.cookie.match(new RegExp(name+'=([^;]+)'));
		var cookieTiny = match ? unescape(match[1].toString()) : "";
		return cookieTiny;
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
			Piano.cookies.set(parametro, valorParametro, 1);
			return false;
		}
		if (valorParametro == 'true' || window.ambienteUtilizadoPiano == "prd") {
			Piano.cookies.set(parametro, "", -1);
			return true;
		}
		if (Piano.cookies.get(Piano.variaveis.constante.krux.KRUXLIGADO) == "false") {
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

Piano.metricas = {
	enviaEventosGA: function(_GAAcao, _GARotulo) {
		dataLayer.push({'event': 'EventoGAPiano', 'eventoGACategoria': 'Piano', 'eventoGAAcao': _GAAcao, 'eventoGARotulo':_GARotulo});
	},
	montaRotuloGA: function() {
		if(window.regrasTiny && window.regrasTiny.nomeExperiencia) {
			return window.subsegmentacaoPiano ? regrasTiny.nomeExperiencia + " - " + subsegmentacaoPiano : regrasTiny.nomeExperiencia;
		} else if (window.nomeExperiencia) {
			return window.subsegmentacaoPiano ? window.nomeExperiencia + " - " + subsegmentacaoPiano : window.nomeExperiencia;
		}
		return " ";
	},
	setLimiteContagem: function(metricas) {
		_GALimite = "-";
		_GAContagem = "-";
		if(!metricas) return;
		_GAContagem = "" + metricas.views;
		if (_GAContagem.length == 1) {
			_GAContagem = "0" + _GAContagem;
		}
		_GALimite = metricas.nomeExperiencia +" : "+ metricas.maxViews;
	},
	identificarPassagemRegister: function(regras) {
		var passagem = Piano.variaveis.constante.metricas.EVENTO_SEM_ACAO;
		if(Piano.cookies.get(Piano.variaveis.constante.cookie.RTIEX)) {
			passagem = regras.fluxo.indexOf("hardwall") != -1 ? 'register-hardwall-passou' : 'register-contagem-passou';
			Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, "", -1);
		}
		return passagem;
	},
	executaAposPageview: function(expirou) {
		if (!Piano.variaveis.executouPageview()) {
			regrasTiny.fluxo = window.tpContext ? tpContext.toLowerCase() : '-';
			regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : '';
			Piano.metricas.setLimiteContagem(regrasTiny);
			if (typeof expirou == 'undefined') Piano.metricas.enviaEventosGA(Piano.metricas.identificarPassagemRegister(regrasTiny), Piano.metricas.montaRotuloGA());
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
	}
};

Piano.register = {
	mostrarBarreira: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/"+versao+"/scripts/nova-tela-register.js");
		Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
		Piano.metricas.enviaEventosGA("Exibicao Register", Piano.metricas.montaRotuloGA());
		Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, true, 1);
	}
};

Piano.helper = {
	mostrarBarreira: function() {
		Piano.xmlHttpRequest.geraScriptNaPagina("https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/helper/register.js");
		Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
		Piano.metricas.enviaEventosGA("Exibicao Register", Piano.metricas.montaRotuloGA());
		Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, true, 1);
	}
};

Piano.paywall = {
	redirecionarBarreira: function(url) {
		Piano.metricas.enviaEventosGA("Barreira", Piano.metricas.montaRotuloGA());
		Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
		setTimeout(function() {window.location = url;}, 200);
	}
};

Piano.triggerAdvertising = function() {
	let event = new CustomEvent('clearForAds')
	document.dispatchEvent(event);
};

Piano.checkPaywall = function() {
	let count = 0;
	
	const checkGate = setInterval(() => {
		let hasGate = document.querySelector('.barreira-register-paywall');
		let hasPub = document.querySelector('#pub-retangulo-1 iframe, #pub-retangulo-2 iframe, #pub-fullbanner-1 iframe');

		if(count > 2) {
			Piano.triggerAdvertising();
			Piano.activePaywall = false;
		}

		if( ( (hasGate && Piano.activePaywall) || hasPub) || count > 8) 
			clearInterval(checkGate);

		count++;
	}, 1000);
};

Piano.registerPaywall = { 
	mostrarBarreira: function(versao = null, tipo = null) {
		Piano.typePaywall = tipo;

		if(!Piano.activePaywall || (!versao || !Piano.typePaywall) ) {
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
			
			if(Piano.typePaywall === 'register' || 'exclusivo' ) {
				Piano.metricas.enviaEventosGA("Exibicao Register", Piano.metricas.montaRotuloGA());
				Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, true, 1);
			} else {			
				Piano.metricas.enviaEventosGA("Barreira", Piano.metricas.montaRotuloGA());
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
			if(this.readyState === 4 && this.status === 200) {
					var resposta = xhr.responseText;
					var appendDeScript = document.createElement('script');
					appendDeScript.innerHTML = resposta;
					document.body.appendChild(appendDeScript);
				
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
					Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Ao obter inadimplente da API - " + xhr.status);
				}
				Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Ao obter inadimplente - " + xhr.status);
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
				Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, _jsonLeitor, 1);
				
				if (typeof swg !== 'undefined') {
					if(Piano.google.showSaveSubscription(respJson)){
						var swgService = new SwgService();
						swgService.saveGloboSubscription(glbid);
					}
				}
				
				if(respJson.autorizado == true){
					Piano.metricas.setaVariaveis(respJson.usuarioId, "Globo ID", "O Globo");
				}

				
			}else{
				Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Ao obter autorizacao da API - " + xhr.status + " - " + glbid);
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
		
		if(Piano.cookies.get(Piano.variaveis.constante.cookie.CREATED_GLOBOID)){
			Piano.metricas.setaVariaveis(Piano.cookies.get(Piano.variaveis.constante.cookie.CREATED_GLOBOID), "Conta Google", "Google");
			return true;
		}


		return false;
    },

    isSpecificGoogleUser: function() {
		if (Piano.google.isAuthorized())
			return;

		var oGloboBusiness = new OGloboBusiness();
		oGloboBusiness.verifyIfUserHasAccessOrDeferred(swgEntitlements);
	},

	showSaveSubscription: function(response){
		if(!swgEntitlements.enablesThis() && response.motivo ==="AUTORIZADO" && !Piano.cookies.get(Piano.variaveis.constante.SAVE_SUBSCRIPTION)){
			return true;
		}
		return false;
	}

};

Piano.autenticacao = {
	isLogadoCadun: function(glbid, utp) {
		if (!glbid) {
			if (utp) Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
			if (Piano.cookies.get(Piano.variaveis.constante.cookie.RTIEX)) Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, "", -1);
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
				Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
			}
			Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid);
		}
	},
	isAutorizado: function(termoDeUso, motivo, autorizado, hrefAssinaturaInadimplente) {
		if (autorizado || motivo == "indisponivel" || termoDeUso != false) {
			if (autorizado && hrefAssinaturaInadimplente) Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente(hrefAssinaturaInadimplente);
			return true;
		};
		if (Piano.cookies.get(Piano.variaveis.constante.cookie.RTIEX)) Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, "", -1);
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
		return Piano.variaveis.getTipoConteudoPiano() == "section" ? true : false;
	},
	isTipoConteudoUndefined: function() {
		if (typeof Piano.variaveis.getTipoConteudoPiano() == 'undefined') {
			Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Variavel tipoConteudoPiano nao esta definida nesta url - " + document.location.href);
			return;
		};
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
			Piano.cookies.set(parametro, valorParametro, 1);
			return true;
		}
		if (valorParametro == 'false') {
			Piano.cookies.set(parametro, "", -1);
			return false;
		}
		if (Piano.cookies.get(Piano.variaveis.constante.util.DEBUG)) {
			return true;
		}
		return false;
	},
	detectaBurlesco: function() {
		window.onload = function(){ 
			if(typeof addControlContent == "undefined"){
				dataLayer.push({'event': 'EventoGAPiano', 'eventoGACategoria': 'ExtensaoBurlesco', 'eventoGAAcao': 'Sim', 'eventoGARotulo': '', 'eventoGAInteracao': 'true'});
			};
		};
	},
	isDominioOGlobo: function() {
		var regex = new RegExp("://(.*?)/"), url = Piano.util.getWindowLocationHref();
		if (url.match(regex)[1].indexOf("oglobo") > -1 || (url.match(regex)[1].indexOf("globoi") > -1 && url.match(regex)[1].indexOf("edg") == -1)) {
			return url.match(regex)[1];
		}
		return '';
	},
	callbackMeter: function(meterData) {
		regrasTiny = meterData;
		Piano.metricas.executaAposPageview();
	},
	callbackMeterExpired: function(meterData) {
		regrasTiny = meterData;
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
		var revistas = ["epoca", "auto-esporte", "vogue", "glamour", "casa-vogue", "marie-claire","casa-e-jardim","quem"];
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
		Piano.construtor.initTp();
		tp.experience.execute();
	}
};

Piano.configuracao = {
	jsonConfiguracaoTinyPass: {
		'int': {
			'idSandboxTinypass':'dXu7dvFKRi',
			'setSandBox':'true',
			'urlSandboxPiano':'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
			'urlVerificaLeitor':'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/'+Piano.variaveis.getServicoId()+'/autorizacao-acesso',
			'urlDominioPaywall':'https://assinatura.globostg.globoi.com/',
			'urlDominioSiteOGlobo':''+Piano.util.isDominioOGlobo()+'/'
		},
		'qlt':{
			'idSandboxTinypass':'GTCopIDc5z',
			'setSandBox':'false',
			'urlSandboxPiano':'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
			'urlVerificaLeitor':'https://apiqlt-ig.infoglobo.com.br/relacionamento/v3/funcionalidade/'+Piano.variaveis.getServicoId()+'/autorizacao-acesso',
			'urlDominioPaywall':'https://assinatura.globostg.globoi.com/',
			'urlDominioSiteOGlobo':''+Piano.util.isDominioOGlobo()+'/'
		},
		'prd':{
			'idSandboxTinypass':'GTCopIDc5z',
			'setSandBox':'false',
			'urlSandboxPiano':'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
			'urlVerificaLeitor':'https://api.infoglobo.com.br/relacionamento/v3/funcionalidade/'+Piano.variaveis.getServicoId()+'/autorizacao-acesso',
			'urlDominioPaywall':'https://assinatura.oglobo.globo.com/',
			'urlDominioSiteOGlobo':''+Piano.util.isDominioOGlobo()+'/'
		}
	}
};


Piano.construtor = {
	initTp: function() {
		Piano.util.detectaBurlesco();
		Piano.util.isTipoConteudoUndefined();
		tp = window["tp"] || [];
		tp.push(["setTags", [Piano.variaveis.getTipoConteudoPiano()]]);
		tp.push(["setAid", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypass]);
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
		
		if (typeof swg !== 'undefined' && swgEntitlements.enablesThis()) {
			Piano.google.isSpecificGoogleUser(swgEntitlements);
			Piano.autenticacao.defineUsuarioPiano(true,"AUTORIZADO", true, "");
		}else{
			Piano.autenticacao.verificaUsuarioLogadoNoBarramento(Piano.cookies.get(Piano.variaveis.constante.cookie.GCOM), Piano.cookies.get(Piano.variaveis.constante.cookie.UTP));
		}
		
		Piano.krux.obtemSegmentacao();

		tp.push(["setCustomVariable", "bannerContadorLigado", true]);
		Piano.util.isOrigemBuscador() || Piano.util.extraiParametrosCampanhaDaUrl();
		tp.push(["addHandler", "meterActive", Piano.util.callbackMeter]);
		tp.push(["addHandler", "meterExpired", Piano.util.callbackMeterExpired]);
	}
};

function loadPianoExperiences(){
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.async = true;
	a.src = Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlSandboxPiano;
	var b = document.getElementsByTagName("script")[0];
	b.parentNode.insertBefore(a, b);
}

(function () {
	if (typeof swg !== 'undefined') {
			(self.SWG = self.SWG || []).push((subscriptions) => {
				swg = subscriptions;
				subscriptions.setOnEntitlementsResponse(entitlementsPromise => {
					entitlementsPromise.then(entitlements => {
						swgEntitlements = entitlements;
						if (Piano !== 'undefined'){
							Piano.construtor.initTp();
							loadPianoExperiences();
						}else{
							console.warn("Piano nao foi carregada corretamente!")
						}
					});
				});
			});
	} else {
		Piano.construtor.initTp();
		loadPianoExperiences();
	}

	Piano.checkPaywall();
})();
