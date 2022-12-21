// Listas, array o arreglo
const lista = [3, "hola", true, undefined, null];
const lista2 = new Array(3, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];



console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil = {
    altura:10,
    anchura: 5,
    marca: "samsung",
    isWhite: false,
    contactos:["Nelson", "gabriel", "avalos"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 32
    }
}
movil.año = 2019;
movil.marca = "Nokia";

console.log(movil);


//Fechas
// Librerias de apoyo moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)//ultilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valore = new Date(2022, 1, 15);
console.log(fecha_valore);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const ano = ahora.getFullYear();
console.log(dia, mes, ano);
console.log(dia);