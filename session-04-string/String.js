// sesion 4 - String (cadenas de caracteres)
let str = "hola soy un texto con comillas dobles";
let str_sng = 'hola soy un texto con comillas simples';


console.log(str);
console.log(str_sng);

let str_comillas = "el otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";
let str_comillas_simples_2 = 'el otro dia me dijo literalmente \'ve a sacar la basura\'';
console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

// comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backticks`;
console.log(str_backticks);

let nombre = "Nelson";
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo);

// Plantillas HTML

let plantilla = 
`<html>
    <h1>pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
<html>`;
console.log(plantilla);

// Introduccion de variables en html

let libro = ["Emplieza por el porque","El monje que vendio su Ferrari", "El poder del ahora"]