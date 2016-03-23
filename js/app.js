var spotify_api = "https://api.spotify.com/v1/search?type=track";

// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here
  $("form").on("submit", function(e) {
  e.preventDefault();

  getTrack();
});


//sending a GET request to spotify api
  function getTrack(){
    $.ajax({
      method: "GET",
      url: spotify_api,
      data: $("form").serialize(),
      success: onSucess,
      error: onError
    });
  }

//jQuery request
  function onSucess(x){
    console.log(x.tracks.items);

    x.tracks.items.forEach(function(element){
      $("#results").append("<li>" + element.artists[0].name+ "-" + element.name + "</li>");
    });
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }

});
