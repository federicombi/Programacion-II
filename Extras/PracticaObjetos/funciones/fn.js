const hoy= new Date(); 

// las clases van con la primer letra en mayúscula y en singular
class Persona{
    constructor(nombre, apellido, anio){
        this.nombre= nombre; //el .this se refiere al mismo objeto, así declaramos que el atributo nombre del objeto sea el nombre que recibe el constructor
        this.apellido = apellido;
        this.fecha_nacimiento = new Date(anio);
    };
    saludar(){
        console.log("Hola, soy "+this.nombre);
    }
    getEdad(){
        let edad=0;
        console.log(this.fecha_nacimiento.getMonth());
        if (this.fecha_nacimiento.getMonth() > hoy.getMonth()){
            edad = hoy.getFullYear() - this.fecha_nacimiento.getFullYear() -1;
        } else if (this.fecha_nacimiento.getMonth() < hoy.getMonth()){
                edad = hoy.getFullYear() - this.fecha_nacimiento.getFullYear();   
            } else {
                    if(this.fecha_nacimiento.getDay() > hoy.getDay()){
                        edad = hoy.getFullYear() - this.fecha_nacimiento.getFullYear() -1;
                    } else {
                            edad = hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
                        }
                }
        //let edad= hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
        console.log(edad);
        return edad;
    }
};

let federico = new Persona ("Federico", "Guigou", "1997-08-15");

federico.getEdad();
federico.saludar();

let edad = federico.getEdad();
console.log("LA EDAD ES: "+edad);


class cliente extends Persona{
    cuenta="";
}

/*let federico = new Persona(); //para cuando no se usa constructor
federico.nombre = "Federico";
federico.apellido = "Guigou";
federico.dni = 96161196;
federico.nacionalidad="uruguayo";
federico.fecha_nacimiento = "1997-15-08";

console.log("DNI: "+federico.dni);
console.log("Nombre: "+federico.nombre);


class Estudiante extends Persona{
    constructor(nombre, apellido, dni, nacionalidad, fecha_nacimiento, cuenta){
        super(nombre, apellido, dni, nacionalidad, fecha_nacimiento);
        this.cuenta=cuenta;
    }
};

let federico = new Estudiante("Federico", "Guigou", 96161196, "Uruguayo","1997-08-15",1);
console.log(federico.cuenta);
federico.saludar();
*/