const personaje = 
    {
      "id": 140,
     "name": "Genital Washer",
     "status": "Alive",
     "species": "Human",
     "type": "",
     "gender": "Male",
     "origin": {
         "name": "Post-Apocalyptic Earth",
         "url": "https://rickandmortyapi.com/api/location/8"
     },
     "location": {
         "name": "Post-Apocalyptic Earth",
         "url": "https://rickandmortyapi.com/api/location/8"
     },
     "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
     "episode": [
         "https://rickandmortyapi.com/api/episode/23"
     ],
     "url": "https://rickandmortyapi.com/api/character/140",
     "created": "2017-12-27T18:47:44.566Z"
    } 
/*console.log(Personaje);
console.log(personaje.name);
console.log(personaje.location.name);
*/
const jugador ={
    "nombre": "Nahuel",
    "apellido": "barrios",
    "apodo": "perrito",
    "edad": 28,
    "clubes":["San Lorenzo", "U. Catolica"],
    "activo": true,
    "sueldo": 1000000.99
}
console.log(jugador.clubes[0]);
var resultado= " ";

function estado(){
    var valor = document.getElementById("chararacter").value;
    console.log("Personaje: "+ valor);
    fetch("https://rickandmortyapi.com/api/character/"+valor)
        .then(response => response.json()
            .then(data => {
                console.log(data.name);
                console.log("El Personaje "+data.name+ " está "+ data.status);
                alert("El Personaje "+data.name+ " está "+ data.status);
                /*document.getElementById("result").innerHTML= "El Personaje "+data.name+ " está "+ data.status;*/
        }));
};

