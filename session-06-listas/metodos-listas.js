//còmo trabajar con listas (arrays, arreglos, vectores)
let var1 = 45;
let array = [1, "hola", false, { id : 5 }, null, undefined, var1]

console.log(array);

// acceder a valores de un array a travez de su posicion
// array[indice] => 0, 1, 2,3,4,5....
console.log(array[4]);

//metodos para introducir nuevos valores en nuestro arrays
// .push() .unshift() => Mutas el valor de nuestro array
//valores al final -> push
array.push("final")
console.log(array);

// Valores al principios
array.unshift("inicio")
console.log(array);

//metodos para eliminar valores en nuestros arrays
// .pop() .shift() => mutan el valor del array

//valore al final -> pop
const array2 = [1, 4, "hola", false];
array2.pop()
console.log(array2);

//valores al principio -->shift
array2.shift()
console.log(array2);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(y,x,2)
const array3 = [1,2,3,4]

// Eliminar valores con el indice y cantidad
array3.splice(0, 1);
console.log(array3);

// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "hola")
console.log(array3);

// Modificar valores .splice(indice, 1, valores)
array3.splice(2,1,3);
console.log(array3);