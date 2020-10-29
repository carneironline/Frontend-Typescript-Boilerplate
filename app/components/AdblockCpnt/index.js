import GA from '../../scripts/GA'

class AdblockCpnt {
    constructor() {
        this.GA = new GA() 

        const path = window.tinyCpt.isDev ? `${window.tinyCpt.assetsPath}/app` : `${window.tinyCpt.assetsPath}/paywall`

        this.elBody = document.querySelector('body')
     
        this.templateSettings = {
            template: 'default',
            assetsPath: `${path}/components/AdblockCpnt/`,
            display: true,
            description:
                'Para ter acesso ilimitado ao nosso conteúdo, basta assinar um dos nossos planos. Aproveite para conhecer todos os benefícios da assinatura O Globo.',
            textSignup: 'Quero assinar',
            urlSignup:
                'https://login.qa.globoi.com/cadastro/4975?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fm.globostg.globoi.com%2F',
            urlSignin:
                'https://login.qa.globoi.com/login/4975?url=https%3A%2F%2Fs3.glbimg.com%2Fv1%2FAUTH_65d1930a0bda476ba8d3c25c5371ec3f%2Fpiano%2Fhelper%2Fredirect.html%23https%3A%2F%2Fm.globostg.globoi.com%2F',
            footerTitle: 'Ainda não está pronto para assinar?',
            footerDescription:
                'Nos adicione em sua lista de permissões ou desabilite seu bloqueador de pop-ups.',
            footerTextBtn: 'Saiba mais',
        }

        this.init()
        this.showConsole()
    }

    init() {
        this.setTemplateSettings()

        if (this.templateSettings.display && this.templateSettings.display !== false) {
            setTimeout(() => {
                this.addStyle()
                this.createWall()
                this.activeWallRequirements()
                this.ga()
            }, 500)
        }
    }

    showConsole() {
        console.groupCollapsed('AdblockCpnt Component')

        console.group('Constructor')
        console.log(this)
        console.groupEnd()

        console.group('templateSettings')
        console.table(this.templateSettings)
        console.groupEnd()

        console.groupEnd()
	}

    setTemplateSettings() {
        if (window.glbAdblock) {
            this.templateSettings = { ...this.templateSettings, ...window.glbAdblock }
            window.glbAdblock = this.templateSettings
        }
    }

    createWall() {
        const adblockEl = document.createElement('div')
        adblockEl.id = 'detecta-adblock'
        adblockEl.innerHTML = this.template()
        this.elBody.appendChild(adblockEl)
    }

    template() {
        switch (this.templateSettings.template) {
            default:
                return this.templateDefault()
        }
    }

    activeWallRequirements() {
        const showRequirements = document.getElementById('showRequirements')

        if (showRequirements) {
            const requirementEl = document.querySelector( '.adblock-cpt__requisitos')
            const btnVoltar = document.querySelector('.adblock-cpt__requisitos-voltar')

            this.elBody.setAttribute('style', 'overflow: hidden;')

            showRequirements.addEventListener('click', () => {
                requirementEl.classList.add('is-show')
            })

            btnVoltar.addEventListener('click', () => {
                requirementEl.classList.remove('is-show')
            })
        }
    }

    ga() {
        const elements = document.querySelectorAll('.adblock-cpt [data-ga]')

        this.setGAOnLoad()

        elements.forEach((el) => {
            el.addEventListener('click', this.setGAOnCLick.bind(this), false)
        })
    }

    setGAOnLoad() {
        const calledBy = 'AdblockCpnt'
		const action = window.glbAdblock?.ga?.action || 'Adblock ativado';
		const label = window.glbAdblock?.ga?.label;
		
		if(label) {
			this.GA.setEvents( 
				calledBy,
				action,
				label,
			)
		}
    }

    setGAOnCLick(evt) {
        evt.preventDefault()

        if (!evt.target.dataset.ga) return

        const calledBy = 'AdblockCpnt'
		const action = window.glbAdblock?.ga?.action || 'Adblock ativado';
        const label = evt.target.dataset.ga
		
		if(label) {
			this.GA.setEvents( 
				calledBy,
				action,
				label,
			)
		}

        if (evt.target.href) {
            setTimeout(() => {
                location.href = evt.target.href
            }, 500)
        }
    }

    templateDefault() {
        return `
                <div class='adblock-cpt'>
                    <div class="adblock-cpt__header">
                            <div class="adblock-cpt__col1">
                                <img src="${this.templateSettings.assetsPath}assets/placas.svg" />
                            </div>
                            <div class="adblock-cpt__col2">
                                <div class="adblock-cpt__title">
                                    Ops...<br />
                                    Notamos que você utiliza um bloqueador de anúncios.
                                </div>
                                <div class="adblock-cpt__text">
                                    ${this.templateSettings.description}
                                </div>
                                <div class="adblock-cpt__signup"><a href="${this.templateSettings.urlSignup}" class="adblock-btn" data-ga="Clique em Link - Quero assinar">${this.templateSettings.textSignup}</a></div>
                                <div class="adblock-cpt__signin">Já possui assinatura?  <a href="${this.templateSettings.urlSignin}" data-ga="Clique em Link - Faça login">Faça o login</a></div>
                            </div>
                    </div>

                    <div class="adblock-cpt__footer">
                        <div class="adblock-cpt__footer-info">
                            <div>${this.templateSettings.footerTitle}</div>
                            <div>${this.templateSettings.footerDescription}</div>
                        </div>

                        <div class="adblock-cpt__footer-btn">
                            <a id="showRequirements" href="javascript:;" data-ga="Clique em Link - Saiba mais">${this.templateSettings.footerTextBtn}</a>
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
            `
    }

    addStyle() {
        this.elBody.insertAdjacentHTML('beforeend', this.style())
    }
    
