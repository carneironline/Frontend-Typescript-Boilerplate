function Utils() {

    var clazz = {
        set: function (c_name, value, expiredays) {
            var d = new Date();
            d.setTime(d.getTime() + (expiredays));
            var expires = "expires=" + d.toUTCString();
            document.cookie = c_name + "=" + value + ";" + expires + ";path=/";
        }
    }

    return clazz;
}

