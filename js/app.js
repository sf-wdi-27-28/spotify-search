var spotifyApi = "https://api.spotify.com/v1/search";

// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  getSearchResults();

$("input").on("submit", function(e) {
  e.preventDefault();

  getSearchResults();
});
});


  // your code here
  function getSearchResults() {
  $.ajax({
    method: "GET",
    url: spotifyApi,
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });
}
