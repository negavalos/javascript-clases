// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;

//suma (+)
console.log(a + b);
// Resta(-)
console.log(a - b);
// Multiplicacion (*)
console.log(a * b);
// Diviscion (/)
console.log(a / b);
// Representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

// Redondeo de numeros decimales

let c = 3.3;
let d = c * 3;
console.log(d);
// .toFixed(*) - Limitar el numero de decimales al valor x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1840.1213324;
let f = 4335435353;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) - limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision());