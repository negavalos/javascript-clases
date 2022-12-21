// funciones tipo flecha  - funciones anonimas

const array = [1,2,3,4,5,6,2,43,65,76,54];

const array2 = array.map((valor) => valor *  2)
console.log(array2);

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2;
console.log(dobleDelValor(3));


console.log(doble(6));
function doble(valor) {
    return valor * 2
}

const array3 = array.map(dobleDelValor)
console.log(array3);