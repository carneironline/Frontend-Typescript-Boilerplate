(function () {
	window.dataLayer = window.dataLayer || []
	comunicacaoFechada = document.createElement('div');
	comunicacaoFechada.id = 'comunicacaoFechada';
	comunicacaoFechada.innerHTML = "" +
		"<div class='comunicacao-piano'>" +
		"   <div class='box-texto-comunicacao'>" +
		"       <h2>Informa&#231;&#227;o</h2>" +
		"       <p>Comunica&#231;&#227;o</p>" +
		"   </div>" +
		"   <div class='back-drop'></div>" +
		"</div>";
	document.body.insertBefore(comunicacaoFechada, document.body.lastChild);

	if (window.tituloComunicacao) {
		document.querySelector(".comunicacao-piano h2").innerHTML = tituloComunicacao;
	}

	if (window.textoComunicacao) {
		document.querySelector(".comunicacao-piano p").innerHTML = textoComunicacao;
	}


	function setGa(evtName, evtCategory, evtAction, evtLabel) {
		dataLayer.push({ 'event': evtName, 'eventoGACategoria': evtCategory, 'eventoGAAcao': evtAction, 'eventoGARotulo': evtLabel });
	}

	function setLoadGa() {
		const evtAction = 'Inadimplente'
		const evtName = 'EventoGAPiano'
		const evtLabel = window.Piano
			? `Inadimplencia ${window.Piano.metricas.montaRotuloGA()}`
			: ''

		setGa(evtName, 'Piano', evtAction, evtLabel)
	}

	setLoadGa()
})()