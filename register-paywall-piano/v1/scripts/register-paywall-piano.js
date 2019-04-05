let barraGloboCom = document.querySelector('#barra-globocom');
let headerBlog = document.querySelector('body > .site-header');
let publicidadeFullBannerMobi = document.querySelector('#container-fullbanner');
let paywallSiteContainer = document.querySelector('.paywall__site-container');
let larguraTela = window.innerWidth;
let alturaTela = window.innerHeight;
let metadeTela = alturaTela / 2;
let uri = encodeURIComponent(document.location.href);
let url = window.ambienteUtilizadoPiano == 'prd' ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/';
let protectedContentEl = document.querySelector(".protected-content");
let eventoLinkUm = null;

// scroll top para manter o header
document.documentElement.scrollTop = 0;

function hidePaywall () {
    const btnEntrar = document.getElementById('barra-auth-area');

    btnEntrar.addEventListener('click', function() {
        const btnLogin = document.querySelector('#login-popin');

        if(btnLogin) {
            let isModalOpened = (btnLogin.style.display === 'block') ? true : false;
            let paywall = document.querySelector('.barreira-register-paywall');
            
            if(isModalOpened) {
                paywall.style.display = 'none';
            } else {
                paywall.style.display = 'block';
            }
        }
    });
}

if (paywallSiteContainer) {

    // remover conteudo da materia
    if (protectedContentEl) {
        protectedContentEl.setAttribute('data-content', 'removed');
        protectedContentEl.innerHTML = " ";
    }

    if (headerBlog) {
        paywallSiteContainer.insertAdjacentElement('afterBegin', headerBlog);
    }

    if (barraGloboCom) {
        paywallSiteContainer.insertAdjacentElement('afterBegin', barraGloboCom);
    }

    if (publicidadeFullBannerMobi) {
        paywallSiteContainer.insertAdjacentElement('afterend', publicidadeFullBannerMobi);
    }

    // identificando tipo de barreira para disparo de métricas

    if (typeof Piano.typePaywall == 'undefined' || Piano.typePaywall == null || Piano.typePaywall == '') {
        nomeBarreira = 'paywall';
        if(typeof fbq !== 'undefined'){
            fbq('init', '410270039520634');
            fbq('trackSingle', '410270039520634', 'ViewPaywallExclusivo');
        }
    } 
    
    if(Piano.typePaywall == 'register') {
        nomeBarreira = 'Register comum';
        eventoLinkUm = 'Cadastre-se';
        if(typeof fbq !== 'undefined'){
            fbq('init', '410270039520634');
            fbq('trackSingle', '410270039520634', 'ViewPaywallExclusivo');
        }
    }
    else if(Piano.typePaywall == 'exclusivo') {
        nomeBarreira = 'Register exclusivo';
        eventoLinkUm = 'Assine agora';
        if(typeof fbq !== 'undefined'){
            fbq('init', '410270039520634');
            fbq('trackSingle', '410270039520634', 'ViewPaywallExclusivo');
        }
    }
    else {
        nomeBarreira = 'paywall inline';
        eventoLinkUm = 'Assine agora';
        if(typeof fbq !== 'undefined'){
            fbq('init', '410270039520634');
            fbq('trackSingle', '410270039520634', 'ViewPaywallExclusivo');
        }
    }


    let conteudoExperienciaRegisterPaywall = `
		<div class="barreira-register-paywall" style="opacity: 0;">
			<div class="barreira-register-paywall--content">
				<div class="barreira-register-paywall--titulo">
					Esse conteúdo é exclusivo para assinantes.<br /> Quer continuar sua leitura?
				</div>
				<div class="barreira-register-paywall--oftprincipal">
                    <a class="img1l" target="_blank" 
                    onclick="disparaEvento('${nomeBarreira}','Clique em link','Link 1 - ${eventoLinkUm}', this.href, event, false, true);" 
                    href="#" >
						<img class="mobi img1m" src="#" />
						<img class="desk img1d" src="#" />
					</a>		
				</div>
				<div class="barreira-register-paywall--login">
                    Já possui cadastro? 
                    <a 
                    onclick="disparaEvento('${nomeBarreira}','Clique em link','Link 2 - Faça login', this.href, event, true, false);" 
                    class="link" 
                    href="${url}login/${Piano.variaveis.getServicoId()}?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23${uri}" >
                        Faça login
                    </a>
                    <span class="barreira-register-paywall--cadastre">
                    ou
                    <a 
                    onclick="disparaEvento('${nomeBarreira}','Clique em link','Link 3 - Cadastro', this.href, event, true, false);" 
                    class="link"
                     href="${url}cadastro/${Piano.variaveis.getServicoId()}?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23${uri}">
                        Cadastre-se
                    </a>
                    </span>.
				</div>
				<div class="barreira-register-paywall--oftsecundaria">
                    <a class="img2l" target="_blank" 
                    onclick="disparaEvento('${nomeBarreira}','Clique em link','Link 4 - Banner oferta esquerda', this.href, event, false, true);" 
                    href="#" >
						<img class="mobi img2m" src="#" />
						<img class="desk img2d" src="#" />					
					</a>
                    <a class="img3l" target="_blank" 
                    onclick="disparaEvento('${nomeBarreira}','Clique em link','Link 5 - Banner oferta direita', this.href, event, false, true);" 
                    href="#" >
						<img class="mobi img3m" src="#" />
						<img class="desk img3d" src="#" />					
					</a>
				</div>
			</div>
		</div>
	`
    paywallSiteContainer.insertAdjacentHTML('afterend', conteudoExperienciaRegisterPaywall);

    let barreiraContainer = document.querySelector('.barreira-register-paywall');

    //com a barreira criada, manipulando dom por mudanças externas
    let barreiraOftprincipal = document.querySelector('.barreira-register-paywall--oftprincipal');
    let barreiraOftsecundaria = document.querySelector('.barreira-register-paywall--oftsecundaria');
    let barreiraTitulo = document.querySelector('.barreira-register-paywall--titulo');
    let barreiraTextoLogin = document.querySelector('.barreira-register-paywall--login');
    let barreiraBtnCadastre = document.querySelector('.barreira-register-paywall--cadastre');

    // blocos editaveis
    let img1m = document.querySelector('.img1m');
    let img1d = document.querySelector('.img1d');
    let img1l = document.querySelector('.img1l');
    let img2m = document.querySelector('.img2m');
    let img2d = document.querySelector('.img2d');
    let img2l = document.querySelector('.img2l');
    let img3m = document.querySelector('.img3m');
    let img3d = document.querySelector('.img3d');
    let img3l = document.querySelector('.img3l');


    if (typeof barreiraOftprincipalContent != 'undefined' && barreiraOftprincipalContent != null && barreiraOftprincipalContent != '') {
        barreiraOftprincipal.innerHTML = barreiraOftprincipalContent;
    }

    if (typeof barreiraOftsecundariaContent != 'undefined' && barreiraOftsecundariaContent != null && barreiraOftsecundariaContent != '') {
        barreiraOftsecundaria.innerHTML = barreiraOftsecundariaContent;
    }

    if (typeof barreiraTituloContent != 'undefined' && barreiraTituloContent != null && barreiraTituloContent != '') {
        barreiraTitulo.innerHTML = barreiraTituloContent;
    }

    if (typeof barreiraTextoLoginContent != 'undefined' && barreiraTextoLoginContent != null && barreiraTextoLoginContent != '') {
        barreiraTextoLogin.innerHTML = barreiraTextoLoginContent;
    }

    if (typeof barreiraTextoLoginContentHide != 'undefined' && barreiraTextoLoginContentHide != null && barreiraTextoLoginContentHide != '') {
        barreiraTextoLogin.innerHTML = " ";
    }

    if(typeof barreiraBtnCadastreHide != 'undefined' && barreiraBtnCadastreHide === true) {
        barreiraBtnCadastre.innerHTML = '';
    }

    if (typeof img1mL != 'undefined' && img1mL != null && img1mL != '' && img1dL != 'undefined' && img1dL != null && img1dL != '' && img1lL != 'undefined' && img1lL != null && img1lL != '') {
        img1m.src = img1mL;
        img1d.src = img1dL;
        img1l.href = img1lL;
    }

    if (typeof img2mL != 'undefined' && img2mL != null && img2mL != '' && img2dL != 'undefined' && img2dL != null && img2dL != '' && img2lL != 'undefined' && img2lL != null && img2lL != '') {
        img2m.src = img2mL;
        img2d.src = img2dL;
        img2l.href = img2lL;
    }

    if (typeof img3mL != 'undefined' && img3mL != null && img3mL != '' && img3dL != 'undefined' && img3dL != null && img3dL != '' && img3lL != 'undefined' && img3lL != null && img3lL != '') {
        img3m.src = img3mL;
        img3d.src = img3dL;
        img3l.href = img3lL;
    }


    if (larguraTela > 820 && alturaTela > 350) {
        barreiraContainer.style.marginTop = metadeTela + 'px';
    }

    setTimeout(function() {
        barreiraContainer.style.opacity = 1;
        hidePaywall();
    }, 1000);

    // GA

    window['dataLayer'] = window['dataLayer'] || [];

    function disparaEvento(categoria, acao, rotulo, elemento, event, notBlank, resetUtp) {
        event.preventDefault(event);
        if(resetUtp) {
            Piano.cookies.set(Piano.variaveis.constante.cookie.UTP, "", -1);
        }
        dataLayer.push({ 'event': 'EventoGA', 'eventoGACategoria': categoria, 'eventoGAAcao': acao, 'eventoGARotulo': rotulo, 'eventoGAValor': 0, 'eventoGAInteracao': false });
        setTimeout(function() {
            notBlank == true ? window.location.href = elemento : window.open(elemento);
        }, 300);
    }

    

    function intervencaoSwg (event) {
        event.preventDefault(event);
        validacaoUrlRetorno = true;
        swg.subscribe('br.com.infoglobo.oglobo.site.google');
    }
    
    if(img1lL == 'ofertaSwg') {
        img1l.setAttribute("onclick", "intervencaoSwg(event)");
    }

    if(img2lL == 'ofertaSwg') {
        img2l.setAttribute("onclick", "intervencaoSwg(event)");
    }

    if(img3lL == 'ofertaSwg') {
        img3l.setAttribute("onclick", "intervencaoSwg(event)");
    }

} else {
    console.log("Tag de paywall nao existe");
}
