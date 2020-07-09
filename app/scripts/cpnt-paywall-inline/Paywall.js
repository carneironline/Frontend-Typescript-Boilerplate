import PianoModule from '../Piano';

export default class PaywallCptInline  {
	constructor() { 
		this.Piano = new PianoModule();

		this.domain = window.tinyCpt.isProduction ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/';	
		this.paywallId = 'paywall-inline'

		this.setTemplateSettings(() => {
			this.activeEvents()
		});
	}

	setTemplateSettings(callback) {
		let templateSettings = {
			title: 'Para continuar sua leitura, é preciso se cadastrar.',
			subtitle: 'É rápido e grátis!',
			buttonText: 'Cadastre-se gratuitamente agora',
			buttonLink: 'https://google.com?l1',
			loginPreText: 'Já possui cadastro? ',
			loginText: 'Faça login',
			loginLink: window.tinyCpt.isProduction ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/', 
			offerLink: "https://google.com?l1",
			imageMobi: "https://via.placeholder.com/300x150",
			imageDesk: "https://via.placeholder.com/804x128",
			imageLink: "https://via.placeholder.com/300x150",
			cssLoaded: false
		};

		window.glbPaywallInline = (window.glbPaywallInline) ?  Object.assign({}, templateSettings, window.glbPaywallInline) : templateSettings; 

		callback();
	}

    activeEvents() {
		const postElement = window.analiticoPost;

		if(!postElement) return null

		this.createTemplate(postElement)
	}

  	createTemplate(postElement) {
		const element = postElement.querySelector(".btn-read-more");
		const mainElement = postElement.querySelector('.main-content')
		const footerElement = postElement.querySelector('.post-footer')
		const opacityElement = `<div class="paywall-cpt-inline-opacity"></div>`

		if (element) {
			if(!window.glbPaywallInline.cssLoaded) {
				document.body.insertAdjacentHTML('beforebegin', this.cssMinified); 
				window.glbPaywallInline.cssLoaded = true
			}

			footerElement.setAttribute('style', `
			padding-top: 0px; position:relative`);

			mainElement.setAttribute('style', `
			position: relative;
			height: 120px;
			overflow: hidden;`);

			mainElement.insertAdjacentHTML('beforeend', opacityElement); 
			// postElement.classList.remove('hidden-content')
			
			
			element.insertAdjacentHTML('beforebegin', this.template); 
			const removedElement = Array.from(element.parentNode.parentNode.childNodes).find((element) => element.className === 'other-content')
			
			if(removedElement)
				removedElement.parentNode.removeChild(removedElement)

			element.remove()
		}
	  }
	  
	getUrlLoginRegister(type = '') {
		const uri = location.href;
		const serviceId = window.tinyCpt.Piano.variaveis.getServicoId() || null;
		let str = '';
		let urlReturn = '';
	
		if(!this.debug && this.Piano.isDefined) {
			urlReturn = encodeURIComponent(uri);
	
			if(type === 'button') {
				str = `${this.domain}cadastro/${serviceId}?url=${urlReturn}`;
			} else {
				str = `${this.domain}login/${serviceId}?url=${urlReturn}`;
			}
		}
	
		return str;
	}

  get templateVars() {
	return window.glbPaywallInline;
  }

  get template() { 
	const template = `
		<link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap" rel="stylesheet">
		<div class="paywall-cpt-inline" id=${this.paywallId}> 
			<h1 class ="paywall-cpt-inline-title"><span class=paywall-cpt-inline-title-first_line>${this.templateVars.title}</span><br><span class=paywall-cpt-inline-title-second_line>${this.templateVars.subtitle}</span></h1>

			<a href="${this.templateVars.buttonLink}">
				<button class="paywall-cpt-inline-button">
					<span class="paywall-cpt-inline-span">${this.templateVars.buttonText}</span>
				</button> 
			</a>
			<p class="paywall-cpt-inline-p">${this.templateVars.loginPreText}<a href="${this.getUrlLoginRegister()}" class="paywall-cpt-inline-a">${this.templateVars.loginText}</a></p>
			<div class="paywall-cpt-inline-offer">
			<a href=${this.templateVars.offerLink}>
				<picture>
					<source srcset="${this.templateVars.imageMobi}" media="(max-width: 375px)">
					<source srcset="${this.templateVars.imageDesk}" media="(min-width: 374px)">
					<img class="paywall-cpt-inline-img" src="${this.templateVars.imageLink}" />
				</picture>
			</a>
		</div>
		</div>
	`;

	return template;
  }

  get cssMinified() {
	  return `
	  <style>
	  .paywall-cpt-inline{margin: 0 auto 40px;padding:20px;border-radius: 4px;border: solid 1px #dbdde1;background-color: #f2f2f5;}.paywall-cpt-inline-opacity{background: linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 40%,#fff 100%);position: absolute;bottom: 0;width: 100%;height: 58px;overflow: hidden;}.paywall-cpt-inline-title{margin-left:auto;margin-right:auto; margin-bottom:30px;display:block;font-family:Raleway;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#325e94}
	  .paywall-cpt-inline-button{cursor:pointer;margin-left:auto;margin-right:auto;margin-bottom:30px;display:block;width:256px;height:48px;background-color:#f59c00;border-radius:4px;border:solid 3px #f59c00;}
	  @media screen and (min-width: 424px) {
		.paywall-cpt-inline-button { width: 356px; }
	 }  
	 .paywall-cpt-inline-img {margin: auto;width: 80em;}.paywall-cpt-inline-span {font-family:Open Sans;font-size:14px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:#fff;}.paywall-cpt-inline-p{margin-left:auto;margin-right:auto;margin-botton:30px;display:block;font-family:Raleway;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.14;letter-spacing:normal;text-align:center;color:#707070;}.paywall-cpt-inline-a{font-weight:700;color:#325e94;}.paywall-cpt-inline-offer{margin-left:auto;margin-right:auto;background-color:#fff;} 
	  </style>`
  }
}