// wait for DOM to load before running JS
$(document).on('ready', function() {

    // check to make sure JS is loaded
    console.log('JS is loaded!');


    // variable used to find a song through spotify
    var $track = $('#track');
    // element to hold results from spotify API
    var $results = $('#results');
    // variable to load gif
    var $loading = $('#loading');

    // variable used to search spotify API
    var $spotifySearch = $('#spotify-search');
    // function to search spotify API with event listener
    $spotifySearch.on('submit', function handleFormSubmit(event) {
        event.preventDefault();
        $results.empty();
        // variable used to save data
        var searchTrack = $track.val();
        // only search if the form had a keyword to search with!
        if (searchTrack !== "") {
            // show loading gif
            $loading.show();
            // variable is used to search for songs thorugh spotify's url
            var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;
            // used ajax to request content from spotify's url by
            // using the GET method
            $.ajax({
                method: 'GET',
                url: searchUrl,
                success: handleSpotifyData
            });
        } else {
            // alert's the user to enter a key word to search for songs
            alert("Enter a keyword to search!");
        }

        $spotifySearch[0].reset();
        $track.focus();
    });


    // handles data received from spotify
    function handleSpotifyData(data) {
        console.log("received data:", data);
        // track results are in an array called `items`
        // which is nested in the `tracks` object
        var trackResults = data.tracks.items;
        console.log(trackResults);
        // hide loading gif
        $loading.hide();
        // only append results if there are any
        if (trackResults.length > 0) {
            // iterate through results
            trackResults.forEach(function(result, index) {
                // build object of data we want in our view
                var trackData = {
                    albumArt: result.album.images.length > 0 ? result.album.images[0].url : null,
                    artist: result.artists[0].name,
                    name: result.name,
                    previewUrl: result.preview_url
                };

                // this part of the solution is still a little unclear.. especially
                // with the single and double quotation marks and how each part
                // from the html ties in with the whole variable to be appended
                var $trackHtml = '<div class="row"><div class="col-xs-4">' +
                    '<img src="' + trackData.albumArt + '" class="img-responsive"></div>' +
                    '<div class="col-xs-8"><p><strong>' + trackData.name + '</strong> by ' +
                    trackData.artist + '</p><p><a href="' + trackData.previewUrl +
                    '" target="_blank" class="btn btn-sm btn-default">Preview ' +
                    '<span class="glyphicon glyphicon-play"></span></a></p></div></div><hr>';
                // append HTML to the view
                $results.append($trackHtml);
            });
            // this else statement lets user know if there is no result,
            //to print "No results" on search bar.
        } else {
            $results.append('<p class="text-center">No results</p>');
        }
    }


});
