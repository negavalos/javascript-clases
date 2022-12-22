const boton = document.querySelector(".btn");
const btn = document.querySelector(".show")
console.log(btn);
boton.addEventListener("click", evento=>{
    alert("click en el botón")
})

$(btn).click(()=>{
    console.log("Hola, estoy utilizando jQuery");
})