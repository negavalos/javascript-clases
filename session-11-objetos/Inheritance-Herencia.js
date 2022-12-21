// Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad, isDeveloper){
        this._nombre = nombre;
        this._edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre}, mi edad es ${ this.edad } y soy developer`);
    }

}
class Desarrollador extends Persona{
    constructor(nombre, edad, isDeveloper , lenguaje){
        super(nombre, edad, isDeveloper);
        this.lenguaje = lenguaje;
    }
    saludo(){// override
        super.saludo()
        console.log(`Hola soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevoD = new Desarrollador("Nelson", 43, true, "javascript")
console.log(nuevoD);
nuevoD.saludo()
//Polimorfismo