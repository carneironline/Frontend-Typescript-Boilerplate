comunicacaoAberta = document.createElement('div');
comunicacaoAberta.id = 'comunicacaoAberta';
comunicacaoAberta.innerHTML = "" +
"<div class='comunicacao-piano'>" +
"   <div class='box-texto-comunicacao'>" +
"       <span class='fechar-modal'>&#x2716;</span>" +
"       <h2>Informa&#231;&#227;o</h2>" +
"       <p>Comunica&#231;&#227;o</p>" +
"   </div>" +
"   <div class='back-drop'></div>" +
"</div>";
document.body.insertBefore(comunicacaoAberta, document.body.lastChild);
document.body.style.overflow = "hidden";
if (window.tituloComunicacao) {
    document.querySelector(".comunicacao-piano h2").innerHTML = tituloComunicacao;
}

if (window.textoComunicacao) {
    document.querySelector(".comunicacao-piano p").innerHTML = textoComunicacao;
}

document.querySelector('.comunicacao-piano .fechar-modal').addEventListener('click', function() {
    document.querySelector('.comunicacao-piano').parentNode.removeChild(document.querySelector('.comunicacao-piano'));
    document.body.style.overflow = "";
});

document.querySelector('.comunicacao-piano .back-drop').addEventListener('click', function() {
    document.querySelector('.comunicacao-piano').parentNode.removeChild(document.querySelector('.comunicacao-piano'));
});

function setGa(evtName, evtCategory, evtAction, evtLabel) { 
    dataLayer.push({'event': evtName, 'eventoGACategoria': evtCategory, 'eventoGAAcao': evtAction, 'eventoGARotulo':evtLabel});
}

function setLoadGa() {          
    let evtAction = 'CPF Associado';
    let evtName = 'EventoGAPiano';
    let evtLabel = window.Piano ? Piano.metricas.montaRotuloGA() : '';

    setGa(evtName, 'Piano', evtAction, evtLabel );
};

setLoadGa();
