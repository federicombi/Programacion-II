/*
let
group=[],
char= 0,
groupPhotos=[],
idPersonaje=0, i=0, iA=0, iB=3,
tope= 0, topeA=3, topeB=6, inX="",
inputGroup="", mensajeError="", 
completed="",
photoN="";

const urlRickMorty= "https://rickandmortyapi.com/api/character/";

function correcti(groupClass){
    if (groupClass == "groupA"){
        iA=i;
    } else if (groupClass == "groupB"){
        iB= i;
    }
}
function asignGroup(groupClass){
    if (groupClass == "groupA"){
        i= iA;
        iA++;
        tope = topeA;
        mensajeError="errorA";
        inX="inA";
        completed="aCompleted"
    } else if (groupClass == "groupB"){
        i= iB;
        iB++;
        tope = topeB;
        mensajeError="errorB";
        inX="inB";
        completed="bCompleted"
    }
}
function cleanField(groupClass){
    document.getElementById(groupClass).value="";
}
function take(groupClass){
    asignGroup(groupClass);
    if (i<tope){
        char= Number(Number(document.getElementById(groupClass).value).toFixed(0));
        cleanField(groupClass);
        document.getElementById(groupClass).focus();
        if (char > 826){
            document.getElementById(mensajeError).innerHTML= "El numero debe ser menor que 827";
            correcti(groupClass);
        }   else if (char<1) {
                document.getElementById(mensajeError).innerHTML= "El numero debe ser mayor a 0";
                correcti(groupClass);
            }   else if (alreadyIn(char)){
                    document.getElementById(mensajeError).innerHTML= "Ese número ya se ingresó";
                    correcti(groupClass);
                } else{
                        document.getElementById(mensajeError).innerHTML= "";
                        group[i] = char;
                        if(groupClass=="groupA"){
                            document.getElementById("cantInA").innerHTML="Ingresados: "+iA;
                        }else{
                            document.getElementById("cantInB").innerHTML="Ingresados: "+iB;
                        }
                    }
    } else {
            document.getElementById(mensajeError).innerHTML="Ya se ingresaron los números"
        };
    if(group[tope-1] != undefined){
        document.getElementById(inX).style.display = 'none';
        document.getElementById(completed).style.display = 'block';
    }
    if((group[topeA-1] != undefined) && (group[topeB-1] != undefined)){
        console.log(group);
        console.log("Grupo A y B ingresados");
        getPhotos();
        showPhotos(true);
    }
}
function alreadyIn(char){
    let result= false;
    for(z=0;z<topeB;z++){
        if (char == group[z]){
            result=true;
        } 
    }
    return result;
}
function getPhotos(){ 
    (fetch(urlRickMorty+group)
        .then(response => response.json())
            .then (data =>{
                for(const element of data){
                    for(i=0;i<topeB;i++){
                        if (element.id == group[i]){
                            console.log(element.image);
                            document.getElementById("p"+i).src = element.image;
                            document.getElementById("p"+i).alt = "Imagen: Personaje n° "+element.id;
                        }
                    }
                }    
            })).catch(error => {
                console.log(error);
                document.getElementById("error").innerHTML= 
                "<p>Hubo un error: </p><p>"+error.message+" "+"</p>";
            })
}
function showPhotos(bool){
    if (bool){
        for (z=0;z<topeB;z++){
            photoN= "p"+z;
            document.getElementById(photoN).style.display = "block"
        }
        document.getElementById("photosGroupA").style.display="block";
        document.getElementById("photosGroupB").style.display="block";
        //document.getElementById("result").style.display="block";
    }else{
        for (z=0;z<topeB;z++){
            photoN= "p"+z;
            document.getElementById(photoN).style.display = "none"
        }
        document.getElementById("photosGroupA").style.display="none";
        document.getElementById("photosGroupB").style.display="none";
    }
}

*/




//prueba 
let groupA=[],groupB=[],
iA=0, iB=0,i=0,char= 0,
idPersonaje=0, 
inX="", mensajeError="", 
completed="", groupClass="",
photoN="";

const urlRickMorty= "https://rickandmortyapi.com/api/character/";

