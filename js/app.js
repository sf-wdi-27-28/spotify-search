
// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  $("#spotify-track").on("click", function findSong(e){
    console.log(e);
    $.ajax({
      method:'GET',
      url:"https://api.spotify.com/v1/search",
      data: $(this).serialize(),
      success: onSuccess,
      error: onError
    });
  });

function onSuccess(json){
json.tracks.forEach( function findTracks(element){
   $('#results').append(element);
    console.log(json);
  });

  function onError (xhr, status, errorThrown){
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.log(xhr);
    }
  }
});
