// wait for DOM to load before running JS
$(document).on('ready', function() {

  console.log('JS is loaded!');

  var apiUrl = 'https://api.spotify.com/v1/search?type=track&q=';
  $('.goGet').on('submit', function (e){
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
    console.log("may data is", searchResults);
    
  }
  function noGood(mess){
    console.log("no");
  }

}); //end of doc ready
