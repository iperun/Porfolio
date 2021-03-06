// collapse nav bar when click

$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});

// google Maps

function myMap() {
  var myCenter = new google.maps.LatLng(27.9658533, -82.8001026);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: myCenter,
    zoom: 12
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter
  });
  marker.setMap(map);
}

// modal images

var modal = document.getElementById('myModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// Close when clicked outside image
myModal.onclick = function() {
  modal.style.display = "none";
}
