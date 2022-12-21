// Iterar los valores de una lista
const array = ["hola", 2, 5, 6, false, undefined];

//forma antigua y poca eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// forma es6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [2,3,4,5,6,7,8,9];
arrayNums.forEach(valor=>{
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90

const variable = array.find(valor=>{
    if (valor === false) {
        return true
    }
})
console.log(variable);

const listaObjeto = [
    { nombre: "Nelson", edad: 23 },
    { nombre:"Gabriel", edad:32 },
    { nombre: "avalos", edad:43 },
]

// const persona = listaObjeto.find(o=>{
//     if (o.nombre === "Nelson") {
//         return true
//     }
// })

const persona = listaObjeto.find(o=> o.nombre === "Nelson")

console.log(persona.edad);

const { edad } = listaObjeto.find(o => o.nombre === "Gabriel")
console.log(edad);

