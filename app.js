var map = L.map('map').setView([-25.89433263622624, 28.051609423129026], 13);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    var barC = document.getElementById('barC').value;
    var barC1 = 123456789;
    var coords1 = [-25.5, 28.5];
    var barC2 = 123456788;
    var coords2 = [-25.0, 28.0];
    var barC3 = 123456787;
    var coords3 = [-25.5, 29];

    if (barC == barC1) {

    var arr = [];
    arr.push(position.coords.latitude);
    arr.push(position.coords.longitude); 
    
L.Routing.control({
    waypoints: [
        L.latLng(arr[0], arr[1]),
        L.latLng(coords1[0], coords1[1])
    ],
    routeWhileDragging: false
}).addTo(map);

// second coordinates
}else if (barC == barC2) {
    var arr = [];
    arr.push(position.coords.latitude);
    arr.push(position.coords.longitude); 
    
L.Routing.control({
    waypoints: [
        L.latLng(arr[0], arr[1]),
        L.latLng(coords2[0], coords2[1])
    ],
    routeWhileDragging: false
}).addTo(map);

// third coordinates
}else if (barC == barC3) {
    var arr = [];
    arr.push(position.coords.latitude);
    arr.push(position.coords.longitude); 
    
L.Routing.control({
    waypoints: [
        L.latLng(arr[0], arr[1]),
        L.latLng(coords2[0], coords2[1])
    ],
    routeWhileDragging: false
}).addTo(map);
}else
console.log('Location cannot be found');
}
