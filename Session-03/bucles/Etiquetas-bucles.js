// break y continue
// labels

let unidades = 0;
let decenas = 0;

blucleDecenas: while(true){
    
    bucleUnidades: while (true) {
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades ++
        if(unidades === 10){
            unidades = 0
            break bucleUnidades
        }
        if (decenas === 2) {
            console.log(`El numero actual es: ${decenas}${unidades}`);
            break blucleDecenas 
        }
    }
    decenas++;
}
console.log("Ya hemos terminado");