

var nearbyPlaces = [
    { 
        name: "Baclaran Church", 
        details: "Baclaran Church is a famous Catholic church located in Baclaran, Parañaque.", 
        station: "Baclaran",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Baclaran_Church_2024-03-06.jpg/800px-Baclaran_Church_2024-03-06.jpg", // Replace with actual image URL
        location: "Baclaran, Parañaque",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8590.911865589587!2d120.98699892815381!3d14.531707077838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9515d3b485b%3A0xe28d786a0ffecaf8!2sNational%20Shrine%20of%20Our%20Mother%20of%20Perpetual%20Help!5e0!3m2!1sen!2sph!4v1712685710022!5m2!1sen!2sph"
    },
    
    { 
        name: "Sm Mall of Asia", 
        details: "biggest mall", 
        station: "Edsa",
        image: "https://www.smsupermalls.com/data/uploads/2018/06/Mall_of_Asia_medium.jpg", // Replace with actual image URL
        location: "Baclaran, Parañaque",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.1183487907792!2d120.97936827324374!3d14.535222378677679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cbfc84288ed7%3A0xe842057d2e701f9b!2sSM%20Mall%20of%20Asia!5e0!3m2!1sen!2sph!4v1712687969767!5m2!1sen!2sph" 
    },

    { 
        name: "Sm Grand Central", 
        details: "mall in monumento", 
        station: "Yamaha Monumento",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/09/SM_City_Grand_Central_%28November_18%2C_2023%29.jpg", // Replace with actual image URL
        location: "Baclaran, Parañaque",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.019592076087!2d120.98247382324647!3d14.654829325750374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b544f5db5415%3A0x2c76545960a25f83!2sSM%20City%20Grand%20Central%20Mall%20NCR!5e0!3m2!1sen!2sph!4v1712688328616!5m2!1sen!2sph" 
    },
    
    // Add more nearby places here...
];

function search() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    var results = document.getElementById('searchResults');
    results.innerHTML = '';

    nearbyPlaces.forEach(function(place) {
        if (place.name.toLowerCase().includes(query) || place.details.toLowerCase().includes(query) || place.location.toLowerCase().includes(query)) {
            var li = document.createElement('li');
            li.innerHTML = '<div><img src="' + place.image + '" class="place-image"></div>' +
                           '<div><h3>' + place.name + '</h3><p>' + place.details + '</p>' +
                           '<p>Close to: ' + place.station + ' Station</p>' +
                           '<p>Location: ' + place.location + '</p>' +
                           '<iframe src="' + place.map + '" class="map-image"></iframe>' +
                           '<div class="path-overlay"><div class="path-line"></div></div></div>';
            results.appendChild(li);

            // Draw path
            var pathOverlay = li.querySelector('.path-overlay');
            var pathLine = pathOverlay.querySelector('.path-line');
            var pathCoordinates = place.pathCoordinates;
            var mapImage = li.querySelector('.map-image');
            var mapWidth = mapImage.offsetWidth;
            var mapHeight = mapImage.offsetHeight;

            var path = '';
            pathCoordinates.forEach(function(coord, index) {
                var x = (coord.lng - pathCoordinates[0].lng) * mapWidth / (pathCoordinates[pathCoordinates.length - 1].lng - pathCoordinates[0].lng);
                var y = mapHeight - (coord.lat - pathCoordinates[0].lat) * mapHeight / (pathCoordinates[pathCoordinates.length - 1].lat - pathCoordinates[0].lat);
                path += (index === 0 ? '' : ' ') + x + ',' + y;
            });

            pathLine.style.width = mapWidth + 'px';
            pathLine.style.height = mapHeight + 'px';
            pathLine.style.clipPath = 'polygon(' + path + ')';
        }
        
        // Initialize the platform object:
var platform = new H.service.Platform({
    apikey: 'aDtX3ibjZWvKSICCzDEfFgA-ypVZ2gAQBiHCrl4v1Tw'
});

// Obtain the default map types from the platform object
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 12.5,
        center: { lat: 14.5995, lng: 120.9842 } // Centered around Manila
    });

// Add basic event listeners for map zooming and panning
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Add basic UI controls
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Define LRT-1 stations with their coordinates
var stations = [
    { name: 'Baclaran', coords: { lat: 14.5342, lng: 120.9983 } },
    { name: 'EDSA', coords: { lat: 14.5387, lng: 121.0007 } },
    { name: 'Libertad', coords: { lat: 14.5477, lng: 120.9986 } },
    { name: 'Gil Puyat', coords: { lat: 14.5543, lng: 120.9971 } },
    { name: 'Vito Cruz', coords: { lat: 14.5634, lng: 120.9948 } },
    { name: 'Quirino', coords: { lat: 14.5703, lng: 120.9915 } },
    { name: 'Pedro Gil', coords: { lat: 14.5765, lng: 120.988 } },
    { name: 'UN Avenue', coords: { lat: 14.5824, lng: 120.9847 } },
    { name: 'Central Terminal', coords: { lat: 14.5927, lng: 120.9816 } },
    { name: 'Carriedo', coords: { lat: 14.5989, lng: 120.9813 } },
    { name: 'Doroteo Jose', coords: { lat: 14.6053, lng: 120.982 } },
    { name: 'Bambang', coords: { lat: 14.6112, lng: 120.9825 } },
    { name: 'Tayuman', coords: { lat: 14.6166, lng: 120.9827 } },
    { name: 'Blumentritt', coords: { lat: 14.6226, lng: 120.9836 } },
    { name: 'Abad Santos', coords: { lat: 14.6306, lng: 120.9814 } },
    { name: 'R. Papa', coords: { lat: 14.6361, lng: 120.9823 } },
    { name: '5th Avenue', coords: { lat: 14.6443, lng: 120.9836 } },
    { name: 'Monumento', coords: { lat: 14.6542, lng: 120.9838 } },
    { name: 'Balintawak', coords: { lat: 14.6574, lng: 121.0037 } },
    { name: 'Roosevelt', coords: { lat: 14.6575, lng: 121.0211 } }
];

// Add markers for each LRT-1 station
stations.forEach(function (station) {
    // Create a marker
    var marker = new H.map.Marker(station.coords);
    // Add the marker to the map
    map.addObject(marker);
    
    });
}
