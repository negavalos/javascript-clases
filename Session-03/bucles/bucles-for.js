// blucles for


// i = i +1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
    // esto es el bucle
    console.log(i);
}

let lista =  [1, 2,3,4,5,100,7,8,9,10];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}

//Estructura for... of

for(let valor of lista){
    console.log(valor);
}

// Estrutura foreach
lista.forEach(valor => {
    console.log(valor);
})

// Estructura for... in
let persona = {
    nombre: "nelson",
    apellido: "avalos",
    edad: 24,
    isDeveloper: true
}
for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}