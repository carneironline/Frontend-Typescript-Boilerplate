var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoRevistasBarreiraPiano = document.createElement('div');
conteudoRevistasBarreiraPiano.id = 'barreiraRevistasPiano';
document.body.appendChild(conteudoRevistasBarreiraPiano);



conteudoRevistaExperienciaPiano = "" +
"<div id='piano-barreira-revistas'>" +
"</div>"

document.getElementById("barreiraRevistasPiano").insertAdjacentHTML('beforeend', conteudoRevistaExperienciaPiano);


if (typeof imagemRevistaT != 'undefined' && imagemRevistaT != null && imagemRevistaT != '' && imagemRevistaD != 'undefined' && imagemRevistaD != null && imagemRevistaD != '' ) {
		document.querySelector(".piano-chamada-revistas").style.backgroundImage = "url("+imagemRevistaT+")";
		document.querySelector(".piano-chamada-revistas").style.backgroundImage = "url("+imagemRevistaD+")";
}

if (typeof linkRegister != 'undefined' && linkRegister != null && linkRegister != '') {
	document.getElementById("link-register").href = linkRegister;
}



setTimeout(function(){document.querySelector('#piano-barreira-revistas').setAttribute('style','opacity: 1;');}, 1500);