let 
numeros = [];
i=0,
tope=4; 
biggest = 0,
urlRickMorty= "https://rickandmortyapi.com/api/character/", 
urlRandomUser= "https://randomuser.me/api/",
species="",
linkCharacterPic= "",
linkUserPic="",
imgChar = document.getElementById("imgChar"),
imgUser = document.getElementById("imgUser");

function getCharacter(){
    fetch(urlRickMorty+biggest)
        .then (response => response.json())
            .then (character =>{
                species= character.species;
                linkCharacterPic= character.image;
                console.log(species);
            })
}
function biggestNum(){
    for(i=0;i<tope;i++){
        if (biggest < numeros[i]){
            biggest = numeros[i];
        }
    };
    console.log("El numero mas grande es: "+ biggest);
}
function limpiarCampo(){
    document.getElementById("num").value="";
}
function getUser(){
    fetch(urlRandomUser)
        .then(response => response.json())
            .then (data =>{
                linkUserPic = data.results[0].picture.large;
                imgUser.src = linkUserPic;
                imgUser.width= 200;
                imgUser.height= 200;
                document.getElementById("images").style.display = 'block';
                if (species == "Human"){
                    imgChar.src = linkCharacterPic;
                    imgChar.width= 200;
                    imgChar.height= 200;
                } else{
                    document.getElementById("nombre").innerHTML = data.results[0].name.first;
                    document.getElementById("apellido").innerHTML = data.results[0].name.last;
                    document.getElementById("email").innerHTML = data.results[0].email;
                    document.getElementById("edad").innerHTML = data.results[0].dob.age;
                    document.getElementById("userData").style.display = 'block';
                }
            })
}
function takeNumbers(){
    if (i<tope){
        numeros[i]= Number(Number(document.getElementById("num").value).toFixed(0));
        document.getElementById("num").focus();
        if (numeros[i] > 826){
            document.getElementById("mensajeError").innerHTML= "El numero debe ser menor que 827";
        }   else if (numeros[i]<1) {
                document.getElementById("mensajeError").innerHTML= "El numero debe ser mayor a 0";
            }   else{
                    document.getElementById("mensajeError").innerHTML= "";
                    i++;
                }
        console.log(numeros[i] + " "+ typeof(numeros[i]));
        if (i<0){i=0};
    }   
    else {
            document.getElementById("mensajeError").innerHTML="Ya se ingresaron los 10 números."
    }
    if (i == tope) {
        if(document.getElementById("images").style.display != 'block'){
            biggestNum();
            document.getElementById("completado").innerHTML= "<b>Completado</b> <br>";
            document.getElementById("ingreso").style.display= "none";
            document.getElementById("reseteo").style.display= "block";
            getCharacter();
            getUser();
        }
    }
}
function reset(){
    numeros = [];
    biggest = 0;
    i= 0;
    document.getElementById("images").style.display = 'none';
    document.getElementById("userData").style.display = 'none';
    document.getElementById("reseteo").style.display = "none";
    document.getElementById("ingreso").style.display = "block";
}

