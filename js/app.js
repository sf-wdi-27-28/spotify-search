// wait for DOM to load before running JS
$(document).on('ready', function() {

  console.log('JS is loaded!');

  var apiUrl = 'https://api.spotify.com/v1/search?type=track';
  $('.goGet').on('submit', function (e){
    var data = $(this).sterialize();
    $.ajax({
      method: 'GET',
      url: apiUrl,
      success: onSuccess,
      error: noGood
    });
  });
  function onSuccess(searchResults){
    console.log("may data is" + searchResults);
  }

});
