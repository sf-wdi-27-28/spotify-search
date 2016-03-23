// wait for DOM to load before running JS
$(document).on('ready', function() {

  var spoUrl= "https://api.spotify.com/v1/search";

  $(".Search").on("submit", function (data) {
    event.preventDefault();
getSongs();
   $("#results").append( "<ul>"+"<il>" + json.tracks.album.id + "</li>"+"</ul>" );


  });
  // check to make sure JS is loaded
  console.log('JS is loaded!');


function getSongs() {
  $.ajax(
              {
    method: 'GET',
       url: spoUrl,
    data: $(".Search").serialize(),
    success: onSuccess
                }

  );
}
});

function onSuccess(json) {
  console.log(json.tracks.items.album);
  console.log(json);
}
