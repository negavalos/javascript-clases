class Estudiante{
    #nombre;
    #asignatura;
    constructor(nombre){
        this.#nombre = nombre;
        this.#asignatura = ["Javascript", "HTML", "CSS"]
    }
    obatenDato(){
        return {
            nombre: this.#nombre,
            asignaturas: this.#asignatura
        }
    }
}

const estudiante = new Estudiante("Nelson");
console.log(estudiante.obatenDato());
