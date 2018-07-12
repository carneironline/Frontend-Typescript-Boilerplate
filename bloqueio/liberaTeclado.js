if(typeof downFunction !== "undefined") { 
    document.removeEventListener("keydown", downFunction);
} else {
    console.log("Não existe função de remover esc");
}