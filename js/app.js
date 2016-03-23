// wait for DOM to load before running JS


$(document).on('ready', function() {

  // check to make sure JS is loaded
    console.log('JS is loaded!');


    $('form').on("submit", function handleClick(event) {
      event.preventDefault();
      $('#results').text("");
      getSongs();
    });
  // your code here

  // $('form').on('submit', function(event) {
  //     event.preventDefault();
  //     // $('.gif-gallery').html('');
  //     getSongs();
  // });
  //When a user submits the form, use jQuery to get the search keyword from the form input.

});

//var albumArt = ;
// var $artistName = json.tracks.items[0].artists[0].name;
// var $songTitle = json.tracks.items[1].name;


function onSuccess(x) {
  x.tracks.items.forEach(function (element){
    $('#results').append('<p>' + element.name + ' by '+ element.artists[0].name + '</p>');
    });
  }

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    // console.log("Error: " + errorThrown);
    // console.log("Status: " + status);
    // console.dir(xhr);
}

function getSongs() {
      $.ajax({
          method: "GET",
          url: "https://api.spotify.com/v1/search?type=track",
          data: $("form").serialize(),
          success: onSuccess,
          //error: onError
      });
}
