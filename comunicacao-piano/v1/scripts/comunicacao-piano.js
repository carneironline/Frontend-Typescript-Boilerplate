$("body").append("" +
"<div class='comunicacao-piano'>" +
"	<div class='box-texto-comunicacao'>" +
"		<p>Comunicacao</p>" +
"	</div>" +
"	<div class='back-drop'></div>" +
"</div>");


if (typeof textoComunicacao != 'undefined' && textoComunicacao != null && textoComunicacao != '' ) {
	$(".comunicacao-piano p").text(textoComunicacao);
}
