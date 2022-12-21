// .sort()
const array = [1,5,3,34,65,6]
console.log(array);

array.sort((a, b)=>{
    if (a < b) {
        return -1
    }else if(a > b){
        return +1
    }else{
        return
    }
})

console.log(array);

//Ordenar unicamente array numericos
const arrayNumericos = [5,343,325,35,75, 24,65];
arrayNumericos.sort((a, b) => a - b)
console.log(arrayNumericos);


// Interesante en arrays de objetos
const listaObjeto = [
    { nombre: "Nelson", edad: 23 },
    { nombre:"Gabriel", edad:332 },
    { nombre: "avalos", edad:43 }
]
// listaObjeto.sort((a, b)=>{
//     if (a.edad < b.edad) {
//         return -1
//     }else if(a.edad > b.edad){
//         return +1
//     }else{
//         return 0
//     }
// })
listaObjeto.sort((a, b)=> a.edad-b.edad)
console.log(listaObjeto);