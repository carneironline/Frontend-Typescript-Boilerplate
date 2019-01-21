var uri = encodeURIComponent(document.location.href);

//Monta a parte do HTML
var conteudoBarreiraRegisterPaywall = document.createElement('div');
conteudoBarreiraRegisterPaywall.id = 'barreiraRegisterPaywall';
document.body.appendChild(conteudoBarreiraRegisterPaywall);


conteudoExperienciaRegisterPaywall = "" +
"<div id='idBarreira' class='register-barreira' style='opacity: 0; display: none;'>" +
"				<img src='https://static"+Piano.util.montaUrlStg()+".infoglobo.com.br/paywall/register-piano/v1/images/produto.png'>" +
"					<iframe id='iframeCadun' src='https://login.globo.com/login/"+Piano.variaveis.getServicoId()+"?tam=widget&amp;url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D"+Piano.variaveis.getServicoId()+"%26urlIntervencao%3Dhttps%253A%252F%252Fs.glbimg.com%252Fgl%252Fba%252Fbarra-globocom.callback.html%2523"+uri+"'></iframe>" +
"</div>"

document.getElementById("barreiraRegisterPaywall").insertAdjacentHTML('beforeend', conteudoExperienciaRegisterPaywall);


//Controla e edita o HTML
// Ver se Variaves do piano existem

if (typeof precoRegister != 'undefined' && precoRegister != null && precoRegister != '' ) {
	document.querySelector(".preco-menor").innerHTML = precoRegister;
}


// GA

window['dataLayer'] = window['dataLayer'] || [];

var EventoGaPiano = {disparaEvento : function (naoInterativo, categoria, acao, rotulo, redirecionaComAtraso, elemento) {
	if (naoInterativo === false) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo});} 
	else if (naoInterativo === true) {dataLayer.push({'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAInteracao': 'true'});}
	if (redirecionaComAtraso) {if ((elemento.target == "_blank") || (elemento.rel == "external" || (elemento.rel == "nofollow external"))){window.open(elemento.href);} 
	else {setTimeout(function() {window.location = elemento.href}, 300);}}}}

document.querySelector('.conteudo-produto a').addEventListener('click', function(a) {
	a.preventDefault(),
    window.open(document.querySelector(".conteudo-produto a").href),
    EventoGaPiano.disparaEvento(!0,"Register / Paywall","Clique - Ver ofertas","",!1);
});


setTimeout(function(){document.querySelector('#idBarreira').setAttribute('style','display: block; opacity: 1;');}, 1500);