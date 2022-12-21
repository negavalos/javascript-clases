let Nombre  = "Nelson";
let Apellido  = "Avalos";
let estudiante = Nombre.concat(" ", Apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let contadorCaracteres = estudiante.length;
console.log(contadorCaracteres);

let primerLetra = Nombre.charAt(0);
console.log(primerLetra);

let ultimaLetra = Apellido.charAt(5);
console.log(ultimaLetra);

let remplazoSpace = estudiante.replace(" ", "");
console.log(remplazoSpace);

let verificacionBool = estudiante.includes(Nombre);
console.log(verificacionBool);