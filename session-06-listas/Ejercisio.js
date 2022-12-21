const compra = ["Lavandina", "Harina", "Vasos", "Platos", "Yogurt"];
compra.push("Aceite de Girasol");
console.log(compra);

compra.pop();
console.log(compra);

const Peliculas = [
    {
    titulo: "Son como niños",
    director: "Dennis Dugan",
    fecha: new Date("July 22  2010")
    },
    {
        titulo: "Happy Gilmore",
        director: "Dennis Dugan",
        fecha: new Date("february 16 1996")
    },
    {
        titulo: "Garra",
        director: "Jeremiah Zagar",
        fecha: new Date("june 3 2022")
    }

]
console.log(Peliculas);

const filtrarPelicula = Peliculas.filter(Pelis=> new Date("January 1 2010") > Pelis.fecha)
console.log(filtrarPelicula);

const Directores = Peliculas.map(pelis=> pelis.director);
console.log(Directores);

const NombreP = Peliculas.map(Pelis => Pelis.titulo);
console.log(NombreP);

const Concatenacion = Peliculas.map(Pelis =>{
    return Pelis.director.concat("- ", Pelis.titulo);
})
console.log(Concatenacion);

const directoresPelis = ["Dennis Dugan", "Dennis Dugan", "Jeremiah Zagar"]
const titulosPelis = ["Son como niños", "Happy Gilmore", "Garra"];
const propagacion = [...directoresPelis, ...titulosPelis];
console.log(propagacion);