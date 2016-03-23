// wait for DOM to load before running JS
//
var spotifyUrl = 'https://api.spotify.com/v1/search?type=track';
$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');

  var spotifyForm = $('#spotify-form');//form used to search spotify API
  var spotifySearch = $('#searchbox');//input field for searching tracks
  var spotifyResult = $('#results');//place to hold results in web page

  spotifyForm.on("submit", function(evt) {
    evt.preventDefault();
    spotifyResult.empty();
    getData();
  });
  spotifyForm[0].reset();
  spotifySearch.focus();
});

function getData(){
  $.ajax({
      method: "GET",
      url: spotifyUrl,
      data: $('form').serialize(),
      success: onSuccess,
  });
}

function onSuccess(data) {
  var trackResults = data.tracks.items;
  console.log(trackResults);

  trackResults.forEach(function(result,index){
    var trackInfo = {
      artist: result.artists[0].name,
      name: result.name,
      previewUrl: result.preview_url
    };

    var trackDiv = '<br><div>' + trackInfo.name + " by " + trackInfo.artist + '</div><br>';
    $('#results').append(trackDiv);
  });
}
