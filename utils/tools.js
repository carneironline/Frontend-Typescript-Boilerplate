// bloqueia ESC
function downFunction(e) {
    var charCode = e.charCode || e.keyCode || e.which;
    if (charCode == 27) {e.returnValue = false; e.keyCode = 0; return false;}
}
document.addEventListener("keydown", downFunction);

// adblock
function detectaAdBlock() {
    document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    var setNptTechAdblockerCookie = function(adblocker) {
        var d = new Date();
        d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
        document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
    }
    var script = document.createElement("script");
    script.setAttribute("async", true);
    script.setAttribute("src", "https://www.npttech.com/advertising.js");
    script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
    document.getElementsByTagName("head")[0].appendChild(script);
}

detectaAdBlock();