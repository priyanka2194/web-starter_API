function initMap(){
  var uluru = {lat: 18.507024, lng: 73.849575};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: "Hello Tony! Welcome to Pune!"
  });
  infowindow.open(map,marker);

}
