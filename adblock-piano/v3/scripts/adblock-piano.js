
var detectaAdblock = document.createElement('div');
detectaAdblock.id = 'detecta-adblock';
document.body.appendChild(detectaAdblock);


conteudoAdblock = "" +
"<div class='modal-adblock'>" +
"    <div class='conteudo-adblock'>" +
"        <div id='mensagem-adblock'>" +
"            <figure class='img-adblock'></figure>" +
"            <h2>Bloqueador de anúncios detectado</h2>" +
"            <p>O Bloqueador de anúncios impede a visualização de informações," +
"                 ofertas e outros conteúdos oferecidos que podem ser interessantes para você. Para continuar lendo, utilize o navegador sem Adblock.</p>" +
"        </div>" +
"    </div>" +
"</div>"+
"<div class='backdrop-adblock'> </div>"


document.getElementById("detecta-adblock").insertAdjacentHTML('beforeend', conteudoAdblock);


if (document.getElementById('ir-requisitos-adblock')) 
    document.querySelector('body').setAttribute('style','overflow: hidden;');
    document.getElementById('ir-requisitos-adblock').addEventListener('click', function() {
        document.getElementById('mensagem-adblock').style.display = 'none';
        document.getElementById('requisitos-adblock').style.display = 'block';
    });