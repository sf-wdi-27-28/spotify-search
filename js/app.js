var spotify_api = "https://api.spotify.com/v1/search";

// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  $("form").on("submit", function(event){
    event.preventDefault();
    searchTrack();
  });

function searchTrack(){
  $.ajax({
    method: "GET",
    url: spotify_api,
    data: $("form").serialize(),
      success: onSuccess,
      error: onError
  });
}

function onSuccess(json){
  console.log(json);
  $('#results').val(); //not working as expected
  var trackResults = json.tracks.items;
  trackResults.forEach(function(element) {
   $("#results").append('<ul>"' + element.name + '" - ' +
   element.artists[0].name + '</>');
   // bug: searching by artist also populates #results when there aren't enough
  //  song titles
});
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}

});
