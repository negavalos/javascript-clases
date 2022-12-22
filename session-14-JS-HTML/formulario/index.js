const F = document.getElementById("formulario");
console.log(F);

F.addEventListener("submit",event =>{
    console.log(event);
    event.preventDefault();
})

