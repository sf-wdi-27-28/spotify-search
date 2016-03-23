// wait for DOM to load before running JS
$(document).on('ready', function() {

  var searchUrl = "https://api.spotify.com/v1/search";

  $("form").on("submit", function (event){
    event.preventDefault();
    $("#result").empty();
    input();
  });
  // check to make sure JS is loaded
  console.log('JS is loaded!');
  function input(){
    $.ajax({
      method: "GET",
      url: searchUrl,
      data: {
        api_key: '6rqhFgbbKwnb9MLmUQDhG6',
        q: $("#song").val(),
        type: 'track',
      },
      success: onSuccess,
      error: onError
    });
  }
  // your code here
  // trying to print out artist name and track.
  // it was working but something happened and I don't know how to fix it
function onSuccess(json) {
  for (var i=0;i<json.tracks.items[0].artists.length;i++){
    console.log(json.tracks.items[0].artists[i].name);
  }
  console.log("Track name:", json.tracks.items[0].name);
  }

    function onError(xhr, status, errorThrown){
      alert("Sorry, please try again!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.log(xhr);
    }
  });
