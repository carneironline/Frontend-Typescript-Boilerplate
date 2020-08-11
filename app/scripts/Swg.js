import Helpers from './Helpers'

export default class Swg {
    constructor() {
        window.SWG = window.SWG || [] // TODO: Understand why this variable exists
        window.swgEntitlements = window.swgEntitlements || null
        this.debug = Helpers.isDefined(window.tinyCpt)
            ? window.tinyCpt.debug.swg
            : false
        this.disabled = false
        this.content = null
        this.localProductPiano =
            typeof nomeProdutoPiano !== 'undefined' ? nomeProdutoPiano : null
        this.hasProductJSON = false
        this.productJSON = null
        this.elHead = document.head

        this.setGlobalSWG()
    }

    get isDefined() {
        return !!window.tinyCpt.Swg.global
    }

    setGlobalSWG() {
        if (!Helpers.isDefined(window.tinyCpt)) return

        window.tinyCpt.Swg = {
            global: typeof swg !== 'undefined' ? swg : null,
        }
    }

    setUtms() {
        const urlParams = new URLSearchParams(
            window.location.search.substring(1)
        )
        const utmsProps =
            typeof window.glbPaywall.swg !== 'undefined' &&
            typeof window.glbPaywall.swg.utms !== 'undefined'
                ? window.glbPaywall.swg.utms
                : null

        utmsProps.forEach((item) => {
            const name = item.name.toLowerCase()
            const { value } = item
            urlParams.set(`utm_${name}`, value)
        })

        if (window.tinyCpt.debug.swg) {
            console.log('log-method', 'setUtms')
            console.log('log-method-setUtms', utmsProps)
            console.log('log-method-setUtms', location)
        }

        if (this.disabled || !this.isDefined || !utmsProps) return

        window.tinyCpt.Swg.global.subscribe(
            'br.com.infoglobo.oglobo.swg.google'
        )
    }

    async getProducts() {
        const url = window.tinyCpt.isProduction
            ? 'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/prod/products.json'
            : 'https://s3.glbimg.com/v1/AUTH_7b0a6df49895459fbafe49a96fcb5bbf/swg/dev/products.json'

        return await fetch(url).then((res) => res.json())
    }

    async getProduct() {
        if (!this.localProductPiano) return

        const products = await this.getProducts()
        const product = products.filter(
            (item) => item.pianoProductName === this.localProductPiano
        )[0]
        return product || null
    }

    async removeProperties(obj) {
        const propsToRemove = ['productName', 'pianoProductName']
        const newObj = { ...obj }

        propsToRemove.forEach((element) => {
            delete newObj[element]
        })

        return newObj
    }

    async markupTemplate() {
        const productJSON =
            (await this.removeProperties(await this.getProduct())) || null
        const product = Object.keys(productJSON).length
            ? JSON.stringify(productJSON)
            : null

        if (product) {
            this.hasProductJSON = true

            if (this.debug) console.log({ 'log-SWG-Product': product })

            this.productJSON = `${product}`
        }
    }

    async setMarkup() {
        await this.markupTemplate()
        if (!this.productJSON) return

        const element = document.createElement('script')

        element.type = 'application/ld+json'
        element.innerHTML = this.productJSON
        this.elHead.insertAdjacentElement('beforeend', element)
    }

    setSwgScript() {
        const element = document.createElement('script')
        element.src = 'https://news.google.com/swg/js/v1/swg.js'
        this.elHead.insertAdjacentElement('beforeend', element)
    }

    setAldebaranScript() {
        const element = document.createElement('script')
        const urlProd =
            'https://s3.glbimg.com/v1/AUTH_c10ae819c568460bb4ec17c0a8ec5267/aldebaran/js/bundle.js'
        const urlStg =
            'https://s3.glbimg.com/v1/AUTH_addc5e8f316f48ea9181af37160b22b4/aldebaran/js/bundle.js'

        element.src = window.tinyCpt.isProduction ? urlProd : urlStg
        this.elHead.insertAdjacentElement('beforeend', element)
    }

    testSWG() {
        return new Promise((resolve, reject) => {
            let count = 0

            const interval = setInterval(() => {
                if (window.swg) {
                    window.tinyCpt.Swg.global = window.swg
                    resolve(window.tinyCpt.Swg.global)
                    clearInterval(interval)
                }

                if (count === 20) {
                    reject("There isn't window.swg")
                    clearInterval(interval)
                }

                count++
            }, 100)
        })
    }

    async init() {
        if (!this.localProductPiano) return
        await this.setMarkup()

        if (!this.hasProductJSON) return

        await this.setSwgScript()
        await this.setAldebaranScript()
        await this.testSWG()
    }
}
