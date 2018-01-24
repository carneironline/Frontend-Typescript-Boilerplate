var el = document;
var e = el.createElement('div');
e.innerHTML = "" +
"<div class='comunicacao-piano'>" +
"   <div class='box-texto-comunicacao'>" +
"       <span class='fechar-modal'>&#x2716;</span>" +
"       <h2>Informa&#231;&#227;o</h2>" +
"       <p>Comunica&#231;&#227;o</p>" +
"   </div>" +
"   <div class='back-drop'></div>" +
"</div>";
el.body.insertBefore(e, el.body.childNodes[0]);
el.body.style.overflow = "hidden";
if (window.tituloComunicacao) {
    el.querySelector(".comunicacao-piano h2").innerHTML = tituloComunicacao;
}

if (window.textoComunicacao) {
    el.querySelector(".comunicacao-piano p").innerHTML = textoComunicacao;
}

el.querySelector('.comunicacao-piano .fechar-modal').addEventListener('click', function() {
    el.querySelector('.comunicacao-piano').parentNode.removeChild(el.querySelector('.comunicacao-piano'));
    el.body.style.overflow = "";
});

el.querySelector('.comunicacao-piano .back-drop').addEventListener('click', function() {
    el.querySelector('.comunicacao-piano').parentNode.removeChild(el.querySelector('.comunicacao-piano'));
});
