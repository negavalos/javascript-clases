// Comparaciones

//igualdad
if (5 == 5) {
    console.log("5 es igual a 5");
}

if (5 === 5) {
    console.log("5 es muy igual");
}

let a = "5";
let b = "5";
console.log(typeof a);
console.log(typeof b);
// == solo chequea el valor
// === chequea tipo y valor
if (a == b) {
    console.log("a es igual a b --debil");
}
if (a === b) {
    console.log("a es igual a b --fuerte");
}

let c = 4;
let d = "4";

if (c != d) {
    console.log("c y d son diferentes --debil");
}

if (c !== d) {
    console.log("c y d son diferentes --fuerte");
}

// Comparacion mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min");
}
if (max >= 10) {
    console.log("max es mayor o igual que min");
}

if (min < max) {
    console.log("min es menor que max");
}
if (min <= 5) {
    console.log("min es menor o igual que max");
}