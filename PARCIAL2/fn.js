

async function buscar(){
    let 
    id_animal = document.getElementById("id_animal").value;

    if (id_animal>0){
        document.getElementById("mensaje_error").innerHTML = "";
        await fetch("encontrarAnimal.php",{
            method:"POST", 
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                'id_animal': id_animal
                })
            }).then (response=>response.json()).then(data=>{
                if(data){
                    document.getElementById("formulario").submit();
                }else{
                    document.getElementById("mensaje_error").innerHTML = "animal no encontrado";
                }
            });
    }else{
        document.getElementById("mensaje_error").innerHTML = "verifique el ID";
    };
}

async function vacunar(){
    let 
    vacuna = document.getElementById("vacuna").value;
    console.log("vacuna "+vacuna);
    await fetch("vacunar.php",{
        method:"POST", 
        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            'vacuna': vacuna
            })
        }).then (response=>response.json()).then(data=>{
            document.getElementById("mensaje_error").innerHTML="Vacuna "+vacuna+" recibida";
        });
}

