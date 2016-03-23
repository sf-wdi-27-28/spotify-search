// wait for DOM to load before running JS
$(document).on('ready', function() {

// form submit function to feed into onSuccess function
  $("form").on("submit", function (event) {
    event.preventDefault();
    $("#tracks").empty();
    callTrack();
  });

// wrap ajax call into callTrack function
  function callTrack() {
    $.ajax({
      type: 'GET',
      url: "https://api.spotify.com/v1/search",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError,
    });

// define onSuccess function to append and create list item with artist name and song title
// and album art
    function onSuccess(data) {
      data.tracks.items.forEach(function(element) {
        $("#tracks").append(element.artists[0].name + " - " +
        element.name + "<p>" + '<img src="' +
        element.album.images[2].url + '">' + "</p>");

      });
    }

// define function for onError
    function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    }
  }

});
