function MetricasBuilder() {

    let nomeExperiencia;
    let views;
    let maxViews;
    let fluxo;

    const clazz = {

        setNomeExperiencia (valor) {
            nomeExperiencia = valor;
            return this;
        },

        setViews (valor) {
            views = valor;
            return this;
        },

        setMaxViews (valor) {
            maxViews = valor;
            return this;
        },

        setFluxo (valor) {
            fluxo = valor;
            return this;
        },

        build () {
            return { nomeExperiencia, views, maxViews, fluxo };
        }

    };

    return clazz;
}