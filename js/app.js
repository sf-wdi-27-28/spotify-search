// wait for DOM to load before running JS
$(document).on('ready', function() {

  $("form").on("submit", function (event) {
    event.preventDefault();
    $("#track").empty();
    callTrack();
  });

  function callTrack() {
    $.ajax({
      type: 'GET',
      url: "https://api.spotify.com/v1/search",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError,
    });

    function onSuccess(data) {
      console.log(data.tracks.items);
      data.tracks.items.forEach(function(element) {
        $("#tracks").append("<li>" + element.artists[0].name + " - " + element.name+"</li>");
      });
    }

    function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    }
  }

});
