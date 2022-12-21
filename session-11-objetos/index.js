const persona = {
    nombre: "Nelson",
    edad: 23,
    isDevelepoer: true,
    saludo: function(){
        console.log("hello");
    }

}

// console.log(persona);
persona.saludo();

const otra_persona ={
    nombre: "Gabriel",
    edad: 32,
    isDevelepoer: false,
    saludo: function(){
        console.log("hola");
    }
}

otra_persona.saludo()

// Funcion factory
const creaPersona = (nombre, edad, isDeveloper)=>{
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("hello");
        }
    }
}
const nueva_persona = creaPersona("Nelsona", 24, true)
console.log(nueva_persona);
const nueva_persona_2 = creaPersona("Maria", 34, false)
console.log(nueva_persona_2);