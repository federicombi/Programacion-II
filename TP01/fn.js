var frutas=['Pera','Manzana', 'Frutilla','Sandia','Pomelo','Banana'];

console.log(frutas[1]);

for (i=0; i<frutas.length; i++){
    console.log(frutas[i]);
};

frutas.forEach(fruta => {
    console.log(fruta);
});

for(const fruta of frutas){
    if (fruta == "Manzana"){
        console.log(fruta)}
        else 
            console.log('No es manzana')
}

