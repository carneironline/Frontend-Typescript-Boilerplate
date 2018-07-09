var t = document.querySelectorAll(".corpo p, .materia .artigo-corpo p");
for(i=0;i<t.length;i++) {
    t[i].innerHTML = " ";
}

var textoDefaultBloqueioViewMode = "<strong>Este conteúdo exclusivo para assinantes.</strong> <br> <a id='link-login-viewmode' href='https://login.globo.com/login/4975?url=www.oglobo.globo.com'>Faça seu login</a> para ler essa e outras matérias na íntegra. Caso ainda não seja assinante do Globo, <a id='link-compre-viewmode' href='https://assinatura.oglobo.globo.com/VitrineDigital.aspx'>assine agora</a> e aproveite todos esses benefícios: <ul>" +
"<li>Acesso ilimitado a conteúdo exclusivo <br><small>Site, jornal digital, app Globo Notícias além de acervo digitalizado do Globo desde 1925</small></li>"+
"<li>Colunistas que antecipam fatos relevantes <br><small>Lauro Jardim, Miriam Leitão, Merval Pereira, Ancelmo Gois, Patrícia Kogut, entre outros</small></li>"+
"<li>Disponível na hora que você precisa <br><small>Notificações em tempo real e newsletters diárias com o essencial para você estar sempre bem informado</small></li>"+
"<li>Clube O Globo com descontos de até 50% <br><small>Centenas de parceiros com vantagens exclusivas em gastronomia, entretenimento e bem-estar</small></li>"+
"</ul>";


if (typeof textoBloqueioViewMode != 'undefined' && textoBloqueioViewMode != null && textoBloqueioViewMode != '') {
    document.querySelectorAll(".corpo p, .materia .artigo-corpo p")[2].innerHTML = textoBloqueioViewMode;
} else {
    document.querySelectorAll(".corpo p, .materia .artigo-corpo p")[2].innerHTML = textoDefaultBloqueioViewMode;
}
