// wait for DOM to load before running JS
//url that will tell ajax to go to THIS API

var spotify_endpoint = 'https://api.spotify.com/v1/search?type=track&';
var $results = $("#results");

$(document).on('ready', function() {
  var $spotifySearch = $('#spotify-search');
  var $song = $('#song');

  $("form").on("submit", function(e){
      e.preventDefault();             //prevent default when submit button is pressed

      $.ajax({
        type: 'GET',
        url: spotify_endpoint,
        data: $("form").serialize(),
        dataType: 'json',
        success: onSuccess,
      });
  // check to make sure JS is loaded
  console.log('JS is loaded!');

  $spotifySearch.on('submit', function handleSpotify(event){
    $results.empty();

    $.ajax({
      type: 'GET',
      url: spotify_endpoint,
      data: $("form").serialize(),
      dataType: 'json',
      success: onSuccess,
    });
  });

  function onSuccess(json){
    console.log("results", json);
    var trackArray = json.tracks.items;
    console.log(trackArray);

    if (trackArray.length > 0) {

      trackArray.forEach(function (result, index) {

        var trackData = {
          albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
          artist: result.artists[0].name,
          name: result.name,
          previewUrl: result.preview_url
        };
        var $trackHtml = '<div class="row"><div class="col-xs-4">' +
          '<img src="' + trackData.albumArt + '" class="img-responsive"></div>' +
          '<div class="col-xs-8"><p><strong>' + trackData.name + '</strong> by ' +
          trackData.artist + '</p><p><a href="' + trackData.previewUrl +
          '" target="_blank" class="btn btn-sm btn-default">Preview ' +
          '<span class="glyphicon glyphicon-play"></span></a></p></div></div><hr>';

        $results.append($trackHtml);
      });
    }
  }
});
});
