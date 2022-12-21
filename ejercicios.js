const nombre = "nelson";
const edad = 23;
const desarrollador = true;
const fecha_nacimiento = new Date("January 4 1999");
const libroFav = {
    titulo: "Libro Fuego Y Sangre",
    autor: "George R. R. Martin",
    fecha: new Date("2018"),
    url: "https://www.mercadolibre.com.ar/libro-fuego-y-sangre-por-george-r-r-martin/p/MLA19861198?pdp_filters=item_id:MLA1272359172#is_advertising=true&searchVariation=MLA19861198&position=1&search_layout=stack&type=pad&tracking_id=28b119e7-06cd-468f-90b5-c3bd0be8b699&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MTQ3M2I1ZjItZTZhNS00ZTViLWE4MDMtZGQ0OTQwOGVkMTA1"
}
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("¿Eres desarrollador? "+ desarrollador);
console.log("Fecha de nacimiento: " + fecha_nacimiento);
console.log("Libro favorito: "+ libroFav.titulo,"|| autor: "+libroFav.autor, "|| Fecha de publicacion:" + libroFav.fecha, "|| Url:" + libroFav.url );