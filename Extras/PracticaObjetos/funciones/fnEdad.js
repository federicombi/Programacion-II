const hoy= new Date(); 

class Persona{
    constructor(nombre, apellido, dni, nacionalidad, fecha_nacimiento,photo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nacionalidad = nacionalidad;
        this.fecha_nacimiento = new Date(fecha_nacimiento);
        this.photo = photo;
    }

    saludar(){
        console.log("Hola, "+this.nombre);
    }
 
    getEdad(){
        if (this.fecha_nacimiento.getMonth() > hoy.getMonth()){
            this.edad = (hoy.getFullYear() - this.fecha_nacimiento.getFullYear() -1);
        } else if (this.fecha_nacimiento.getMonth() < hoy.getMonth()){
                this.edad = (hoy.getFullYear() - this.fecha_nacimiento.getFullYear());   
            } else {
                    if(this.fecha_nacimiento.getDay() > hoy.getDay()){
                        this.edad = (hoy.getFullYear() - this.fecha_nacimiento.getFullYear() -1);
                    } else {
                            this.edad = (hoy.getFullYear() - this.fecha_nacimiento.getFullYear());
                        }
                }
        console.log("EDAD: "+this.edad);
        return this.edad;
    }
};

const urlRandomUser = "https://randomuser.me/api/";

function getPerson(){
    fetch(urlRandomUser)
        .then (response => response.json()
            .then (data=>{
                let 
                nombre = data.results[0].name.first,
                apellido = data.results[0].name.last,
                dni = data.info.seed,
                nacionalidad= data.results[0].location.country,
                fecha_nacimiento= new Date(data.results[0].dob.date),
                photo = data.results[0].picture.large;
                
                newUser = new Persona(nombre, apellido, dni, nacionalidad, fecha_nacimiento,photo);
                document.getElementById("userData").innerHTML = 
                    "<p>Nombre: "+newUser.nombre+"<p>"+
                    "<p>Apellido: "+newUser.apellido+"<p>"+
                    "<p>DNI: "+newUser.dni+"<p>"+
                    "<p>Nacionalidad: "+newUser.nacionalidad+"<p>"+
                    "<p>Fecha de Nacimiento: "+newUser.fecha_nacimiento.getDate()+"/"+(newUser.fecha_nacimiento.getMonth()+1)+"/"+newUser.fecha_nacimiento.getFullYear()+"<p>";
                
                edad = newUser.getEdad();
                
                if (edad<18){
                    cuenta = dni;
                    newUser = new Cliente(nombre, apellido, dni, nacionalidad, fecha_nacimiento,cuenta);
                    console.log("nuevo cliente");
                    document.getElementById("result").innerHTML = "<b>Nuevo cliente</b>";
                } else{
                    legajo = dni;
                    newUser = new Empleado(nombre, apellido, dni, nacionalidad, fecha_nacimiento,legajo);
                    console.log("nuevo Empleado");
                    document.getElementById("result").innerHTML = "<b>Nuevo empleado<b>";
                }
            }
        ));
}

class Cliente extends Persona{
    constructor(nombre, apellido, dni, nacionalidad, fecha_nacimiento, cuenta){
        super(nombre, apellido, dni, nacionalidad, fecha_nacimiento);
        this.cuenta = cuenta;
    }
}
class Empleado extends Persona{
    constructor(nombre, apellido, dni, nacionalidad, fecha_nacimiento, legajo){
        super(nombre, apellido, dni, nacionalidad, fecha_nacimiento);
        this.legajo = legajo;
    }
}