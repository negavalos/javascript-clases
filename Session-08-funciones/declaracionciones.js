// que son las funciones, como se declaran y como se utilizan
const nom = ["Nelson"]
//saluda("Nelson")
saluda(nom)
function saluda(nombre) {
    console.log(`Hola ${nombre}`);
}
let nombre2 = "Nelson";
console.log(nombre2);
depedir(nombre2)

function depedir(nombre) {
    nombre = "Gabriel"
    console.log(`Adios ${nombre}`);
}

//---------
let persona = {nombre: "Juan", apellido: "Ale"} 

saludarPersona(persona)
console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Avalos"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
saluda()

//----------------------
function ImprimeNumero(numero = 7) {//parametros por defectos
    console.log(numero);
}
ImprimeNumero(6)

///--------------------

function imprimir(...parametros) {
    console.log(parametros);
}
imprimir(2,3,4,5,6,7 ,"hola",{id:232})

///--------------------

function suma(...nums) {
    return nums.reduce((a,b)=>a + b)
}

const S = suma(1,2,3,4,5,6,32,8)
console.log(S);

//-------
function multiplicar(a=0, b=0) {
    return a * b; 
}
const multiplicacion =  multiplicar(5,9)
console.log(multiplicacion);