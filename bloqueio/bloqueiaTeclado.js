function downFunction(e) {
    var charCode = e.charCode || e.keyCode || e.which;
    if (charCode == 27) {e.returnValue = false; e.keyCode = 0; return false;}
}
document.addEventListener("keydown", downFunction);