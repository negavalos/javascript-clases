//como obtener la longitud de un string

let str = "Hola soy un string";
console.log(str.length);

//Obtener partes de cadenas de caracteres
//slice() substring() substr()

let slice_str = str.slice(5, 10)
console.log(slice_str);

let substring_str = str.substring(5, 10)
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Nelson";
console.log(cadena);
// Al utilizar string solo remplaza la primera instancia
let cadenasR = cadena.replace("Nelson", "Gabriel");
console.log(cadenasR);

let texto_largo = "Tarta no sólo es un pastel dulce golosina o una chica. Ahora también es el nombre de mi nueva herramienta que hace signos de arte textual . ≧^◡^≦ Puedes pedir Tarty hacer un texto grande y artistico para ti. no Lo hará con mucho gusto, y lo que mas - no tu texto será ta-a-an largo!.. Ж-D Estas son las cosas que hacen que mi Tarty sea una de las mas dulces y mas GRANDEs herramientas para transformar texto en símbolos.";
console.log(texto_largo.replace("no", "si"))

// Al utilizar las expresion regulasr /g (global), remplaza todas las instancias
console.log(texto_largo.replace(/no/g, "si"))