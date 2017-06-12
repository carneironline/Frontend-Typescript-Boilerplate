window["dataLayer"] = window["dataLayer"] || [];
var loginPiano = 'loginPiano', segmentacoesKrux = 'kxglobo_segs';
var jsonConfiguracaoTinyPass = {
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
};

var Piano = {};

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

function setCookieTiny(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" +escape(value) + ((expiredays==null) ? "" : ";expires=" + exdate.toUTCString())
	+ "; path=/;" + "domain=." + location.hostname.split('.').reverse()[1] + "." + location.hostname.split('.').reverse()[0];
};

function enviaEventosGA() {
	dataLayer.push({'event': 'EventoGAPiano', 'eventoGACategoria': 'Piano', 'eventoGAAcao': _GAEvento});
};

function redirecionarBarreira(url) {
	if (regrasTiny.fluxo.indexOf('paywall') == -1) {
		criaCookieAposContagemRegisterExpirada();
	}
	exibiuBarreira = true;
	_GAEvento = "Barreira: " + regrasTiny.nomeExperiencia;
	enviaEventosGA();
	setCookieTiny(Const.Cookie.UTP, "", -1);
	setTimeout(function() {window.location = url;}, 200);
};

function criaCookieAposContagemRegisterExpirada() {
	var cookieMeterExpired = btoa(encodeURI(JSON.stringify(regrasTiny)));
	setCookieTiny(Const.Cookie.RTIEX, cookieMeterExpired, 1);
};

function validaExistenciaDoParametro(paramName) {
	var parametros = location.search;
	if (parametros.indexOf(paramName) != -1) {
		return true;
	}
	return false;
};

function pegaValorKruxEMandaParaPiano() {
	var segmentacoes = window.localStorage.getItem(segmentacoesKrux).split(',');
	for (var i = 0; i < segmentacoes.length; i++) {
		tp.push(["setCustomVariable", segmentacoes[i], segmentacoes[i]]);
	}
};

