// Formas de importar/exportar modulos
// 1. commonJS - require
// 2. Import ES6 - import

// const modulosMatematicas = require('./modulos/matematicas.js');
// console.log(modulosMatematicas.factorial(14));
// const {factorial, suma , eleva, multiplica} = modulosMatematicas;

const {factorial, eleva, multiplica, suma} = require('./modulos/matematicas.js')

const fact = factorial(5)
console.log(fact);

const sum = suma(12,89);
console.log(sum);


// console.log(module);

