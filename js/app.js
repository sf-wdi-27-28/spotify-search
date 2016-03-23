// wait for DOM (document object model) to load before running JS
$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');

//form to search spotify API
var $searchSpotify = $('#spotify-search');

//input field for track (song)
var $trackField = $('#track');

//element to hold results from spotify API
var $results = $('#results');

//load gif
var $loadingGif = $('#loading');

//submit form to search spotify API -
$searchSpotify.on('submit', function handleFormSubmit(event){
  event.preventDefault();

  //empty previus results
  $results.empty();


  //save form data to variable
  var searchTrack = $trackField.val();

//only search if the form had a keyword to search with!
if (searchTrack !== "") {
  //show load gif
  $loadingGif.show();




//spotify search URL
var searchUrl = 'https://api.spotify.com/v1/search?type=track&q=' + searchTrack;

//use AJAX to call spotify api
$.ajax({
  method: 'GET',
  url: searchUrl ,
  success: handleSpotifyData  // see this function defined below
});
}else {
  //remind the user to enter a keyword
  //one way is a "quick and ugly" alert
  alert("enter keyword to search!");
}
//reset the form
$searchSpotify[0].reset();
$trackField.focus();
});

//handles data received from spotify
function handleSpotifyData(data) {
  console.log("received data:", data);

  //track results are in an array called 'items'
  // which is nested in the 'tracks' objectvar trackResults=data.tracks.items;
  var trackResults= data.tracks.items;
  console.log(trackResults);

  //hide loading gif
  $loadingGif.hide();

  // only append results if there are any
  if (trackResults.length > 0){

    //iterate through results
    trackResults.forEach(function (result, index){

      ///build object of data we want in our view
    var trackData = {

      albumArt: result.album.images.length>0 ? result.album.images[0].url : null,
      artists: result.artists[0].name,
      name: result.name,
      previewUrl: result.preview_url
    };
      //use data to construct HTML we want to show
      var $trackHtml = '<div class="row"><div class="col-xs-4">' + '<img src = "' + trackData.albumArt + '" class= img-responsive"></div>' + '<div class="col-xs-8"><p><strong>' + trackData.name + '<strong> by ' + trackData.artist +'</p><p><a href="' +trackData.previewUrl  + '" target = "_blank" class = "btn btn-sm btn-default"> Preview '+ '<span class="glyphicon glyphicon-play"></span></a></p><div></div><hr>';

      //append HTML to the view
      $results.append($trackHtml);

});
// else let user know there are no results
    } else {
      $results.append('<p class ="text=center> No results :(</p>');
    }
  }
});
