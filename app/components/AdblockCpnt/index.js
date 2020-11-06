import Templates from './templates'
 
class AdblockCpnt {
    init() {

        const path = window.tinyCpnt.isDev ? `${window.tinyCpnt.assetsPath}/app` : `${window.tinyCpnt.assetsPath}/paywall/app`

        this.elBody = document.querySelector('body')
        this.version = 'v2'
     
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

        this.start()
        this.showConsole()
    }

    start() {
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
    
    checkPseudoVars() {
        const checkLinkProps = ['urlSignin', 'urlSignup']
        const pseudoVars = ['@loginUrl', '@registerUrl']

        checkLinkProps.forEach(prop => {
            pseudoVars.forEach(pseudoVar => {
                if(window.glbAdblock[prop] === pseudoVar)
                    window.glbAdblock[prop] = pseudoVar.includes('login') ? window.tinyCpnt.Product.getLoginUrl() : window.tinyCpnt.Product.getRegisterUrl()
            })
        })
    }

    setTemplateSettings() {
        if (window.glbAdblock) {
            this.checkPseudoVars()
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
			window.tinyCpnt.GA.setEvents( 
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
			window.tinyCpnt.GA.setEvents( 
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
        return Templates.get(this.version).html(this.templateSettings)
    }

    addStyle() {
        this.elBody.insertAdjacentHTML('beforeend', this.style())
    }
    
    style() {
        return Templates.get(this.version).style()
    }

    checksAdblockIsEnabled() {
        document.cookie = '__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        
        const setNptTechAdblockerCookie = function (adblocker) {
            const d = new Date()
            d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000)
            document.cookie = `__adblocker=${adblocker ? 'true' : 'false'}; expires=${d.toUTCString()}; path=/`
        }

        const script = document.createElement('script')
        script.setAttribute('async', true)
        script.setAttribute('src', 'https://www.npttech.com/advertising.js')
        script.setAttribute('onerror', 'setNptTechAdblockerCookie(true);')
        
        document.getElementsByTagName('head')[0].appendChild(script)
    }
}


export default AdblockCpnt
