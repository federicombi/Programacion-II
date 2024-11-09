class Persona{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    getName(){
        console.log("Nombre: "+this.name);
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}

federico = new Persona("federico","guigou");


function getPerson(){
    console.log("funciona");
    console.log(federico.name);
    federico.getName();
}