// localStorage.setItem("nombre", "Nelson")
// localStorage.setItem("nombre", "Miguel")

// console.log(localStorage.getItem("nombre"));
localStorage.setItem("persona",JSON.stringify({
    nombre: "Nelson",
    edad: 23
}))
// console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify-> convierte un objeto/array en string
// JSON.parse -> Convierte en un objeto/array convertido atravez del stringify 

localStorage.removeItem("persona")

sessionStorage.setItem("nombre", "Nelson")

/* Cookies */
document.cookie = "NombreCookie=Nelson"
document.cookie = "nombrecaducidad=Nombre; expires= " + new Date(2023, 0, 12).toUTCString();
console.log(document.cookie)