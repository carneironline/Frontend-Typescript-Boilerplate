import PaywallGAModule from '../PaywallCpnt/ga'

class BarberBarrier {
    constructor(superClass) {
        this.super = superClass
        this.classMain = 'barber-barrier-cpnt'
        this.styleClassMain = `.${this.classMain}`
        this.GA = new PaywallGAModule()

        this.init()
    }

    init() {
        if (!window.glbPaywall) return null

        this.addStyle()
        this.add()
        this.GA.paywallLoad()
    }

    add() {
        const bodyEl = document.body
        bodyEl.style.overflow = 'hidden'
        bodyEl.insertAdjacentHTML('beforeend', this.render())
    }

    addStyle() {
        const elBody = document.body
        elBody.insertAdjacentHTML('beforeend', this.style())
    }

    render() {
        return `
            <div class="${this.classMain}"
        >
            <div class="box-paywall-image">
                <a class="box-paywall-login-url" href="${this.super.loginUrl}">
                    <img class="box-paywall-top" src="${window.glbPaywall.barberBarrier.imageTop}" alt="">
                </a>
                <a class="box-paywall-promo-url" href="">
                    <img class="box-paywall-bottom" src="${window.glbPaywall.barberBarrier.imageBottom}" alt="">
                </a>
            </div>
            <div class='back-drop'></div>
        </div>
        `
    }

    style() {
        return `
        <style>
        ${this.styleClassMain} a, picture { 
            display: flex;
        }

        
        ${this.styleClassMain} * {-webkit-transition: all .3s ease-in-out;transition: all .3s ease-in-out; }

        ${this.styleClassMain} .back-drop {
            background: rgba(0, 0, 0, 0.7); 
            position: fixed; 
            z-index: 99999998; 
            width: 100%; 
            height: 100%; 
            top: 0px; 
            left: 0px; 
        }

        ${this.styleClassMain} .box-paywall-image {
            display: flex;
            flex-direction: column;
            justify-content: center; 
            align-content: center;
            width: 100%; 
            max-width: 300px; 
            margin: 0 auto; 
            position: fixed; 
            z-index: 99999999; 
            background: transparent; 
            box-sizing: border-box; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            border-radius: 4px;
        }

        ${this.styleClassMain} .box-paywall-login-url {
        display: flex;
        flex-direction: column;
        }

        ${this.styleClassMain} .box-paywall-login-url .box-paywall-top { 
        max-width: 300px;
        }

        ${this.styleClassMain} .box-paywall-promo-url .box-paywall-bottom { 
        max-width: 300px;
        }

        ${this.styleClassMain} .box-paywall-top, 
        ${this.styleClassMain} .box-paywall-bottom {
        display: block;
        border: none;
        }
        </style>
        `
    }
}

export default BarberBarrier