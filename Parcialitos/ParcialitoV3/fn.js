let
personajes = [],
usuarios = [];

const linkUsers = "https://randomuser.me/api/?results=3";
const linkRM = "https://rickandmortyapi.com/api/character/1,5,25";

function getUsers(){
    return new Promise(
        (resolve)=>{
            (fetch(linkUsers).then(results => results.json()).then(data =>{
                resolve(
                    data.results.forEach(usuario => {
                        usuarios.push(usuario);
                    }
                )
                )    
        })).catch(error =>{
            console.log(error);
        });
        console.log("Usuarios obtenidos");
    })
}
function getCharacters(){
    return new Promise((resolve, reject)=>{
            (fetch(linkRM).then(results => results.json()).then(data =>{
                resolve(
                    data.forEach(personaje => {
                        personajes.push(personaje);
                    })
                );
        })).catch(error =>{
            reject(error);
            ///console.log(error);
        })
        console.log("Personajes obtenidos");
    });
}
async function buscar_y_crear(){
    await (getUsers());
    await (getCharacters());
    const mayorUser = obtenerMayorUsuario(usuarios); 
    const mayorPersonaje = obtenerMayorPersonaje(personajes);
    ///console.log(mayorPersonaje);
    ///console.log(mayorUser);
    crear(mayorUser, mayorPersonaje)
}
function ordenarPersonajesAlfabeticamente(lista){
    lista.sort(function (a, b){
        if(a.name>b.name){
            return 1;
        } else if(a.name < b.name){
            return -1;
        } else{
            return 0;
        }
    });
    return lista;
}
function obtenerMayorPersonaje(personajes){
    let 
    lista = ordenarPersonajesAlfabeticamente(personajes),
    mayor = lista[lista.length-1];
    console.log("el mayor de los personajes: "+mayor.name);
    return mayor;
}
function obtenerMayorUsuario(lista){
    let 
    oldestAge = 0,
    oldest = "";
    lista.forEach(user =>{
        if(user.dob.age > oldestAge){
            oldestAge = user.dob.age;
            oldest = user;
        }
    });
    console.log("el usuario mas viejo: "+oldest.name.first + " "+oldest.name.last);
    return oldest;
}
function crear(usuario, personaje){
    let hibrido = new Hybrid(usuario.name.first+" "+usuario.name.last, personaje.image, usuario.dob.age, usuario.email, personaje.species, personaje.status);
    console.log("hibrido creado:");
    console.log(hibrido);
}
class Hybrid{
    constructor(nombre, foto, edad, email, especie, status){
        this.nombre = nombre;
        this.foto = foto;
        this.edad = edad;
        this.email = email;
        this.especie = especie;
        this.status = status;
    }
}