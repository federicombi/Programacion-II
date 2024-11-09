const hoy = new Date();

class Client{
    constructor(name, lastname, dob){
        this.name = name;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    getName(){
        return this.name
    }
    getLast(){
        return this.lastname
    }
    getDOB(){
        return this.dob
    }
    getAge(){
        if (this.dob.getMonth() > hoy.getMonth()){
            this.edad = (hoy.getFullYear() - this.dob.getFullYear() - 1);
        } else if (this.dob.getMonth() == hoy.getMonth()){
            if(this.dob.getDate() > hoy.getDate()){
                this.edad = (hoy.getFullYear() - this.dob.getFullYear() -1);
            } else {
                    this.edad = (hoy.getFullYear() - this.dob.getFullYear());
                }  
            } else {
                this.edad = (hoy.getFullYear() - this.dob.getFullYear()); 
                }
        console.log("EDAD: "+this.edad);
        return this.edad;
    }
    setName(name){
        this.name = name;
    }
    setLastName(lastname){
        this.lastname = lastname;
    }
    setDOB(dob){
        this.dob = new Date(dob);
    }
}

class Account extends Client{
    constructor(name, lastname, dob, accountNumber){
        super(name, lastname, dob);
        this.accountNumber = accountNumber;
        this.funds = 0;
    }
    setAccountNumber(number){
        this.accountNumber = number;
        this.accountNumber;
    }
    deposit(deposit){
        if(deposit > 0){
            if (deposit <= 1000){
                this.funds = this.funds + deposit;
                document.getElementById("mensajeErrorBanco").innerHTML = "";
                return true;
            } else{
                document.getElementById("mensajeErrorBanco").innerHTML = "No se puede depositar mas de $1000";
                return false;
            }
        }else {
            document.getElementById("mensajeErrorBanco").innerHTML = "El deposito debe ser mayor a 0";
            return false;
        }
    }
    extract(extract){
        if(extract>0){
            if (this.funds > extract){
                this.funds = this.funds - extract;
                document.getElementById("mensajeErrorBanco").innerHTML = "";
                return true;
            }else{
                document.getElementById("mensajeErrorBanco").innerHTML = "fondos insuficientes";
                return false;
            }
        } else{
            document.getElementById("mensajeErrorBanco").innerHTML = "La extraccion debe ser mayor a 0";
        }
        
    }
    getFunds(){
        return this.funds;
    }
    getAccount(){
        return this.accountNumber;
    }
}

let 
name = "",
lastname = "",
dob = "",
accNumber = 0,
fecha = new Date();

const newClient = new Client();
const newAccount = new Account();

/*
function createUser(){ ///// DECLARA newClient dentro de la función;
    let 
    name = document.getElementById("name").value.trim().toLowerCase(),
    lastname = document.getElementById("lastname").value.trim().toLowerCase(),
    dob = document.getElementById("dob").value.trim().toLowerCase();
    if(isNameOk(lastname)){ /// apellido ok
        if(isNameOk(name)){ /// nombre ok
            if (isBirthOk(dob)){ /// crea el cliente
                name = firstCapital(name);
                lastname = firstCapital(lastname);
                const newClient = new Client(name, lastname, fecha);
                console.log("cliente creado");
                if (newClient.getAge() >= 18){
                    document.getElementById("ingresoDatos").hidden = true;
                    document.getElementById("parteCuenta").hidden = false;
                    newClient.setName(name);
                    newClient.setLastName(lastname);
                    newClient.setDOB(dob)
                    const newAccount = createAccount(newClient.name, newClient.lastname, newClient.dob);
                    document.getElementById("numeroCuenta").innerText = "Cuenta: #"+ newAccount.accountNumber;
                    let saldo = formatMoney(newAccount.funds.toFixed(2));
                    console.log(saldo); 
                    document.getElementById("saldo").innerHTML = saldo;
                    document.getElementById("nombreCliente").innerHTML = newClient.name + " " + newClient.lastname;
                }else{
                    console.log("es menor");
                }
            }else{ // no crea el cliente
                console.log("cliente no creado");
            }
        }else{
            document.getElementById("mensajeError").innerHTML = "El nombre solo puede contener letras";
        }
    }else{
        document.getElementById("mensajeError").innerHTML = "El apellido solo puede contener letras";
    }
}
*/

function firstCapital(name){
    let 
    letter = name.at(0),
    capital = letter.toUpperCase();
    name = name.replace(letter, capital);
    console.log(name);
    return name;
}
function formatMoney(saldo){
    saldo = new Intl.NumberFormat('es-AR').format(saldo);
    console.log(typeof saldo);
    return saldo;
}  
function assignAccount(newClient){
    accNumber = accNumber+1;
    Object.assign(newAccount, newClient);
    newAccount.setAccountNumber(accNumber);
    return newAccount;
}
function isBirthOk(fecha_nac){
    document.getElementById("mensajeError").innerHTML = "";
    if( (5<= fecha_nac.length) && (fecha_nac.length<=10)){
        document.getElementById("mensajeError").innerHTML = "OK"
        if(fecha_nac.includes("/")){ /// fecha incluye "/" 
            fecha_nac = fecha_nac.split("/");
            if(fecha_nac.length == 3){    /// FECHA CORRECTA
                day = Number(fecha_nac[0]);
                month = Number(fecha_nac[1]);
                year = Number(fecha_nac[2]);
                if((day >= 1 )&&(day <= 31)){ /// día entre 1 y 31
                    if (month >= 1 && month <= 12){ /// mes entre 1 y 12
                        if((year < 100) && (year >= 24)){ ///transformar año de dos cifras
                            year += 1900;
                        }else if(year < 24 && year > 0){ ///transformar año de una o dos cifras
                            year += 2000;
                        }else{
                            document.getElementById("mensajeError").innerHTML = "verifique el año";
                        };                  
                        if( year > 1900 && year < 2023 ){ /// TODA LA FECHA OK
                            fecha = new Date(year+"-"+month+"-"+day);
                            document.getElementById("mensajeError").innerHTML = ""
                            console.log("Fecha OK");
                            return true;
                        }else{
                            document.getElementById("mensajeError").innerHTML = "verifique el año";
                            return false
                        }
                    }else{
                        document.getElementById("mensajeError").innerHTML = "el mes debe ser entre 1 y 12";
                    }
                } else{
                    document.getElementById("mensajeError").innerHTML = "el dia debe ser entre 1 y 31";
                }
            }else{ /// FECHA CON FORMATO INVALIDO
                document.getElementById("mensajeError").innerHTML = "la fecha debe tener el formato dd/mm/aaaa";
            };
        } else{ /// FECHA SIN "/"
            document.getElementById("mensajeError").innerHTML = "la fecha debe tener el formato dd/mm/aaaa";
        };
    }else{ /// FECHA CON DEMASIADOS CARACERES
        document.getElementById("mensajeError").innerHTML = "Hay un error en la fecha de nacimiento";
    }
}
function isNameOk(name){
    let 
    result = -1;
    const specialChar=["!","'",'"',"#","$","%","/","(",")","=","¿","?","+","*","-","_","{","}","[","]","¡","|","°","¬","&","@",";",",",".","~","\\"];
    for (i=0;i<10;i++){
        result = name.indexOf(i);
        if( result != -1){
            break;
        }
    }
    for (i=0;i<name.length;i++){
        for(const element of specialChar){
            if (name.at(i) == element){
                result = 1;
            }
        }
    }
    if (result == -1){
        return true;
    } else{
        return false;
    }
}
function showFunds(){
    let saldo = formatMoney(newAccount.funds.toFixed(2));
    console.log(saldo); 
    document.getElementById("saldo").innerHTML = saldo;
}

function cleanField(value){
    document.getElementById(value).value="";
}

function deposit(){
    let deposit = Number(document.getElementById("deposit").value);
    if (newAccount.deposit(deposit)){
        console.log("deposito completado");
        showFunds();
    }
    cleanField("deposit");
    return newAccount.funds;
}
function extract(){
    let extract= document.getElementById("extraction").value;
    if(newAccount.extract(extract)){
        console.log("extracción completada");
        showFunds();
    };
    cleanField("extraction");
    return newAccount.funds;
}

function createUser(){ ///// DECLARA newClient dentro de la función;
    let 
    name = document.getElementById("name").value.trim().toLowerCase(),
    lastname = document.getElementById("lastname").value.trim().toLowerCase(),
    dob = document.getElementById("dob").value.trim().toLowerCase();
    if(isNameOk(lastname)){ /// apellido ok
        if(isNameOk(name)){ /// nombre ok
            if (isBirthOk(dob)){ /// crea el cliente
                name = firstCapital(name);
                lastname = firstCapital(lastname);
                newClient.setName(name);
                newClient.setLastName(lastname);
                newClient.setDOB(dob);
                console.log("cliente creado");
                if (newClient.getAge() >= 18){
                    document.getElementById("ingresoDatos").hidden = true;
                    document.getElementById("parteCuenta").hidden = false;
                    assignAccount(newClient);
                    document.getElementById("numeroCuenta").innerText = "Cuenta: #"+ newAccount.accountNumber;
                    document.getElementById("nombreCliente").innerHTML = newClient.name + " " + newClient.lastname;
                    showFunds();
                }else{
                    console.log("es menor");
                }
            }else{ // no crea el cliente
                console.log("cliente no creado");
            }
        }else{
            document.getElementById("mensajeError").innerHTML = "El nombre solo puede contener letras";
        }
    }else{
        document.getElementById("mensajeError").innerHTML = "El apellido solo puede contener letras";
    }
}
/*
localStorage.setItem("clave","123");
prubaStorage = localStorage.getItem("clave");
console.log(prubaStorage);

sessionStorage.setItem("clave", "a ver que onda")
pruebaStorage = sessionStorage.getItem("clave");
console.log(pruebaStorage);
let data = {
    name:  "Federico",
    age: 25
}

localStorage.setItem("data", Json.stringify(data));
let aux = localStorage.getItem("data");
console.log(Json.parseInt(aux));

*/