function take(groupClass){
    asignGroup(groupClass);
    char= Number(Number(document.getElementById(groupClass).value).toFixed(0));
        cleanField(groupClass);
        document.getElementById(groupClass).focus();
        if (char > 826){
            document.getElementById(mensajeError).innerHTML= "El numero debe ser menor que 827";
            correcti(groupClass);
        }   else if (char<1) {
                document.getElementById(mensajeError).innerHTML= "El numero debe ser mayor a 0";
                correcti(groupClass);
            }   else if (alreadyIn(char)){
                    document.getElementById(mensajeError).innerHTML= "Ese numero ya se ingresó";
                    correcti(groupClass);
                } else{
                        document.getElementById(mensajeError).innerHTML= "";
                        if(groupClass=="groupA"){
                            groupA[i] = char;
                            document.getElementById("cantInA").innerHTML="Ingresados: "+groupA.length;
                        }else{
                            groupB[i] = char;
                            document.getElementById("cantInB").innerHTML="Ingresados: "+groupB.length;
                        }
                    }
    console.clear();
    console.log("GRUPO A: "+groupA);
    console.log("GRUPO B: "+groupB);  
}
function complete(){
    if (groupA.length == groupB.length){
        try{document.getElementById("error").innerHTML="";} catch{console.log("no hubo errores en el ingreso")};
        getPhotos(groupA, "photosA");
        getPhotos(groupB, "photosB");
        showPhotos(true);
    }else{
        document.getElementById("error").innerHTML="los grupos deben tener la misma cantidad de integrantes";
    }
    document.getElementById("inA").style.display = 'none';
    document.getElementById("inB").style.display = 'none';
}

function getPhotos(group, photos){ 
    tope = group.length;
    console.log(tope);
    const container = document.querySelector("."+photos);
    (fetch(urlRickMorty+group)
        .then(response => response.json())
            .then (data =>{
                if(data[1]!= undefined){
                    for(element of data){
                        for(i=0;i<tope;i++){
                            if (element.id == group[i]){
                                let img = document.createElement("img");
                                img.src = element.image;
                                img.alt = "imagen del personaje "+element.id;
                                container.append(img);
                            }
                        }
                    }
                } else{
                    let img = document.createElement("img");
                    img.src = data.image;
                    img.alt = "imagen del personaje "+data.id;
                    container.append(img);
                }
            })).catch(error => {
                console.log(error);
                document.getElementById("error").innerHTML= "<p>Hubo un error: </p><p>"+error.message+" "+"</p>";
            })
}

function showPhotos(bool){
    if (bool){
        document.getElementById("photosGroupA").hidden= true;
        document.getElementById("photosGroupB").hidden= false;
    }else{
        document.getElementById("photosGroupA").style.display="none";
        document.getElementById("photosGroupB").style.display="none";
    }
}
function reset(){
    //document.getElementById("aCompleted").style.display = 'none';
    //document.getElementById("bCompleted").style.display = 'none';
    document.getElementById("cantInB").innerHTML="Ingresados: 0";
    document.getElementById("cantInA").innerHTML="Ingresados: 0";
    showPhotos(false);
    groupA=[];
    groupB=[];
    iA= 0;
    iB= 0;
    i=0;
    document.getElementById("inA").style.display = 'block';
    document.getElementById("inB").style.display = 'block';
    document.getElementById("error").innerHTML= "";
}
function cleanField(groupClass){
    document.getElementById(groupClass).value="";
}
function correcti(groupClass){
    if (groupClass == "groupA"){
        iA=i;
    } else if (groupClass == "groupB"){
        iB= i;
    }
}
function asignGroup(groupClass){
    if (groupClass == "groupA"){
        i= iA;
        iA++;
        mensajeError="errorA";
        inX="inA";
        completed="aCompleted"
    } else if (groupClass == "groupB"){
        i= iB;
        iB++;
        mensajeError="errorB";
        inX="inB";
        completed="bCompleted"
    }
}
function alreadyIn(char){
    let result= false;
    for(const element of groupA){
        if (char == element){
            result=true;
        } 
    }
    for(const element of groupB){
        if (char == element){
            result=true;
        } 
    }
    return result;
}

