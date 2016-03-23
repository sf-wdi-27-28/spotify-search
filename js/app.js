// wait for DOM to load before running JS
$(document).on('ready', function() {

  console.log('JS is loaded!');

  var apiUrl = 'https://api.spotify.com/v1/search?type=track&q=';
  $('.goGet').on('submit', function (e){
    $('.result').remove();
    var searchTrack = $('#special').val();
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: apiUrl+searchTrack,
      success: onSuccess,
      error: noGood
    });
  });
  function onSuccess(searchResults){
    var path = searchResults.tracks.items;
    console.log("may data is", searchResults);
    console.log(searchResults.tracks.items);
    path.forEach(function (e){
      $('#results').append("<li class='result'>"+e.artists[0].name+": "+e.name+"</li>");
    });
  }
  function noGood(mess){
    console.log("no");
  }

}); //end of doc ready
