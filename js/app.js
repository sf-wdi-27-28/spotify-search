
// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  $('#spotify-track').on("submit", function(e) {
    console.log('submit');
    e.preventDefault();
    var tracks = $('#spotify-track').serialize();


    $.ajax({
      method:'GET',
      url:"https://api.spotify.com/v1/search",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    });
  });



  function onSuccess(json){
    console.log(json);
    json.tracks.items.forEach( function(element){
      $('#results').append("<div>" + '<img src="' + element.album.images[2].url + '">' + " " + element.artists[0].name+ ", " + element.name + " " +'<a href="' + element.preview_url + "   "+
          '" target="_blank" class="btn btn-md btn-success">Preview ' + "</div>");
      console.log(target);
    });

  }

  function onError (xhr, status, errorThrown){
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.log(xhr);
  }
});