    style() {
        return `
            <style>
            @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

            #detecta-adblock, #detecta-adblock * {
                box-sizing: border-box;
            
            }
            
            #detecta-adblock {
                width: 100%;
                position: fixed;
                height: 100vh;
                z-index: 99999;
                top: 0;
                padding: 20px;
                display: flex;  
                align-items: center;
                justify-content: center;
            }
            @media only screen and (max-width: 767px) {
                #detecta-adblock {
                    padding: 0;
                }
            }
            
            .adblock-cpt, .adblock-cpt * {
                box-sizing: border-box;
            }
            
            .adblock-cpt {
                max-width: 960px;
                border-radius: 8px;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
                box-sizing: border-box;
                font-family: 'Raleway';
                z-index: 1;
                background: white;
                overflow: hidden;
                background: #000;
                position: relative;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt {
                    width: 100%;
                    min-width: unset;  
                    height: 90vh;
                    display: flex;
                    flex-direction: column;
                    flex-flow: wrap;
                    top: calc(50% + 28px);
                    overflow: unset;
                    position: unset;
                } 
            }
            
            .adblock-cpt a {
                color: #41BFE2;
            }
            
            .adblock-cpt__header {
                padding: 40px 0;
                color: #fff;
                display: flex;
                background-image: radial-gradient(26% 100%, #070F57 41%, #010B36 71%, #010022 96%);
                font-size: 14px;
                color: #FFFFFF;
                letter-spacing: 0.04px;
                line-height: 20px;
                position: relative;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__header {
                    height: auto;
                    text-align: center;
                    padding: 0;
                } 
            }
            
            
            .adblock-cpt__col1 {
                width: 50%;
                display: flex;
                justify-content: center;
                padding: 0 40px;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__col1 {
                    display: none;
                } 
            }
            
            .adblock-cpt__col1 img {
                display: block;
                max-width: 100%;
                height: auto;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__col1 img {
                    width: 130px;
                } 
            }
            
            .adblock-cpt__col2 {
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-right: 40px;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__col2 {
                    width: 100%;
                    padding: 20px;
                } 
            }
            
            
            .adblock-cpt__col2 > div {
                margin-bottom: 15px;
            }
            
            .adblock-cpt__title {
                font-weight: 700;
                font-size: 30px;
                color: #FFFFFF;
                letter-spacing: 0.22px;
                line-height: 32px;
            }
            
            .adblock-cpt__text {
                font-size: 16px;
                letter-spacing: 0.05px;
            }
            
            .adblock-cpt__footer {
                background: #fff;
                display: flex;
                align-items: center;
                padding: 20px 40px;
                width: 100%;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__footer {
                    flex-direction: column;
                    text-align: center;
                    justify-content: center;
                    padding: 20px;
                } 
            }
            
            .adblock-cpt__footer-info {
                font-size: 17px;
                color: #545454;
                letter-spacing: 0.05px;
                line-height: 22px;
                padding-right: 60px;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__footer-info {
                    padding-right: 0;
                } 
            }
            
            .adblock-cpt__footer-info :nth-child(1) {
                font-size: 17px;
                font-weight: 700;
            }
            
            .adblock-cpt__footer-info :nth-child(2) {
                font-size: 15px;
            }
            
            .adblock-cpt__footer-btn {
                font-weight: 700;
                font-size: 18px;
                letter-spacing: 0.06px;
                min-width: 110px;
                text-align: right;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__footer-btn {
                    margin-top: 10px;
                }
            }
            
            .adblock-cpt__footer-btn a {
                text-decoration: none;
            }
            
            
            .adblock-btn {
                display: inline-block;
                background: #41BFE2;
                border-radius: 3px;
                font-weight: 700;
                font-size: 19px;
                color: #FFFFFF !important;
                text-align: center;
                text-decoration: none;
                padding: 10px 20px;
            }
            
            .adblock-cpt__requisitos {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background: #fff;
                z-index: 1;
                padding: 20px;
                opacity: 0;
                visibility: hidden;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__requisitos {
                    overflow-y: scroll;
                }
            }
            
            .adblock-cpt__requisitos.is-show {
                opacity: 1;
                visibility: visible;
                animation: opacityUp .2s linear 0s;
                overflow-y: scroll;
            }
            
            @keyframes opacityUp {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1; 
                }
            }
            
            .adblock-cpt__requisitos h2, .adblock-cpt__requisitos h4, .adblock-cpt__requisitos ol {
                margin: 0;
            }
            
            .adblock-cpt__requisitos h2 {
                border-bottom: solid 1px rgba(65, 191, 226, .5);
                padding-bottom: 10px;
            }
            
            .adblock-cpt__requisitos h4 {
                margin: 20px 0 5px;
            }
            
            .adblock-cpt__requisitos h4:first-of-type {
                margin-top: 10px;
            }
            
            .adblock-cpt__requisitos ol li {
                margin-bottom: 5px;
            }
            
            .adblock-cpt__requisitos-voltar {
                padding: 0;
                border: none;
                background: none;
                position: absolute;
                top: 20px;
                right: 20px;
            
                background: #41BFE2;
                border-radius: 3px;
                font-weight: 700;
                font-size: 19px;
                color: #FFFFFF;
                text-align: center;
                text-decoration: none;
                padding: 5px 10px;
                cursor: pointer;
            }
            @media only screen and (max-width: 767px) {
                .adblock-cpt__requisitos-voltar {
                    position: relative;
                    top: 0;
                    left: 0;
                    margin-top: 20px;
                }
            }
            
            #detecta-adblock .backdrop-adblock {
                background: rgba(0, 0, 0, 0.8);
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
            }
            </style>
        `
    }
}


export default AdblockCpnt
