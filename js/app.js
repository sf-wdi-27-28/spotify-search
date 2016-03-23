var spotify_api_endpoint = "https://api.spotify.com/v1/search?";

// wait for DOM to load before running JS

$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');

  function getTrack() {$.ajax({
        method: "GET",
        url: spotify_api_endpoint,
        data: $("form").serialize(),
        success: onSuccess,
        error: onError
    });
  }

  function onSuccess(json) {
    json.tracks.items.forEach(function (el) {
      var images = "<img src="+el.album.images[1].url+">";
      var nameAndArtist = el.name+" by "+el.artists[0].name;
      var previewURL = "<p><a href="+el.preview_url+" target='_blank'>Preview Song in New Tab</a></p>";
      if (images) {
        $('#results').append("<div><h1>"+images+"</br>"+nameAndArtist+"</h1>"+previewURL+"</div");
        } else {
          $('#results').append("<div><h1>"+nameAndArtist+"</h1>"+previewURL+"</div>");
        }
      });
    }

  function onError() {
      alert("Enter a song name to search.");
  }

  $('.submitButton').on('click', function handleClick(event) {
    event.preventDefault();
    $('#results').text("");
    getTrack();
  });


});
