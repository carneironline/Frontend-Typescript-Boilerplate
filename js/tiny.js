window["dataLayer"] = window["dataLayer"] || [];
var Piano = {};

Piano.produto = {
	validaConfiguracoes : function() {
		if (Piano.util.trocarConfiguracoes()) {
			Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/js/outros-produtos/configuracoes.js");
			return true;
		}
		return false;
	}
};

Piano.variaveis = {
	ambientesAceitos: "int,qlt,prd",
	statusHttpObterAutorizacaoAcesso: "400,404,406,500,502,503,504",
	statusHttpObterAssinaturaInadimplente: "400,404,500,502,503,504",
	codigoProduto: 'OG03',
	fazerRequisicaoBarramento: true,
	constante: {
		cookie: {
			GCOM: 'GLBID',
			UTP: '_utp',
			RTIEX: '_rtiex',
			AMBIENTE: 'ambientePiano'
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
		var id = window.servicoIdPiano ? window.servicoIdPiano : '4975';
		if (Piano.variaveis.getNomeProduto() == 'acervo' || Piano.variaveis.getNomeProduto() == 'jornaldigital') id = '3981'; 
		return id;
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

Piano.paywall = {
	redirecionarBarreira: function(url) {
		Piano.metricas.enviaEventosGA("Barreira", Piano.metricas.montaRotuloGA());
		Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
		setTimeout(function() {window.location = url;}, 200);
	}
};

Piano.comunicado = {
	mostrarInformacao: function(versao) {
		Piano.util.adicionarCss("<link rel='stylesheet' type='text/css' href='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/comunicacao-piano/"+versao+"/styles/styles.css'>");
		Piano.xmlHttpRequest.geraScriptNaPagina("https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/comunicacao-piano/"+versao+"/scripts/comunicacao-piano.js");
	}
};

Piano.inadimplente = {
	getLinkAssinatura: function(link) {
		for (var i = 0; i < link.length; i++) {
			if (link[i].rel == 'assinatura') return link[i].href;
		}
		return " ";
	}
};

Piano.xmlHttpRequest = {
	geraScriptNaPagina: function(urlScript) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", urlScript);
		xhr.send();
		xhr.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200){
				var resposta = xhr.responseText;
				var appendDeScript = document.createElement('script');
				appendDeScript.innerHTML = resposta;
				document.body.appendChild(appendDeScript);            
			}
		}
		
		
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
		var data = JSON.stringify({"token-autenticacao": glbid, "ipUsuario": Piano.variaveis.constante.util.IP, "codigoProduto": Piano.variaveis.codigoProduto});

		var xhr = new XMLHttpRequest();
		xhr.open("POST", Piano.configuracao.jsonConfiguracaoTinyPass[Piano.variaveis.getAmbientePiano()].urlVerificaLeitor, false);
		xhr.setRequestHeader("Accept","application/json");
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(data);
		
		
			if(xhr.readyState == 4){

				if (xhr.status == 200){
					var resposta = xhr.responseText;
					var respJson = JSON.parse(resposta);

					tp.push(["setCustomVariable", "autorizado", respJson.autorizado]);
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
					tp.push(["setCustomVariable", "logado", isAutorizado]);
					tp.push(["setCustomVariable", "temTermo", respostaDeTermoDeUso]);
					tp.push(["setCustomVariable", "motivo", respostaDeMotivo]);
					var _jsonLeitor = {
							"autorizado" : respJson.autorizado,
							"motivo": respostaDeMotivo,
							"logado": isAutorizado,
							"temTermoDeUso": respostaDeTermoDeUso,
							"glbid": glbid,
							"produto": Piano.variaveis.getNomeProduto(),
							"codProduto": Piano.variaveis.codigoProduto
					};
					_jsonLeitor = btoa(encodeURI(JSON.stringify(_jsonLeitor)));
					Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, _jsonLeitor, 1);

				}else{
					Piano.metricas.enviaEventosGA(Piano.variaveis.constante.metricas.ERRO, "Ao obter autorizacao da API - " + xhr.status + " - " + glbid);
					tp.push(["setCustomVariable", "autorizado", true]);
					tp.push(["setCustomVariable", "logado", true]);
					tp.push(["setCustomVariable", "motivo", 'erro']);
				}	
			}
			
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
					tp.push(["setCustomVariable", "autorizado", _leitor.autorizado]);
					tp.push(["setCustomVariable", "motivo", _leitor.motivo]);
					tp.push(["setCustomVariable", "logado", _leitor.logado]);
					tp.push(["setCustomVariable", "temTermo", _leitor.temTermoDeUso]);
					return;
				}
				Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
			}
			if (Piano.variaveis.fazerRequisicaoBarramento) Piano.xmlHttpRequest.fazRequisicaoBarramentoApiAutorizacaoAcesso(glbid);
		}
	},
	isAutorizado: function(termoDeUso, motivo, autorizado, hrefAssinaturaInadimplente) {
		if (autorizado || motivo == "indisponivel" || termoDeUso != false) {
			if (autorizado && hrefAssinaturaInadimplente) Piano.xmlHttpRequest.fazRequisicaoBarramentoApiObterAssinaturaInadimplente(hrefAssinaturaInadimplente);
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
	detectaAdBlock: function() {
		document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
		var setNptTechAdblockerCookie = function(adblocker) {
			var d = new Date();
			d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
			document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
		}
		var script = document.createElement("script");
		script.setAttribute("async", true);
		script.setAttribute("src", "https://www.npttech.com/advertising.js");
		script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
		document.getElementsByTagName("body")[0].appendChild(script);
	},
	detectaBurlesco: function() {
		window.onload = function(){ 
			if(typeof addControlContent == "undefined"){
				dataLayer.push({'event': 'EventoGAPiano', 'eventoGACategoria': 'ExtensaoBurlesco', 'eventoGAAcao': 'Sim', 'eventoGARotulo': '', 'eventoGAInteracao': 'true'});
			};
		}
	},
	isDominioOGlobo: function() {
		var regex = new RegExp("://(.*?)/"), url = Piano.util.getWindowLocationHref();
		if (url.match(regex)[1].indexOf("oglobo") > -1 || (url.match(regex)[1].indexOf("globoi") > -1 && url.match(regex)[1].indexOf("edg") == -1)) {
			return url.match(regex)[1];
		}
		return '';
	},
	trocarConfiguracoes: function() {
		var trocar = false;
		var utp = Piano.cookies.get(Piano.variaveis.constante.cookie.UTP);
		if (utp) var cookieUtp = JSON.parse(decodeURI(atob(utp)));
		if ((typeof cookieUtp != "undefined" && typeof cookieUtp.produto != "undefined" && cookieUtp.produto != Piano.variaveis.getNomeProduto() || typeof cookieUtp == "undefined") && ((Piano.util.isDominioOGlobo() && (Piano.variaveis.getNomeProduto() == 'acervo' || Piano.variaveis.getNomeProduto() == 'jornaldigital')) || !Piano.util.isDominioOGlobo())) {
			trocar = true;
		}
		return trocar;
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
		document.querySelector('body').innerHTML += cssPath;
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
		Piano.util.detectaAdBlock();
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

		Piano.autenticacao.verificaUsuarioLogadoNoBarramento(Piano.cookies.get(Piano.variaveis.constante.cookie.GCOM), Piano.cookies.get(Piano.variaveis.constante.cookie.UTP));

		Piano.krux.obtemSegmentacao();

		tp.push(["setCustomVariable", "bannerContadorLigado", true]);
		Piano.util.isOrigemBuscador() || Piano.util.extraiParametrosCampanhaDaUrl();
		tp.push(["addHandler", "meterActive", Piano.util.callbackMeter]);
		tp.push(["addHandler", "meterExpired", Piano.util.callbackMeterExpired]);
	}
};

(function () {
	if (Piano.produto.validaConfiguracoes()) {
		return;
	}
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
