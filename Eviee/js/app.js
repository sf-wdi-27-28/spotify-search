$(document).on('ready', function() {
  console.log('JS is loaded!');

  var $appleSearch = $('#appleSearch');

  var $term = $('term');

  var $results = $('#results');

  var $loading = $('#loading');


  $appleSearch.on('submit', function handleFormSubmit(event) {
    event.preventDefault();

    $results.empty();

    var searchTerm = $term.val();

    if (searchTerm !== ""){
      $loading.show();

      // errors says im lockedout
      var searchUrl = 'https://itunes.apple.com/search?' + searchTerm;


      $.ajax({
        method: 'GET',
        url: searchUrl,
        success: handleAppleData,
      });
    } else {

      alert("Search for something dude!");
    }

    $appleSearch[0].reset();
    $term.focus();
  });


  // handles data received from spotify
  function handleAppleData(data) {
    console.log("received data:", data);
    // track results are in an array called `items`
    // which is nested in the `tracks` object
    var termResults = results.artistName.collectionName.collectionExplicitness.trackName.artworkUrl30.previewUrl.artistViewUrl;
    console.log(termResults);

    // hide loading gif
    $loading.hide();

    // only append results if there are any
    if (termResults.length > 0) {

      // iterate through results
      termResults.forEach(function (result, index) {

        // build object of data we want in our view
        var termData = {
          albumArt: results.artworkUrl30,
          artist: results.artistsName,
          name: results.collectionName,
          track: results.trackName,
          previewUrl: results.preview.Url
        };

        var $trackHtml = '<div class="row"><div class="col-xs-4">' +
          '<img src="' + results.artworkUrl30 + '" class="img-responsive"></div>' +
          '<div class="col-xs-8"><p><strong>' + results.trackName + '</strong> by ' +
          results.artistName + '</p><p><a href="' + trackData.previewUrl +
          '" target="_blank" class="btn btn-sm btn-default">Preview ' +
          '<span class="glyphicon glyphicon-play"></span></a></p></div></div><hr>';

        $results.append($trackHtml);
      });

    } else {
      $results.append('<p class="text-center">No results</p>');
    }
  }

});
