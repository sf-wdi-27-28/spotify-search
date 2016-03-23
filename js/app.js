// wait for DOM to load before running JS

var spotifyApi = 'https://api.spotify.com/v1/search';

$(document).on('ready', function() {

  $('form').on("submit", function (event) {
    event.preventDefault();
    getTracks();
  });

  function getTracks () {
    $.ajax({
      method: 'GET',
      url: spotifyApi,
      data: $('form').serialize(),
      success: onSuccess,
      error: onError
    });
  }

  function onSuccess (dataFromServer) {
    console.log(dataFromServer);
    $('#results').html('');
    dataFromServer.tracks.items.forEach(function (item) {
      $('#results').append('<img src="' + item.album.images[1].url +'">');
      $('#results').append('<p>' + item.artists[0].name + '</p>');
      $('#results').append('<a href="' + item.artists[0].preview_url + '">'); //opens link in a new tab

    });
  }

  function onError (error) {
    console.log(error);
  }
});
