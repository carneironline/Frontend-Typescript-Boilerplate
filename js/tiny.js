window["dataLayer"] = window["dataLayer"] || [];
var Piano = {};

Piano.configuracao = {
	jsonConfiguracaoTinyPass: {
		'int': {
			'idSandboxTinypass':'dXu7dvFKRi',
			'setSandBox':'true',
			'urlSandboxPiano':'https://sandbox.tinypass.com/xbuilder/experience/load?aid=dXu7dvFKRi',
			'urlVerificaLeitor':'https://apiqlt-ig.infoglobo.com.br/funcionalidade/4975/autorizacao-acesso?v=2',
			'urlDominioPaywall':'https://assinatura.globostg.globoi.com/',
			'urlDominioSiteOGlobo':'globostg.globoi.com/'
		},
		'qlt':{
			'idSandboxTinypass':'GTCopIDc5z',
			'setSandBox':'false',
			'urlSandboxPiano':'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
			'urlVerificaLeitor':'https://apiqlt-ig.infoglobo.com.br/funcionalidade/4975/autorizacao-acesso?v=2',
			'urlDominioPaywall':'https://assinatura.globostg.globoi.com/',
			'urlDominioSiteOGlobo':'globostg.globoi.com/'
		},
		'prd':{
			'idSandboxTinypass':'GTCopIDc5z',
			'setSandBox':'false',
			'urlSandboxPiano':'https://experience.tinypass.com/xbuilder/experience/load?aid=GTCopIDc5z',
			'urlVerificaLeitor':'https://api.infoglobo.com.br/funcionalidade/4975/autorizacao-acesso?v=2',
			'urlDominioPaywall':'https://assinatura.oglobo.globo.com/',
			'urlDominioSiteOGlobo':'oglobo.globo.com/'
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

Piano.variaveis = {
	ambientesAceitos: ["int", "qlt", "prd"],
	constante: {
		cookie: {
			GCOM: 'GLBID',
			UTP: '_utp',
			RTIEX: '_rtiex',
			AMBIENTE: 'ambientePiano'
		},
		produto: {
			COD: 'OG03'
		},
		metricas: {
			EVENTO_SEM_ACAO: 'sem ação',
			ERRO: 'Erro'
		},
		krux: {
			SEGMENTACOES: 'kxglobo_segs'
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
	}
};

Piano.krux = {
	tem: function() {
		return window.localStorage.getItem(Piano.variaveis.constante.krux.SEGMENTACOES) ? true : false;
	},
	ligado: function() {
		var parametro = Piano.variaveis.constante.krux.KRUXLIGADO;
		var valorParametro = Piano.util.getValorParametroNaUrl(parametro);
		if (valorParametro == 'false' && Piano.variaveis.getAmbientePiano() != "prd") {
			Piano.cookies.set(parametro, valorParametro, 1);
			return false;
		}
		if (valorParametro == 'true' || Piano.variaveis.getAmbientePiano() == "prd") {
			Piano.cookies.set(parametro, "", -1);
			return true;
		}
		if (Piano.cookies.get(Piano.variaveis.constante.krux.KRUXLIGADO)) {
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
		if(typeof regrasTiny != 'undefined') {
			return window.subsegmentacaoPiano ? regrasTiny.nomeExperiencia + " - " + subsegmentacaoPiano : regrasTiny.nomeExperiencia;
		} else if (window.nomeExperiencia) {
			return window.subsegmentacaoPiano ? window.nomeExperiencia + " - " + subsegmentacaoPiano : window.nomeExperiencia;
		}
		return "";
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
		regrasTiny.fluxo = window.tpContext ? tpContext.toLowerCase() : '-';
		regrasTiny.nomeExperiencia = window.nomeExperiencia ? window.nomeExperiencia : '';
		Piano.metricas.setLimiteContagem(regrasTiny);
		if (typeof expirou == 'undefined') Piano.metricas.enviaEventosGA(Piano.metricas.identificarPassagemRegister(regrasTiny), Piano.metricas.montaRotuloGA());
	}
};

Piano.banner = {
	mostrarFooter: function(versao) {
		$('head').append("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-piano/"+versao+"/styles/styles.css'>");
		Piano.ajax.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/footer-piano/"+versao+"/scripts/novo-banner-footer.js", true);
	}
};

Piano.register = {
	mostrarBarreira: function(versao) {
		$('head').append("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/"+versao+"/styles/styles.css'>");
		Piano.ajax.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/"+versao+"/scripts/nova-tela-register.js", true);
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

Piano.comunicado = {
	mostrarInformacao: function(versao) {
		$('head').append("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/comunicacao-piano/"+versao+"/styles/styles.css'>");
		Piano.ajax.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/comunicacao-piano/"+versao+"/scripts/comunicacao-piano.js", true);
	}
};

Piano.ajax = {
	geraScriptNaPagina: function(urlScript, assincrono) {
		$.ajax({
			url: urlScript,
			dataType: "script",
			async: assincrono,
			cache: true,
			success: function(result) {
				$("head").append(result);
			}
		});
	},
	fazRequisicaoBarramentoApiAutorizacaoAcesso: function(glbid) {
		var data = {"token-autenticacao": glbid, "ipUsuario": Piano.variaveis.constante.util.IP, "codigoProduto": Piano.variaveis.constante.produto.COD};
		$.ajax({
			url: Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlVerificaLeitor,
			type: 'POST',
			contentType: "application/json",
			async : false,
			headers: {
				Accept: "application/json"
			},
			dataType: "json",
			data: JSON.stringify(data),
			success: function (respJson) {
				tp.push(["setCustomVariable", "autorizado", respJson.autorizado]);
				var respostaDeTermoDeUso = false, respostaDeMotivo = '';
				if (typeof respJson.motivo != "undefined") {
					respostaDeMotivo = respJson.motivo.toLowerCase();
				}
				if (typeof respJson.temTermoDeUso != "undefined") {
					respostaDeTermoDeUso = respJson.temTermoDeUso;
				}
				var isAutorizado = Piano.autenticacao.isAutorizado(respostaDeTermoDeUso, respostaDeMotivo, respJson.autorizado);
				tp.push(["setCustomVariable", "logado", isAutorizado]);
				tp.push(["setCustomVariable", "temTermo", respostaDeTermoDeUso]);
				tp.push(["setCustomVariable", "motivo", respostaDeMotivo]);
				var _jsonLeitor = {
						"autorizado" : respJson.autorizado,
						"motivo": respostaDeMotivo,
						"logado": isAutorizado,
						"temTermoDeUso": respostaDeTermoDeUso,
						"glbid": glbid
					};
				_jsonLeitor = btoa(encodeURI(JSON.stringify(_jsonLeitor)));
				Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, _jsonLeitor, 1);
			},
			error: function (xhr, status, error) {
				Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Barramento respondeu com erro ao obter autorização");
				console.log('ERRO - na requisição ao barramento: ' + xhr.status);
				tp.push(["setCustomVariable", "logado", true]);
				tp.push(["setCustomVariable", "autorizado", true]);
				tp.push(["setCustomVariable", "motivo", 'erro']);
			}
		});
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
				if (glbid == _leitor.glbid) {
					tp.push(["setCustomVariable", "autorizado", _leitor.autorizado]);
					tp.push(["setCustomVariable", "motivo", _leitor.motivo]);
					tp.push(["setCustomVariable", "logado", _leitor.logado]);
					tp.push(["setCustomVariable", "temTermo", _leitor.temTermoDeUso]);
					return;
				}
				Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
			}
			Piano.ajax.fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid);
		}
	},
	isAutorizado: function(termoDeUso, motivo, autorizado) {
		if (autorizado || motivo == "indisponivel" || termoDeUso != false) {
			return true;
		};
		if (Piano.cookies.get(Piano.variaveis.constante.cookie.RTIEX)) Piano.cookies.set(Piano.variaveis.constante.cookie.RTIEX, "", -1);
		return false;
	}
};

Piano.util = {
	isSection: function() {
		return Piano.variaveis.getTipoConteudoPiano() == "section" ? true : false;
	},
	isTipoConteudoUndefined: function() {
		if (typeof Piano.variaveis.getTipoConteudoPiano() == 'undefined') {
			Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Variavel tipoConteudoPiano nao esta definida");
			console.log('ERRO - Variavel tipoConteudoPiano nao esta definida');
			return;
		};
	},
	extraiParametrosCampanhaDaUrl: function() {
		var url = window.location.search;
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
		var parametros = window.location.search;
		return parametros.indexOf(paramName) != -1 ? true : false;
	},
	getValorParametroNaUrl: function(parametro) {
		if (Piano.util.temParametroNaUrl(parametro)) {
			var parametros = window.location.search;
			var regex = new RegExp("[\?(&)]" + parametro + "=([^&#]*)");
			return parametros.match(regex)[1];
		}
		return "";
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

	detectaAdBlock: function() {
		document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    	var setNptTechAdblockerCookie = function(adblocker) {
	        var d = new Date();
	        d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
	        document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
    	}
	    var script = document.createElement("script");
	    script.setAttribute("async", true);
	    script.setAttribute("src", "//www.npttech.com/advertising.js");
	    script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
	    document.getElementsByTagName("head")[0].appendChild(script);
	},

	callbackMeter: function(meterData) {
		regrasTiny = meterData;
		Piano.metricas.executaAposPageview();
	},
	callbackMeterExpired: function(meterData) {
		regrasTiny = meterData;
		Piano.metricas.executaAposPageview(true);
	}
};

Piano.construtor = {
	initTp: function() {
		Piano.util.isTipoConteudoUndefined();
		tp = window["tp"] || [];
		tp.push(["setTags", [Piano.variaveis.getTipoConteudoPiano()]]);
		tp.push(["setAid", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].idSandboxTinypass]);
		tp.push(["setSandbox", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].setSandBox]);
		tp.push(["setDebug", Piano.util.isDebug()]);
		var clean_url = window.location.href.split("?")[0];
		tp.push(["setPageURL",clean_url]);
		Piano.janelaAnonima.detectPrivateMode(function (is_private) {
			tp.push(["setCustomVariable", "anonimo", is_private]);
		});

		if (Piano.variaveis.isConteudoExclusivo()) {
			tp.push(["setCustomVariable", "conteudoExclusivo", true]);
		}

		Piano.autenticacao.verificaUsuarioLogadoNoBarramento(Piano.cookies.get(Piano.variaveis.constante.cookie.GCOM), Piano.cookies.get(Piano.variaveis.constante.cookie.UTP));

		Piano.krux.obtemSegmentacao();

		tp.push(["setCustomVariable", "bannerContadorLigado", true]);
		Piano.util.isOrigemBuscador() || Piano.util.extraiParametrosCampanhaDaUrl();
		tp.push(["addHandler", "meterActive", Piano.util.callbackMeter]);
		tp.push(["addHandler", "meterExpired", Piano.util.callbackMeterExpired]);
	}
};

(function () {
	Piano.util.detectaAdBlock();
	Piano.construtor.initTp();
})();

(function (src) {
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.async = true;
	a.src = src;
	var b = document.getElementsByTagName("script")[0];
	b.parentNode.insertBefore(a, b);
})(Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlSandboxPiano);
