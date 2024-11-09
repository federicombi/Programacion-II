let 
mascs = [],
fems=[],
totalFems=0,
totalMascs =0,
enlace ="",
oldest="", 
oldestAge = 0;

const linkLocal = "./personas.json";
const linkInternet = "https://randomuser.me/api/?results=10";

async function ordenar_y_buscar(){
    if(isBusquedaSelected()){
        await(obtener_personas(enlace));
        agregar_a_contenedor(fems,"fems");
        agregar_a_contenedor(mascs,"mascs");
        mostrar_grupos();
        hideButton(true);
        showOldest();
    } else{
        document.getElementById("mensaje_de_error").innerHTML = "Debe seleccionar un tipo de busqueda";
    }
}
function hideButton(bool){
    document.getElementById("areaDeBusqueda").hidden = bool;
}
function showOldest(){
    const container = document.querySelector(".oldestPhoto");
    if(document.getElementById("I").checked){
        let img = document.createElement("img");
        img.src = oldest.picture.large;
        img.alt = "Foto de la persona con mas edad ("+ oldest.name.first +" " + oldest.name.last+")";
        container.append(img);
        document.getElementById("fila_foto_del_mas_viejo").hidden = false;
    }
}
function isBusquedaSelected(){
    let 
    local = document.getElementById("L").checked,
    internet = document.getElementById("I").checked;
    document.getElementById("mensaje_de_error").innerHTML = "";
    if(local){
        enlace = linkLocal;
        return true;
    } else if(internet){
        enlace = linkInternet;
        return true;
    } else{
        return false;
    };
}
function obtener_personas(enlace){
    return new Promise((resolve, reject) =>{
        (fetch(enlace)
            .then (response => response.json())
                .then (data=>{
                    resolve(
                        data.results.forEach(persona=> {
                            if(persona.gender==="male"){
                                    mascs.push(persona);
                                    totalMascs++;
                            } else{
                                    fems.push(persona);
                                    totalFems++;
                            }
                            if(persona.dob.age > oldestAge){
                                oldestAge = persona.dob.age;
                                oldest = persona;
                            }
                        })
                    )}
        )).catch (error=>{
            reject(error)}
        );
    })
}
function agregar_a_contenedor(grupo, contenedor){
    const container = document.querySelector("."+contenedor);
    grupo.forEach(persona =>{
        let sujeto = document.createElement("p");
        sujeto.style.fontFamily = "Verdana";
        sujeto.style.fontSize = "20px"
        sujeto.textContent = persona.name.first + " "+ persona.name.last;
        container.append(sujeto);
    });
    document.getElementById("mujeres").style.backgroundColor = "aqua";
    document.getElementById("hombres").style.backgroundColor = "yellow";
    document.getElementById("totalMujeres").innerHTML = totalFems;
    document.getElementById("totalHombres").innerHTML = totalMascs;
}
function probar(){
    console.log("Nombre: ");
    console.log(mascs[0].name);
    agregar_a_contenedor(fems,"fems");
    agregar_a_contenedor(mascs,"mascs");

}
function mostrar_grupos(){ 
    document.getElementById("fems").hidden = false;
    document.getElementById("mascs").hidden = false;
}
