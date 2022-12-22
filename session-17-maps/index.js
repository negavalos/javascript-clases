let marker, map

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const posicion2 = {
        lat:48.8583399178926, 
        lng: 2.2944908125588968
    }
    const posicion3 ={
        lat:43.72309154422707, 
        lng:10.396596997421792
    }

    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: posicion
    })

    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posicion Inicial"
    },
    {
        position: posicion2,
        map,
        title: "Posicion fav"
    },
    {
        position: posicion3,
        map,
        title: "Posicion fav"
    }
    )

    // marker.setPosition({ lat, lng })
    getPosicion()
}
function getPosicion() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centrarMap, onError, options)
    }else{
        alert("Tu navegador no admite geolocalizacion")
    }
    
}
function centrarMap(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("se ha producido un error");
    console.log(error);
}