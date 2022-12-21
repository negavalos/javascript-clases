class Persona {
    // Private --> #
    // private --> solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    #obtenEdad
    // Protected-> _
    // Protected-> solo es puede acceder desde dentro de la classe y desde clases decendientes
    _isDeveloper;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, mi edad es ${ this.edad }.`);
    }
    obtenNombre(){
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad;
    }
}

const persona = new  Persona("Nelson", 35);
// console.log(persona);
// console.log(persona.edad);
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());
console.log(persona._isDeveloper);