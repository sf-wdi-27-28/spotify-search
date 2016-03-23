// wait for DOM to load before running JS
var spotifyTracks = "https://api.spotify.com/v1/search?type=track&q=";

$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

function getTrack() {

        $.ajax({
          // What kind of request
        method: "GET",
          // The URL for the request
          url: spotifyTracks,
          // Code to run if the request succeeds;
          // the response is passed to the function
          success: function (data){
            var songs = data.tracks.items;
            console.log(songs);
            if(songs.length > 0) {
              songs.forEach(function (results, index){
                var songData = {
                  albumArt: data.album.images.length[0],
                  artist: data.artists[0].name,
                  name: data.name,
                  popularity: data.popularity,
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
  }
var search = $("#search");


var results = $("#results");



var loading = $("#loading");

$results.append($songData);
});


  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
  }


  });


});
