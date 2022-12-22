const parrafos = document.querySelectorAll(".parrafos")
const sescciones = document.querySelectorAll(".seccion")
const deleteP = document.querySelectorAll(".delete");
console.log(deleteP);

parrafos.forEach(parrafo=>{
    parrafo.addEventListener("dragstart", event=>{
        console.log("estoy arrastrando el parrafo " + parrafo.innerHTML);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento = document.querySelector(".images-fantasma")
        event.dataTransfer.setDragImage(elemento, 0, 0)
    })
    parrafo.addEventListener("dragend", ()=>{
        // console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")
    })
})

sescciones.forEach(seccion=>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dopEffect= "link" // copy por defecto
        // console.log("drag over");
        //
    })
    seccion.addEventListener("drop", event=>{
        console.log("drop");
        const id_parrafo =  event.dataTransfer.getData("id");
        // console.log(id_parrafo);
        const parrafo = document.getElementById(id_parrafo)
        // console.log(parrafo);
        // seccion.append(parrafo)
        // seccion.prepend(parrafo)
        seccion.appendChild(parrafo)
        
    })
})
deleteP.forEach(removeP =>{
    removeP.addEventListener("dragover", event =>{
        event.preventDefault();
        // console.log("drag remove");
    })
    removeP.addEventListener("drop", event=>{
        const id_parrafo = event.dataTransfer.getData("id")
        const removeparrafo = document.getElementById(id_parrafo).remove();
        console.log(removeparrafo);
    })
})
console.log(parrafos);