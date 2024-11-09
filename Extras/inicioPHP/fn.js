function verificarTYC(){
    let aceptado = document.getElementById("tyc").checked;
    console.log(aceptado);

    if(aceptado){
        document.getElementById("formulario").submit();
    }else{
        document.getElementById("mensajeError").innerHTML="Debe aceptar los terminos y condiciones para continuar";
    }
}