$("body").append("" +
"<div class='comunicacao-piano'>" +
"	<div class='box-texto-comunicacao'>" +
"       <span class='fechar-modal'>&#x2716;</span>" +
"		<h2>Informa&#231;&#227;o</h2>" +
"		<p>Comunica&#231;&#227;o</p>" +
"	</div>" +
"	<div class='back-drop'></div>" +
"</div>");

if (window.tituloComunicacao) {
	$(".comunicacao-piano h2").html(tituloComunicacao);
}

if (window.textoComunicacao) {
	$(".comunicacao-piano p").html(textoComunicacao);
}
$(document).off("click", ".comunicacao-piano .fechar-modal, .comunicacao-piano .back-drop").on("click", ".comunicacao-piano .fechar-modal, .comunicacao-piano .back-drop", function () {
    $(".comunicacao-piano").remove();
});