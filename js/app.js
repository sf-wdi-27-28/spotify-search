// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here
  $.ajax({
      method: "GET",
      url: "https://api.spotify.com/v1/search",
      tracks: $("form").serialize(),
      success: onSuccess,
      error: onError

  });

function onSuccess( json ) {
    console.log(json);
    // for (i=0;i<25;i++){
      $('#results').append('<img src =' + json.items.albums.images.url + '>');
    // }
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}

console.log("form");
});
