/* 12/04/2024:  */
var genero1=" ", genero2=" ", numPersonaje= Number;

function buscar_genero1(){
    let imagen = document.getElementById("p1");
    numPersonaje = document.getElementById("Numero_Personaje1").value;
    fetch("https://rickandmortyapi.com/api/character/"+numPersonaje)
        .then (response => response.json()
            .then (data => {
                console.log("PERSONAJE 1:  Num: "+numPersonaje + " - Nombre: "+data.name + " - Genero: "+data.gender);
                genero1= data.gender;
                imagen.src= data.image;
                imagen.width="150";
                imagen.height="150";
            }))
}
/* cómo hacer que se use una sola función para ambos input */
function buscar_genero2(){
    let imagen = document.getElementById("p2");
    numPersonaje = document.getElementById("Numero_Personaje2").value;
    fetch("https://rickandmortyapi.com/api/character/"+numPersonaje)
        .then (response => response.json()
            .then (data => {
                console.log("PERSONAJE 2:  Num: "+numPersonaje + " - Nombre: "+data.name + " - Genero: "+data.gender);
                genero2= data.gender;
                imagen.src= data.image;
                imagen.width="150";
                imagen.height="150";         
            }))
}

function comparar_generos(){
    let imagen = document.getElementById("resultado");
    console.log("comparando...");
    if (genero1 == genero2){
        imagen.src= "https://segboardshoppen.dk/wp-content/uploads/2019/02/checkmark-for-verification.svg"
        imagen.width="100";
        imagen.height="100";
        imagen.alt="tienen el mismo genero";
        document.getElementById("mensaje").innerHTML= "Tienen el mismo genero";
        }
        else {
            imagen.src= "https://cdn.pixabay.com/photo/2012/04/13/00/22/red-31226_960_720.png";
            imagen.width="100";
            imagen.height="100";
            imagen.alt="NO tienen el mismo genero";
            document.getElementById("mensaje").innerHTML= "Tienen distinto genero";
        }
}