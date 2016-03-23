var spotifyApi = "https://api.spotify.com/v1/search";


// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here

  $("#Spotify-Search").on("submit",function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: spotifyApi,
      data: $(this).serialize(),
      success: onSuccess,
      error: onError
    });
  });

});

function onSuccess(json){
  removeSongList();
  createSongList(json);
}

function onError(xhr, status, errorThrown){
  console.log('Error',xhr,status,errorThrown);
}

function createSongList(json){
  for(var i = 0; i < 20; i++){
    if(json.tracks.items[i].album.images[0]){
      var str = '<div class="row songs">' +
                '<img class="img-responsive col-xs-2" src="' + json.tracks.items[i].album.images[0].url + '">' +
                '<p class="track col-xs-7"><span>' + json.tracks.items[i].name + '</span> by ' + json.tracks.items[i].artists[0].name + '</p>' +
                '<a class="btn btn-success btn-sm col-xs-2 preview" role="button" href="' + json.tracks.items[i].preview_url + '" >Preivew</a>' +
                '</div>';
      $("#results").append(str);
    }else{
      var str2 =
      '<div class="row songs">' +
                '<img class="img-responsive col-xs-2" src="http://megaicons.net/static/img/icons_sizes/44/116/64/app-spotify-icon.png">' +
                '<p class="track col-xs-7"><span>' + json.tracks.items[i].name + '</span> by ' + json.tracks.items[i].artists[0].name + '</p>' +
                '<a class="btn btn-success btn-sm col-xs-2 preview" role="button" href="' + json.tracks.items[i].preview_url + '" >Preivew</a>' +
                '</div>';
      $("#results").append(str2);
    }
  }
}

function removeSongList(){
  for(var i = 0; i < 20; i++){
    $(".songs").remove();
  }
}
