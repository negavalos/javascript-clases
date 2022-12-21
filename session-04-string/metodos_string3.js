//Metodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = "Tarta no sólo es un pastel dulce golosina o una chica. Ahora también es el nombre de mi nueva herramienta que hace signos de arte textual . ≧^◡^≦ Puedes pedir Tarty hacer un texto grande y artistico para ti. no Lo hará con mucho gusto, y lo que mas - no tu texto será ta-a-an largo!.. Ж-D Estas son las cosas que hacen que mi Tarty sea una de las mas dulces y mas GRANDEs herramientas para transformar texto en símbolos.";

console.log(texto_largo.match(/Tarta/g));

//te duvuelve true o false dependiendo de si esta la palabra en el texto
console.log(texto_largo.includes("Tarta"));

// saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tarta"));
// saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("."));