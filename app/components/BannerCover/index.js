class BannerCover {

	constructor() {		 
		this.classMain = 'banner-cover-cpnt'
        this.styleClassMain = `.${this.classMain}`
		this.elBody = document.body
        this.elCpnt = null
		this.elTarget = document.querySelector('.banner-cover-cpnt-aim, .block--advertising-header')
		
		if(!this.elTarget) return null

		this.init()
		this.showConsole()
	}

	init() {
		window.glbBannerCover = window.glbBannerCover ? { ...this.settings(), ...window.glbBannerCover } : this.settings()

		this.addStyle()
		this.add()
		this.show()
		this.click()
		this.setGa()
	}

	showConsole() {
        console.groupCollapsed('BannerCover Component')

        console.group('Constructor')
        console.log(this)
        console.groupEnd()

        console.group('glbBannerCover')
        console.table(window.glbBannerCover)
        console.groupEnd()

        console.groupEnd()
	}

	setGa() {
		const calledBy = 'BannerCover'
		const action = window.glbBannerCover?.ga?.action || 'Mobiliario Chamada de Capa';
		const label = window.glbBannerCover?.ga?.label;
		
		if(label) {
			window.tinyCpnt.GA.setEvents( 
				calledBy,
				action,
				label,
			)
		}
	}
	
	settings() {
		return {
			image: 'https://via.placeholder.com/296x157',
			url: '//google.com',
			text: 'Test', // Test
		}
	}

	add() { 
		this.elTarget.insertAdjacentHTML('afterend', this.render())
		this.elCpnt = document.querySelector(`${this.styleClassMain}`)
	}

	show() {
		setTimeout(() => {
			this.elCpnt.classList.remove(`${this.classMain}--hide`)
		}, 500)
	}
	
	addStyle() {
        this.elBody.insertAdjacentHTML('beforeend', this.style())
	}
	
	click() {
		const element = document.querySelector(`${this.styleClassMain}-target`)	
		if(!element) return null

		element.addEventListener('click', (evt) => {
			evt.preventDefault()
			
			setTimeout(() => {
				window.open(element.href)
			}, 500)
		})
	}

	render() { 
        return `
        <div class="${this.classMain} ${this.classMain}--hide">            
            <a class="${this.classMain}-target" href="${window.glbBannerCover.url}" target="_blank">    
                <div class="${this.classMain}-image" id="linkImage">
                    <img class="${this.classMain}-image-img" alt="" src="${window.glbBannerCover.image}"/>
                </div>
                <div class="${this.classMain}-text">
                    <div class="main-title">${window.glbBannerCover.text}</div>
                </div>
            </a>       
        </div>
		`
	}

	style() {
		return `
		<style>
			 ${this.styleClassMain} {
				cursor: pointer; 
				opacity: 1;
                transition: opacity .4s;
				
				margin: 0 auto 0px;
				max-width: 1260px;
				padding: 0px 0px 40px;
			}
			
			@media (max-width: 1023px) {
				${this.styleClassMain} {
					padding: 40px 0px 40px;
				}
			}

			${this.styleClassMain}--hide {
				opacity: 0; 
			}
			
			.main-content ${this.styleClassMain} {
				padding: 80px 0 0px;
			}
			
			${this.styleClassMain}-target {
				text-decoration: none;
				color: currentColor;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #efeff0;
				border-top: #ddd 1px solid;
				border-bottom: #ddd 1px solid;
			}
			
			${this.styleClassMain}-image {
				position: relative;
				width: calc(21%);
				text-align: right;
			}
			@media (max-width: 1023px){
				${this.styleClassMain}-image {
					width: unset;
				}
			
			}
			
			${this.styleClassMain}-image-img {
				position: absolute;
				right: 0;
				top: -74px;
				max-width: 80%;
			}
			@media (max-width: 1023px) {
				${this.styleClassMain}-image-img {
					position: unset;
					max-width: 87%;
				}
			}
			
			${this.styleClassMain}-text {
				font-family: 'Source Sans Pro', sans-serif;
				width: 60%;
				padding: 15px 10% 15px 20px;
				color: darkslategray;
			}
			
			@media (max-width: 1023px) {
				${this.styleClassMain}-text {
					font-size: 86%;
				}
			}
		</style>
		`
	}
}

export default BannerCover