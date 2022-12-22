const boton = document.querySelector("#btn");

// console.log(boton);

boton.addEventListener("click",()=>{
    // alert("Se ha hecho click")
    // confirm("Estas de acuerdo") && console.log("ok");
    // confirm("Estas de acuerdo") ? console.log("ok") : console.log("NO!!");

    const Respuesta = confirm("seguro");
    if (Respuesta) {
        console.log("Estas de acuerdo");
    }else{
        console.log("No estas de acuerdo");
    }
})

const botonInfo = document.querySelector("#info") 
botonInfo.addEventListener("click", ()=>{
    const nombre = prompt("cual es tu nombre");
    if(nombre){
        console.log("Tu nombre es " + nombre);
    }else{
        console.log("No has introducido tu nombre");
    }
    
})

const lista = [{
        nombre: "Nelson",
        edad: 23
    },
    {
        nombre: "Gabriel",
        edad: 30
    }
]

// console.log(lista);
console.table(lista);
