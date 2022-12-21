//Metodos de cadenas de texto (parte 2)
let input = "Capricornio";
let db = "capricornio";

//toLoweCase() - toUpperCase()
console.log(input.toUpperCase()); // Me cambia todo el texto a Mayusculas
console.log(input.toLowerCase());// Me cambia todo el texto a minusculas
console.log(input.toLowerCase() === db.toLowerCase());

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primer cadena.";
let str_2 = "y yo la segunda";

console.log(str_1.concat(" ",str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Eliminar espacios al inicio y al final
let str_3 = "  hola soy un string con espacios al final   "
console.log(str_3.length);
// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//obter el caracter que hay en cierta posicion
let str_4 = "Hola soy string 4";
console.log(str_4.charAt(6));
console.log(str_4[3]);

// obtner la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Nelson y me gusta el futbol, Mi nombre es Nelson y mi apellido es Avalos"
console.log(str_5.indexOf("Nelson"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Nelson"));