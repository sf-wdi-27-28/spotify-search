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
    $('#results').append('<div><img src="' + element.album.images[2].url + '" class="img-rounded"></div>'+ '<div><p><strong>' + element.name + '</strong> by ' + element.artists[0].name + '</p></div></div><hr>');
  });
}

function onError(xhr, status, errorThrown) {
  alert("Sorry, there was a problem!");
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.dir(xhr);
}
