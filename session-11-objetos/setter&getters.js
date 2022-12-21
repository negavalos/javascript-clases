

class Persona {
    // Private --> #
    // private --> solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    // #obtenEdad
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
    obtenNombre(){ // Funcion geetter --> nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad;
    }
    getEdad(){
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad = nuevaedad
    }
}

const persona = new  Persona("Nelson", 35);
// console.log(persona);
// console.log(persona.edad);
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad());

// console.log(persona._isDeveloper);

// Getter ->metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad);
// Setter -> metodos que nos permite cambiar valores de alguno de los atributos 
// Quiero cambiar la edad de persona
persona.setEdad(24)
console.log(persona.getEdad());