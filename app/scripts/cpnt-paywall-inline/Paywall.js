import PianoModule from '../Piano';

export default class PaywallCptInline  {
	constructor() { 
		this.Piano = new PianoModule();

		this.domain = window.tinyCpt.isProduction ? 'https://login.globo.com/' : 'https://login.qa.globoi.com/';	
		this.paywallId = 'paywall-inline'
		this.createTemplate()
		this.activeEvents()
		
		window.PaywallCptInline = this;

		window.tinyCpt.Paywall = {
			domain: this.domain
		}
	}


    activeEvents() {
		this.classname = document.querySelectorAll(".btn-read-more");
		this.classname.forEach(element => {
			element.addEventListener('click', () => {
			this.createTemplate(element)
			})
		})
	}

  	createTemplate(element) {
		if (element) {
			if (element.firstChild.nodeValue === 'Fechar') {
				this.elBody = element;
				this.elBody.insertAdjacentHTML('beforebegin', this.cssMinified); 
				this.elBody.insertAdjacentHTML('beforebegin', this.template); 
				const removedElement = Array.from(element.parentNode.parentNode.childNodes).find((element) => element.className === 'other-content')
				removedElement.parentNode.removeChild(removedElement)
			} else {
				const paywallInline = document.querySelector(`#${this.paywallId}`)
				paywallInline.parentNode.removeChild(paywallInline)
			}
		}
  	}

  get template() { 
	const template = `
		<link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway&display=swap" rel="stylesheet">
		<div class="paywall-cpt-inline" id=${this.paywallId}> 
			<h1 class ="paywall-cpt-inline-title">Para continuar sua leitura, é preciso se cadastrar. <br> É rápido e grátis!</h1>
			<button class="paywall-cpt-inline-button">
				<span class="paywall-cpt-inline-span">Cadastre-se gratuitamente agora</span>
			</button> 
			<p class="paywall-cpt-inline-p">Já possui cadastro? <a href="https://login.globo.com/" class="paywall-cpt-inline-a">Faça login</a></p>
			<div class="paywall-cpt-inline-offer">
				<a href="https://google.com?l1">
					<picture>
						<source srcset="https://via.placeholder.com/300x150" media="(max-width: 1023px)">
						<source srcset="https://via.placeholder.com/804x128" media="(min-width: 1024px)">
						<img src="https://via.placeholder.com/300x150" />
					</picture>
				</a>
			</div>
		</div>
	`;

	return template;
  }

  get cssMinified() {
	  return `<style>.paywall-cpt-inline{margin: 0 auto 40px;padding:20px;border-radius: 4px;border: solid 1px #dbdde1;background-color: #f2f2f5;}.paywall-cpt-inline-title{margin-left:auto;margin-right:auto; margin-bottom:30px;display:block;font-family:Raleway;font-size:20px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#325e94}.paywall-cpt-inline-button{margin-left:auto;margin-right:auto;margin-bottom:30px;display:block;width:356px;height:48px;background-color:#f59c00;border-radius:4px;border:solid 3px #f59c00}.paywall-cpt-inline-span{font-family:Open Sans;font-size:14px;font-weight:600;font-stretch:normal;font-style:normal;line-height:1.38;letter-spacing:normal;text-align:center;color:#fff}.paywall-cpt-inline-p{margin-left:auto;margin-right:auto;margin-botton:30px;display:block;font-family:Raleway;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.14;letter-spacing:normal;text-align:center;color:#707070}.paywall-cpt-inline-a{font-weight:700;color:#325e94}.paywall-cpt-inline-offer{margin-left:auto;margin-right:auto;background-color:#fff}
	  </style>`
  }
}