// wait for DOM to load before running JS
$(document).on('ready', function() {
  console.log('JS is loaded!');

  var $spotifySearch = $('#spotify-search');
  var $track = $('#track');
  var $results = $('#results');
  var $loading = $('#loading');
  var source = $('#tracks-template').html();
  var template = Handlebars.compile(source);

  $spotifySearch.on('submit', function handleFormSubmit(event) {
    event.preventDefault();
    $results.empty();

    var searchTrack = $track.val();

    if (searchTrack !== ""){
      $loading.show();
      var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;
      $.ajax({
        url: searchUrl,
        method: 'GET',
        success: renderSpotifyData
      });
    } else {
      alert("Please enter a keyword to search");
    }

    $spotifySearch[0].reset();
    $track.focus();
  });


  function renderSpotifyData(data) {
    var trackResults = data.tracks.items;
    console.log(trackResults);
    $loading.hide();

    var trackHtml = template({ tracks: trackResults });
    $results.append(trackHtml);
  }
});
