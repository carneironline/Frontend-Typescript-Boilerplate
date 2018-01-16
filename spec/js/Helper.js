function Helper(){

    var clazz = {

        setUserAgent : function (valor){
            navigator.__defineGetter__('userAgent', function(){
                return valor;
            });
        }


    };

    return clazz;
}