(function () {
	Const = {
		Cookie: {
			GCOM: 'GLBID',
			UTP: '_utp',
			RTI: '_rti',
			RTIEX: '_rtiex',
			AUTH: 'servicoUsuarioAutenticado'
		},
		Prod: {
			COD: 'OG03'
		},
		Metricas: {
			EVENTO_SEM_ACAO: 'sem ação'
		}
	};
	var glbid = getCookieTiny(Const.Cookie.GCOM);
	var autorizadoNossoServico = getCookieTiny(Const.Cookie.AUTH);
	var utp = getCookieTiny(Const.Cookie.UTP);
	var urlBarreira = window.location.hostname + "/";
	var urlPaginaAtual = window.location.hostname + window.location.pathname;
	var urlPaginaAnterior = urlBarreira + "registro/?";
	urlBarreira = urlBarreira + "?passouBarreira";
	_GAContagem = "-";
	_GALimite = "-";
	_GAEvento = Const.Metricas.EVENTO_SEM_ACAO;
	var listaStringsAmbientesAceitos = ["int", "qlt", "prd"];
	
	if (typeof window.ambienteUtilizadoPiano == 'undefined' || listaStringsAmbientesAceitos.indexOf(ambienteUtilizadoPiano) == -1) {
		ambienteUtilizadoPiano = "prd";
	}; 
	
	if (window.localStorage.getItem('localStorageAmbientePiano')) {
		ambienteUtilizadoPiano = window.localStorage.getItem('localStorageAmbientePiano');
	};
	
	if (typeof window.tipoConteudoPiano == 'undefined') {
		console.log('Variável tipoConteudoPiano não está definida');
		return;
	};

	function verificaUrlAnteriorEGuardaNoCookie(urlPaginaAtual, urlPaginaAnterior, urlBarreira) {
		if (urlPaginaAtual.match(urlPaginaAnterior) == null && urlPaginaAtual != urlBarreira) {
			setCookieTiny("infgPagArt", urlPaginaAtual, 1);
		}
	};

	verificaUrlAnteriorEGuardaNoCookie(urlPaginaAtual, urlPaginaAnterior, urlBarreira);
	initTp();

	if(window.tipoConteudoPiano == "section") {
		recuperarEProcessarMetricas();
	};
	
	function getCookieTiny(name) {
		match = document.cookie.match(new RegExp(name+'=([^;]+)'));
		var cookieTiny = match ? unescape(match[1].toString()) : "";
		return cookieTiny;
	};

	function initTp() {
		tp = window["tp"] || [];
		tp.push(["setTags", [tipoConteudoPiano]]);
		tp.push(["setAid", jsonConfiguracaoTinyPass[ambienteUtilizadoPiano].idSandboxTinypass]);
		tp.push(["setSandbox", jsonConfiguracaoTinyPass[ambienteUtilizadoPiano].setSandBox]);
		tp.push(["setDebug", true]);
		var clean_url = window.location.href.split("?")[0];
		tp.push(["setPageURL",clean_url]);
		Piano.janelaAnonima.detectPrivateMode(function (is_private) {
			tp.push(["setCustomVariable", "anonimo", is_private]);
		});

		if (verificaAutenticacao(glbid, utp) && verificaPermissaoDoIdServico()) {
			verificaAutorizacao(glbid, utp);
		}

		tp.push(["setCustomVariable", "bannerContadorLigado", true]);
		verificaOrigemBuscador() || extraiParametrosCampanha();
		tp.push(["addHandler", "meterActive", callbackMeter]);
		tp.push(["addHandler", "meterExpired", callbackMeterExpired]);
	};

	if (window.localStorage.getItem(segmentacoesKrux)) {
		pegaValorKruxEMandaParaPiano();
	}

	function verificaAutenticacao(glbid, utp) {
		if (!glbid) {
			if (utp) {
				setCookieTiny(Const.Cookie.UTP, "", -1);
			}
			setCookieTiny(Const.Cookie.AUTH, "", -1);
		}
		return glbid != '';
	};

	function verificaPermissaoDoIdServico() {
		if (validaExistenciaDoParametro(loginPiano) || autorizadoNossoServico) {
			return true;
		}
		return false;
	};

	function verificaAutorizacao(glbid, utp) {

		if (utp && !validaExistenciaDoParametro(loginPiano)) {
			var _leitor = JSON.parse(decodeURI(atob(utp)));
			if (glbid == _leitor.glbid) {
				tp.push(["setCustomVariable", "autorizado", _leitor.autorizado]);
				tp.push(["setCustomVariable", "motivo", _leitor.motivo]);
				tp.push(["setCustomVariable", "logado", isLogadoCadun(_leitor.temTermoDeUso, _leitor.motivo, _leitor.autorizado)]);
				tp.push(["setCustomVariable", "temTermo", _leitor.temTermoDeUso]);
				return;
			}
			setCookieTiny(Const.Cookie.UTP, "", -1);
		}

		var formato = "application/json";
		var data = {
			"token-autenticacao": glbid,
			"ipUsuario": "127.0.0.1",
			"codigoProduto": Const.Prod.COD
		};
		$.ajax({
			url: jsonConfiguracaoTinyPass[ambienteUtilizadoPiano].urlVerificaLeitor,
			type: 'POST',
			contentType: formato,
			async : false,
			headers: {
				Accept: formato
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
				var logadoCadun = isLogadoCadun(respostaDeTermoDeUso, respostaDeMotivo, respJson.autorizado);
				tp.push(["setCustomVariable", "logado", logadoCadun]);
				tp.push(["setCustomVariable", "temTermo", respostaDeTermoDeUso]);
				tp.push(["setCustomVariable", "motivo", respostaDeMotivo]);
				var _jsonLeitor = {
						"autorizado" : respJson.autorizado,
						"motivo": respostaDeMotivo,
						"logado": logadoCadun,
						"temTermoDeUso": respostaDeTermoDeUso,
						"glbid": glbid
					};
				_jsonLeitor = btoa(encodeURI(JSON.stringify(_jsonLeitor)));
				setCookieTiny(Const.Cookie.UTP, _jsonLeitor, 1);
			},
			error: function (xhr, status, error) {
				console.log('erro na requisição: ' + xhr.status);
				tp.push(["setCustomVariable", "logado", true]);
				tp.push(["setCustomVariable", "autorizado", true]);
				tp.push(["setCustomVariable", "motivo", 'erro']);
				setCookieTiny(Const.Cookie.AUTH, "", -1);
			}
		});
	};

	function isLogadoCadun(termoDeUso, motivo, autorizado) {
		if (motivo == "indisponivel") {
			setCookieTiny(Const.Cookie.AUTH, true, 1);
			return true;
		}
		if (autorizado || termoDeUso != false) {
			setCookieTiny(Const.Cookie.AUTH, true, 30);
			return true;
		};
		return false;
	};

	function extraiParametrosCampanha() {
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
	};

	function callbackMeter (meterData){
		regrasTiny = meterData;
		executaAposPageview();
		if(meterData.maxViews != 1){
			enviaEventosGA();
		}
	};

	function callbackMeterExpired (meterData) {
		regrasTiny = meterData;
		executaAposPageview();
	};

	function executaAposPageview() {
		if(typeof tpContext == 'undefined') {
			tpContext = '-';
		}
		regrasTiny.fluxo = tpContext.toLowerCase();
		regrasTiny.nomeExperiencia = nomeExperiencia; 
		defineVariaveisDeMetricas(regrasTiny);
		var _metricas = btoa(encodeURI(JSON.stringify(regrasTiny)));
		setCookieTiny(Const.Cookie.RTI, _metricas, 30);
		processarPassagemDeRegister();
	};

	function defineVariaveisDeMetricas(metricas){
		if(!metricas) return;
		_GAContagem = "" + metricas.views;
		if (_GAContagem.length == 1) {
			_GAContagem = "0" + _GAContagem;
		}
		_GALimite = metricas.nomeExperiencia +" : "+ metricas.maxViews;
	};

	function recuperarEProcessarMetricas() {
		var _metricas = decodeURI(atob(getCookieTiny(Const.Cookie.RTI)));
		if(_metricas) {
			_metricas = JSON.parse(_metricas);
			defineVariaveisDeMetricas(_metricas);
		}
	};

	function verificaOrigemBuscador() {
		var userAgent = navigator.userAgent;
		var regexRobos = new RegExp("(ia_archiver)|(Googlebot)|(Mediapartners-Google)|(AdsBot-Google)|(msnbot)|(Yahoo! Slurp)|(ZyBorg)|(Ask Jeeves/Teoma)|(bingbot)|(cXensebot)");
		var ehRobo = regexRobos.test(userAgent);
		tp.push(["setCustomVariable", "buscador", ehRobo]);
		return ehRobo;
	};

	function processarPassagemDeRegister() {
		var cookieRTIEX = decodeURI(atob(getCookieTiny(Const.Cookie.RTIEX)));
		if (cookieRTIEX != "") {
			var jsonRTIEX = JSON.parse(cookieRTIEX);
			_GAEvento = identificarPassagem(jsonRTIEX);
			setCookieTiny(Const.Cookie.RTIEX, "", -1);
		}
	};

	function identificarPassagem(jsonRTIEX) {
		var passagem = Const.Metricas.EVENTO_SEM_ACAO;
		var limiteAdicional = 0;
		if(jsonRTIEX.maxViews == 1){
			limiteAdicional = 1;
		}	
		if(regrasTiny.views + limiteAdicional > jsonRTIEX.maxViews && jsonRTIEX.fluxo.indexOf("hardwall") == -1) {
			passagem = 'register-contagem-passou';
		} else if(jsonRTIEX.fluxo.indexOf("hardwall") != -1) {
			passagem = 'register-hardwall-passou';
		}
		return passagem;
	};

	var styleNode = document.createElement("style");
	styleNode.innerHTML = ".tp-iframe-wrapper iframe, .tp-iframe-wrapper {width: 320px !important;height: 350px !important;border-radius: 10px;}";
	document.head.appendChild(styleNode);
	
})();


(function (src) {
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.async = true;
	a.src = src;
	var b = document.getElementsByTagName("script")[0];
	b.parentNode.insertBefore(a, b);
})(jsonConfiguracaoTinyPass[ambienteUtilizadoPiano].urlSandboxPiano);
