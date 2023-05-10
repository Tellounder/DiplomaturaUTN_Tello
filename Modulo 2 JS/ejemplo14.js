function validarForm(){
    const nombreValido = true;
    const paswordValido = validarLargo(document.form1.texto.value, 5);
    const resultado = nombreValido && paswordValido;
    if(resultado){
        alert('ES VALIDO')
    }else{
        alert('NO NO NO ES VALIDO')
    }
}

function validarLargo(texto, Largorequerido) {
    return texto.length >= Largorequerido

}