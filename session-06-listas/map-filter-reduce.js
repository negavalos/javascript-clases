// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["Resistencia", "Madrid", "Buenos aires", "Rosario"];

array.forEach(v=>{
    console.log(v);
})

const newArray = array.map((valor, indice) => `${indice + 1}- ${valor}`)
console.log(newArray);

const arrayObj = [
    { nombre: "Nelson", edad: 23 },
    { nombre:"Gabriel", edad:32 },
    { nombre: "avalos", edad:43 }
]

// const personasMayores = arrayObj.filter(obj=>{
//     if (obj.edad>30) {
//         return true
//     }else{
//         return false
//     }
// })
const personasMayores = arrayObj.filter(obj=>obj.edad > 30 )
console.log(personasMayores);

const nuevaLista = arrayObj.filter(obj => obj.nombre !== "avalos")
console.log(nuevaLista);


const valores = [3, 5,6,7,8,2,232,]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal)=>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma);