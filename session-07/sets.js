// sets o conjuntos (en castellano)

const array = [1,3,5,6,7, 6, 1,2,3, "hola", "hola", {id: 5}, {id:5}]

const miSet = new Set(array)

console.log(array);
console.log(miSet);

// .add()
miSet.add(9)
console.log(miSet);
// Eliminar valores .delete()

miSet.delete("hola");
console.log(miSet);

// .clear elimina todos los objetos
// miSet.clear();
// console.log(miSet);

// .has()
// console.log(array.includes(1));
console.log(miSet.has(32));

// .size
console.log(miSet.size);

miSet.forEach(valor=>{
    console.log(valor);
})

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet);