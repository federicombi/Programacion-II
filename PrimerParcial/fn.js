let
personajes = [],
usuarios = [],
oldestAge= 0,
youngestAge =200, 
oldest="",
youngest="";

const linkRick = "personajes.json";
const linkRandom = "usuarios.json";


async function buscar_y_mostrar(){
   await (obtenerUsuarios());
   await (obtenerPersonajes());
   seleccionar_y_agregar();
   obtenerMayorYMenor();
   document.getElementById("listaFinal").hidden = false;
   document.getElementById("mayorYMenor").hidden = false;
}

function obtenerUsuarios(){
    return new Promise((resolve, reject) =>{
        (fetch (linkRandom).then(results => results.json()).then(data =>{
            resolve(
                data.results.forEach(user =>{
                    if(usuarios.length < 10){
                        usuarios.push(user);
                    }
                })
            )
            console.log(usuarios);
            console.log("Usuarios obtenidos");
        })).catch(error =>{
            document.getElementById("tituloError").innerHTML="Hubo un error al obtener los datos de usuarios:";
            document.getElementById("mensajeError").innerHTML=error.message;
            reject(error);
        })
    })
}

function obtenerPersonajes(){
    return new Promise((resolve, reject) =>{
        (fetch (linkRick).then(results => results.json()).then(data =>{
            resolve(
                data.forEach(character =>{
                    if(personajes.length < 10){
                        personajes.push(character);
                    }
                })
            )
            console.log(personajes);
            console.log("Personajes obtenidos");
        })).catch(error =>{
            reject(error);
            console.log(error);
            document.getElementById("tituloError").innerHTML="Hubo un error al obtener los datos de Rick y Morty:"
            document.getElementById("mensajeError").innerHTML=error.message;
        })
    })
}

function obtenerListaFinal(){ 
    let listaFinal = [];
    for(i=0;i<10;i++){
        if(i%2 == 0){
            listaFinal.push(personajes[i]);
        }else{
            listaFinal.push(usuarios[i]);
        }
    };
    return listaFinal;
}

function obtenerMayorYMenor(){
    let listaFinal = obtenerListaFinal();
    listaFinal.forEach(user =>{
        try{
            if(user.dob.age> oldestAge){
                oldestAge=user.dob.age;
                oldest = user;
            };
            if(user.dob.age<youngestAge){
                youngestAge=user.dob.age;
                youngest = user;
            };
        } catch{
    
        }
    });
    console.log("mas joven y mas viejo obtenidos");
    mostrarMayoryMenor();
}

function mostrarMayoryMenor(){
    const containerMayor= document.querySelector(".mayor");
    const containerMenor= document.querySelector(".menor");
    let 
    joven = document.createElement("p"), 
    viejo = document.createElement("p");
    
    joven.style.fontFamily = "Verdana";
    viejo.style.fontFamily = "Verdana";
    joven.textContent = youngest.name.first + " " + youngest.name.last + " ("+youngest.dob.age+")";
    viejo.textContent = oldest.name.first +" "+oldest.name.last+ " ("+oldest.dob.age+")";;
    containerMayor.append(viejo);
    containerMenor.append(joven);
}

function seleccionar_y_agregar(){
    const container = document.querySelector(".resultados");
    
    for(i=0;i<10;i++){
        if(i%2 == 0){
            let box = document.createElement("p");
            box.style.fontFamily = "Verdana";
            box.textContent = personajes[i].name;
            box.style.color = "midnightblue";
            box.style.float= "right";
            box.style.paddingLeft= "20px";
            container.append(box);
        }else{
            let box = document.createElement("p");
            box.style.fontFamily = "Verdana";
            box.textContent = usuarios[i].name.first+" "+usuarios[i].name.last;
            box.style.color = "darkred";
            box.style.float= "right";
            box.style.paddingLeft= "20px";
            container.append(box);
        }
    }
    document.getElementById("fila_boton").hidden = true;
}
