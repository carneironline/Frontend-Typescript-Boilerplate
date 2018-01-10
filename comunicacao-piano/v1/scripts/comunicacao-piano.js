var e = document.createElement('div');
e.innerHTML = "" +
"<div class='comunicacao-piano'>" +
"   <div class='box-texto-comunicacao'>" +
"       <h2>Informa&#231;&#227;o</h2>" +
"       <p>Comunica&#231;&#227;o</p>" +
"   </div>" +
"   <div class='back-drop'></div>" +
"</div>";
document.body.insertBefore(e, document.body.childNodes[0]);

if (window.tituloComunicacao) {
	document.querySelector(".comunicacao-piano h2").innerHTML = tituloComunicacao;
}

if (window.textoComunicacao) {
	document.querySelector(".comunicacao-piano p").innerHTML = textoComunicacao;
}