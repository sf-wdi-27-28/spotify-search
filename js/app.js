// wait for DOM to load before running JS
$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    getInfo();
  });
  // check to make sure JS is loaded
  console.log('JS is loaded!');
function getInfo() {
  $.ajax({
    method: "GET",
    url: 'https://api.spotify.com/v1/search',
    data: $('form').serialize(),
    success:getTrackInfo,
    error:onError
  });
}
});


function getTrackInfo(blarg) {
  $('.info').remove();
  blarg.tracks.items.forEach(function(element){
    $('#results').append('<li class="info">' + element.name + ' by ' + element.artists[0].name + '</li>');
  });
}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}
