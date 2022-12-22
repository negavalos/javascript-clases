const htexto = document.getElementById("h-texto")

console.log(htexto)

htexto.addEventListener("cambioTexto", evento =>{
    console.log(evento.detail);
    htexto.innerText = evento.detail.texto
    htexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    htexto.dispatchEvent(evento);
}