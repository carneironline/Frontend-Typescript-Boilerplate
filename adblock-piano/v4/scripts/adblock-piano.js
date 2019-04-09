(function() {
    const bodyEl = document.querySelector('body');

    let templateSettings = {
        template: 'default',
        assetsPath: '',
        description: 'Para ter acesso ilimitado ao nosso conteúdo, basta assinar um dos nossos planos. Aproveite para conhecer todos os benefícios da assinatura O Globo.',
        textSignup: 'Quero assinar',
        urlSignup: 'https://login.globo.com/cadastro/4728?tam=widget&url=https%3A%2F%2Fintervencao.globo.com%2Fintervencoes%2Fshow.do%3Fpopin%3Dtrue%26servicoId%3D4728%26urlIntervencao%3Dhttps%3A%2F%2Fs.glbimg.com%2Fgl%2Fba%2Fbarra-globocom.callback.html%2523https%253A%252F%252Foglobo.globo.com%252F',
        urlSignin: 'https://login.globo.com/login/464/connect-confirm?url=https%3A%2F%2Fid.globo.com%2Fauth%2Frealms%2Fglobo.com%2Flogin-actions%2Fauthenticate%3Fsession_code%3DiHncYB5Xqp4N79ADb5ILuFVjxtTG6U_9R7eOFK1QzNM%26execution%3D1c219005-5ee2-474e-841b-8439de30d406%26client_id%3Dminha-conta-prod%26tab_id%3DUTUJAN7OMyA&error=',
        footerTitle: 'Ainda não está pronto para assinar?',
        footerDescription: 'Nos adicione em sua lista de permissões ou desabilite seu bloqueador de pop-ups.',
        footerTextBtn: 'Saiba mais'
    };
    
    function setTemplateSettings() {
        if(window.glbAdblock) {
            templateSettings = Object.assign({}, templateSettings, window.glbAdblock);
            window.glbAdblock = templateSettings;
        } 
    }

    function createWall() {  
        const adblockEl = document.createElement('div');
        adblockEl.id = 'detecta-adblock';
        adblockEl.innerHTML = template();
        bodyEl.appendChild(adblockEl);
    }

    function template() {
        switch(templateSettings.template) {
            default: return templateDefault();
        }
    }

    function activeWallRequirements() {
        const showRequirements = document.getElementById('showRequirements');

        if (showRequirements) {
            let requirementEl = document.querySelector('.adblock-cpt__requisitos');
            let btnVoltar = document.querySelector('.adblock-cpt__requisitos-voltar');

            bodyEl.setAttribute('style','overflow: hidden;');

            showRequirements.addEventListener('click', function() {
                requirementEl.classList.add('is-show')
            });

            btnVoltar.addEventListener('click', function() {
                requirementEl.classList.remove('is-show')
            });
        }
    }

    function templateDefault() {
        return `
                <div class='adblock-cpt'>
                    <div class="adblock-cpt__header">
                            <div class="adblock-cpt__col1">
                                <img src="${templateSettings.assetsPath}images/placas.svg" />
                            </div>
                            <div class="adblock-cpt__col2">
                                <div class="adblock-cpt__title">
                                    Ops...<br />
                                    Notamos que você utiliza um bloqueador de anúncios.
                                </div>
                                <div class="adblock-cpt__text">
                                    ${templateSettings.description}
                                </div>
                                <div class="adblock-cpt__signup"><a href="${templateSettings.urlSignup}" class="adblock-btn">${templateSettings.textSignup}</a></div>
                                <div class="adblock-cpt__signin">Já possui assinatura?  <a href="${templateSettings.urlSignin}">Faça o login</a></div>
                            </div>
                    </div>

                    <div class="adblock-cpt__footer">
                        <div class="adblock-cpt__footer-info">
                            <div>${templateSettings.footerTitle}</div>
                            <div>${templateSettings.footerDescription}</div>
                        </div>

                        <div class="adblock-cpt__footer-btn">
                            <a id="showRequirements" href="javascript:;" >${templateSettings.footerTextBtn}</a>
                        </div>
                    </div>

                    <div class='adblock-cpt__requisitos'>
                        <h2>Adicione O Globo nas suas permissões</h2>

                        <h4>Adblock Plus</h4>
                        <ol>
                            <li>Clique no ícone do Adblock Plus, localizado à direita da barra de endereço do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique em “Enabled on this site” para desativar o bloqueio da publicidade</li>
                            <li>Após o clique, o texto será substituído por “Disabled on this site”</li>
                            <li>Recarregue a página que você estava tentando acessar</li>
                        </ol>
                        <h4>AdBlock Pro</h4>
                        <ol>
                            <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique no primeiro ícone (ligar) para para desativar o bloqueio da publicidade</li>
                            <li>Recarregue a página que você estava tentando acessar</li>
                        </ol>
                        <h4>AdBlock</h4>
                        <ol>
                            <li>Clique no ícone do AdBlock Pro, localizado à direita da barra de endereços do seu navegador</li>
                            <li>Um menu drop-down aparecerá na tela</li>
                            <li>Clique em “Don’t run on pages on this domain” para desativar o bloqueio da publicidade</li>
                            <li>Uma nova janela abrirá e você precisará clicar no botão “Exclude”</li>
                            <li>Após o clique, a página será recarregada</li>
                        </ol>

                        <button class="adblock-cpt__requisitos-voltar" type="button">Voltar</button>
                    </div>
                </div>
                <div class='backdrop-adblock'> </div>
            `;
    }

    function init() {
        setTemplateSettings();
        createWall();
        activeWallRequirements();
    }

    init();

})();
