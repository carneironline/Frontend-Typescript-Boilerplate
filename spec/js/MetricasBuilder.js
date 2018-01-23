function MetricasBuilder() {

    var nomeExperiencia = undefined;
    var views = undefined;
    var maxViews = undefined;

    var clazz = {

        setNomeExperiencia: function (valor) {
            nomeExperiencia = valor;
            return this;
        },

        setViews: function (valor) {
            views = valor;
            return this;
        },

        setMaxViews: function (valor) {
            maxViews = valor;
            return this;
        },

        build: function () {
            return { nomeExperiencia, views, maxViews };
        }

    };

    return clazz;
}