var dato = 10
var i = 1;
var resultado = dato;
while (true) {
    i++;
    resultado = resultado * i;
    console.log("Factorial 10: " + resultado);
    if (i >= dato) {
        break;
    }
}