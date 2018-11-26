function LeitorBuilder() {

    var glbid = undefined;
    var produto = undefined;

    var clazz = {

        setGlbid: function (valor) {
            glbid = valor;
            return this;
        },

        setProduto: function (valor) {
            produto = valor;
            return this;
        },

        setMotivo: function (valor){
            motivo = valor;
            return this;
        },

        setAutorizado: function(valor){
            autorizado = valor;
            return this;
        },

        setUUID: function(valor){
            uuid = valor;
            return this;
        },

        build: function () {
            return { glbid, produto, motivo, autorizado, uuid };
        }


    };

    return clazz;
}