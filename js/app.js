var spotify_api = "https://api.spotify.com/v1/search";
// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');



  $("#submit").on("click",function(e){
    e.preventDefault();
    getTracks();
  });

  // $("form").on("submit", function(e) {
  //     e.preventDefault();

  function getTracks(){

    $.ajax({
    method: "GET",
    url: spotify_api,
    // data: "query=blue&type=track",
    data: $("form").serialize(),
    success: onSuccess,
    // error: onError
    });
  }
  function onSuccess(json) {
  //  console.log(json.tracks.items);
    $("#results").empty();
    json.tracks.items.forEach(function(v,i){
       $("#results").append($("<p>Track Name: "+v.name+" by: "+v.artists[0].name+"</p>"));
       if (v.album.images[2].url !== null) {
          $("#results").append($("<img src="+v.album.images[2].url+">"));
       }
     });
  }


});
