const bannerBottom = (function(){
	window['dataLayer'] = window['dataLayer'] || [];

	let templateSettings = {
        imagePiano: false, //https://s3.glbimg.com/v1/AUTH_65d1930a0bda476ba8d3c25c5371ec3f/piano/OGlobo/campanhas/abril_relampago_2019/footer_fechado_relampago.png
        colorBgPiano: '',
        linkPiano: ''
    };
    
    function setTemplateSettings() {
        if(window.glbBannerBottom) {
            templateSettings = Object.assign({}, templateSettings, window.glbBannerBottom);
            window.glbBannerBottom = templateSettings;
        } 
    }

	function createCpt() {
		const footerOgloboPiano = document.createElement('div');
		const elBody = document.body;
		footerOgloboPiano.id = 'footerOgloboPianoId';
		footerOgloboPiano.innerHTML = template();
		elBody.appendChild(footerOgloboPiano);
		
		if(nomeProdutoPiano && nomeProdutoPiano === 'oglobo')
			elBody.classList.add('banner-bottom-fixed-is-active')
	}

	function template() {
		const attrHref = templateSettings.linkPiano ? `data-href='${templateSettings.linkPiano}'` : '';
		const attrTitle = attrHref ? `title="${templateSettings.linkPiano}"`: '';
		const attrClass = `class="-image"`;
		const cursorPointer = attrHref ? 'cursor: pointer;' : '';
		const attrStyle = `style="${cursorPointer} background: ${templateSettings.colorBgPiano} url(${templateSettings.imagePiano}) no-repeat center center;"`;

		return `
		<a onclick="bannerBottom.clickBannerBottom(this)" ${attrTitle} ${attrClass} ${attrStyle} ${attrHref}></a>	
		`
	}

	function disparaEvento(naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {
		if (naoInterativo === false) {
			dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});
		} 
		else if (naoInterativo === true) {
			dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});
		}
		
		if (redirecionaComAtraso) {
			if ((elemento.target == "_blank") || (elemento.rel == "external" || (elemento.rel == "nofollow external"))){
				window.open(elemento.href);
			} else {
				setTimeout(function() {window.location = elemento.href;}, 300);
			}
		}
	}

	function triggerLoadGA() {
		disparaEvento(!0,"Piano","Footer de venda exibido","Capas",!1);
	}

	function clickBanner(el) {
		disparaEvento(!0,"Banner Footer", "Clique","Assine (link para pagamento) - Posicao 1",!1);
		
		if(el.dataset && el.dataset.href) {
			setTimeout(function(){
				location.href = el.dataset.href;
			}, 500)
		}
	}

	function init() {
		setTemplateSettings();
		if(!templateSettings.imagePiano)
			return;
		
		createCpt();
		triggerLoadGA();
	}

	init();

	return { 
		clickBannerBottom: clickBanner
	}
})();

