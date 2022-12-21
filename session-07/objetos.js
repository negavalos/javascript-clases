// trabajando con objetos
const obj = {
    id: 4,
    nombre: "Nelson",
    apellido: "Avalos",
    isDeveloper:true,
    librosFav: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 4, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj
console.log(obj2);

obj.nombre = "gabriel"
console.log(obj2.nombre);

console.log(obj.nombre);

let val1 = 4
let val2 = val1

val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = {...obj}
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Nelson";
console.log(obj3.nombre);
console.log(obj.nombre);

//---------------------------------
// como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "Moana", anyo: 2016},
    {titulo: "Lo que el viento se llevo", anyo:1939},
    {titulo: "titanic", anyo: 1997},
    
]

console.log(listaPeliculas);
// .sort() --> MUTA EL VALOR DE LA LISTA ORIGINAL
listaPeliculas.sort((a,b)=> a.anyo - b.anyo)

console.log(listaPeliculas);