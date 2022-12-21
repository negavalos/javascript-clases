const Datos = {
    nombre: "Nelson",
    apellido: "Avalos",
    edad: 23,
    altura: 1.85,
    ereDesarrollador: true
}
const DatosNombre = Datos.nombre;
console.log(DatosNombre);
const DatosP = [{
    nombre: "Nelson",
    apellido: "Avalos",
    edad: 23,
}]
const DatosPA = [{
        nombre : "Santiago",
        edad: 25
    },
    {
        nombre: "Thiago",
        edad: 21
    }

]

const DatosPersonales = [...DatosP, ...DatosPA]
console.log(DatosPersonales);

DatosPersonales.sort((a, b)=> a.edad - b.edad)
console.log(DatosPersonales);