var searchTracks = "https://api.spotify.com/v1/search";
// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  $.ajax({
    method: "GET",
    url: searchTracks,
    data: {
      api_key: '6rqhFgbbKwnb9MLmUQDhG6',
      q: 'drake',
      type: 'track',
    },
    success: onSuccess,
    error: onError
  });
  // your code here
  $('.btn').on('click', function(event){});
});

function onSuccess(json){
  for (var i=0;i<json.tracks.items[0].artists.length;i++){
    console.log(json.tracks.items[0].artists[i].name);
  }
  console.log("Track name:", json.tracks.items[0].name);
}

function onError(xhr, status, errorThrown){
  console.log("Error: " + errorThrown);
  console.log("Status: " + status);
  console.log(xhr);
}
