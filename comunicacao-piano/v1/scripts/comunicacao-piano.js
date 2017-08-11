$("body").append("" +
"<div class='comunicacao-piano'>" +
"	<div class='box-texto-comunicacao'>" +
"		<h2>Informa&#231;&#227;o</h2>" +
"		<p>Comunica&#231;&#227;o</p>" +
"	</div>" +
"	<div class='back-drop'></div>" +
"</div>");

if (typeof tituloComunicacao != 'undefined' && tituloComunicacao != null && tituloComunicacao != '' ) {
	$(".comunicacao-piano h2").text(tituloComunicacao);
}

if (typeof textoComunicacao != 'undefined' && textoComunicacao != null && textoComunicacao != '' ) {
	$(".comunicacao-piano p").html(textoComunicacao);
}