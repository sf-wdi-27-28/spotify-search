// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  // your code here

  function getTracks() {

    var spotify_endpoint = "https://api.spotify.com/v1/search";
    // var searchQuery = $("#track").val();
    // var typeQuery = "&type=track";
    // var dataString = searchQuery + typeQuery;

    var response = $.ajax({
      method: "GET",
      url: spotify_endpoint,
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    });

  }

  // function getArtists(artists) {
  //   artists.forEach(function(element) {
  //     return element.name;
  //   });
  // }

  function onSuccess(response) {
    console.log(response);
    $("#results").text("");
    $("#searchResults").append("<h2>Results for: " + $("#track").val() + "</h2>");
    response.tracks.items.forEach(function(element) {
      $("#results").append("<div class='container'><div class='row'><div class='col-sm-3 albumArt'><img src=" + element.album.images[1].url + "></div><div class=col-sm-9><div class='col-sm-3 song'><p>Song: "+element.name+"</p></div><div class='col-sm-3 album'><p>Album: "+element.album.name + "</p></div><div class='col-sm-3 artist'><p>Artist: " + element.artists[0].name + "</p></div><div class='col-sm-3 play'><a href=" + element.preview_url + ">Play</a></div></div></div>");
    });
  }

  var search = $("form").on("submit", function(e) {
      e.preventDefault();
      getTracks();
  });


  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
  }

});
