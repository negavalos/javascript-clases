// .some()
const array = [1,6,2,4,7,324,763,23,8];
const res = array.some(valor=> valor < 0)
console.log(res);

const existe = array.some(valor => valor === 7)
console.log(existe);

const listaObjeto = [
    { nombre: "Nelson", edad: 23 },
    { nombre:"Gabriel", edad:32 },
    { nombre: "avalos", edad:43 },
]

const existeNelson = listaObjeto.some(persona=> persona.nombre === "albert")
console.log(existeNelson);

//como obtener una lista a partir de un objeto iterable
const str = "Hola soy Nelson";
console.log(str[0]);

const ar_str = Array.from(str)
console.log(ar_str);
const set = new Set([2, 3, "hola", 5]);
const ar_set = Array.from(set)
console.log(ar_set);

const keys = array.keys()
console.log(keys);

const ar_Keys = Array.from(keys)
console.log(ar_Keys);