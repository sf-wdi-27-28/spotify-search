// wait for DOM to load before running JS
//
var spotifyUrl = 'https://api.spotify.com/v1/search?type=track';
$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');

  var spotifyForm = $('#spotify-form');//form used to search spotify API
  var spotifyResult = $('#results');//place to hold results in web page

  spotifyForm.on("submit", function(evt) {
    evt.preventDefault();
    spotifyResult.empty();
    getData();
  });
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
      image: result.album.images[0].url,
      artist: result.artists[0].name,
      name: result.name,
      previewUrl: result.preview_url
    };

    var trackDiv =
    '<br><br><div><strong>' + trackInfo.name + '</strong> by ' + trackInfo.artist + '<strong></div><br>' +
    '<br><div><p><a href="' + trackInfo.previewUrl + '" target="_blank" class="btn btn-sm btn-default">Preview ' +
	  '<span class="glyphicon glyphicon-play"></span></a></p></div><br>'+
    '<br><div><img class="centerme" src="' +trackInfo.image + '">' + '</div><br>';

    $('#results').append(trackDiv);
  });
}
