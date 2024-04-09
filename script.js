function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchResults");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "Sm grand central";
        
      } else {
        li[i].style.display = "none";
      }
    }
  }

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
    });
}
