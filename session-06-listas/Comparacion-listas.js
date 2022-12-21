//como podemos compara listas 
// .every()
const array = [1, 2,3,6,5,78,423, -23, -12,43 ,12]
// const resultado = array.every(valor=>{
//     if (typeof valor === "number") {
//         return true
//     }else{
//         return false
//     }
// })
const resultado = array.every(valor => typeof valor === "number")
console.log(resultado);

/// Comparacion de litas
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2)=>{
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i)=> valor === array_2[i])
    return res;
}
console.log(compararArrays(ar1, ar2));

const ar3 = [1,2,4,5];

console.log(compararArrays(ar1, ar3));

