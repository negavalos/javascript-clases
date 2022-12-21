// trabajando con fechas

const fecha = new Date();

console.log(fecha);

// Atencion - los meses inicializan en 0 ( 0 - Enero, 11 - diciembre)
const fecha2 = new Date(1987, 10, 20)

console.log(fecha2);

const fecha3 = new Date(-1000000000000)
console.log(fecha3);

const fecha4 = new Date("october 13, 1979")
console.log(fecha4);

const fecha5 = new Date(1987, 10, 20)

console.log(fecha > fecha5);

console.log(fecha2 === fecha5); // ERROR -No se puede comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime());// esta es la forma de comparar la igualda entre fechas

//----- obtener el dia, el mes y el año
// Obtener el dia .getDate()
console.log(fecha2.getDate());

// obtener el mes .getMonth() (0 - enero, 11-diciembre)
console.log(fecha.getMonth() + 1);

// obtener el año .getFullYear()
console.log(fecha2.getFullYear());

console.log(fecha2);

// .toLocalDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha.toLocaleDateString('en-GB'));
