class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, mi edad es ${ this.edad } y soy developer`);
    }
}

const nueva_persona = new Persona("Nelson", 32, true)

console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60 // inicializando
console.log(typeof numero);
let persona_2 = new Persona("maria", 34, false) // instanciando
console.log(typeof persona_2);
console.log( persona_2 instanceof Persona);
// instanceof -> similar a typeof pero para clases