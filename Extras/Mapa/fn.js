var nombre, apellido = " ";
let latitud, longitud = 0;
let map= L.map("map").setView([-33.0079, -58.5224], 12);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
/*var marker = L.marker([51.5, -10.09]);*/
console.log("ready");

function generateUser(){
    const urlRandomUser="https://randomuser.me/api/?nat=ES";
    fetch(urlRandomUser)
        .then(response => response.json())
            .then(data => {
                console.log(data.results[0].location.coordinates.latitude);
                latitud = data.results[0].location.coordinates.latitude;
                longitud = data.results[0].location.coordinates.longitude;
                console.log(data.results[0].location.coordinates.longitude);
                nombre = data.results[0].name.first;
                apellido = data.results[0].name.last;
                document.getElementById("username").innerHTML = nombre+" "+apellido;
            });
}

function createMap(){
    /*map.flyTo([longitud, latitud], 13)*/
    map.panTo(new L.LatLng(latitud,longitud));
    marker = L.marker([latitud,longitud]).addTo(map);
    marker.bindPopup("<b>"+nombre+" "+apellido+"</b>").openPopup();
}
