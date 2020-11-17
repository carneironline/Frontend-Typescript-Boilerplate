export default class Fb {
    constructor(data = null) {
        this.debug = window.tinyCpnt.debug
        this.disabled = false
        this.fb = data
    }

    get isDefined() {
        return typeof fbq !== 'undefined'
    }

    setPixelType() {
        if (this.disabled) return

        const hasPixel =
            typeof this.fb.pixel.name !== 'undefined'
                ? this.fb.pixel.name
                : null

        if (this.isDefined && hasPixel) {
            fbq('init', '410270039520634')
            fbq('trackSingle', '410270039520634', this.fb.pixel.name)
        }
    }
}
