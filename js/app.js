function getTrackInfo(){
  $.ajax({

      // What kind of request
      method: "GET",

      // The URL for the request
      url: 'https://api.spotify.com/v1/search?type=track',

      // The data to send aka query parameters
      data: $("form").serialize(),

      // Code to run if the request succeeds;
      // the response is passed to the function
      success: onSuccess,

      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      error: onError
  });
}

function onSuccess(json) {
  console.log(json);
  json.tracks.items.forEach(function(element){
      $('#results').append('<div>' + element.name + ' By ' + element.artists[0].name + '</div>');
    //});
  });
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}

function clearResults(){
  $("#results div").remove();
}

$(document).on("ready", function(){
  console.log("JS working!");
  $("form").on("submit", function(event){

    event.preventDefault();
    clearResults();
    getTrackInfo();
  });
});
