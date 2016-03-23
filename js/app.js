// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here
  var spotApi = "https://api.spotify.com/v1/search?type=track&q=";

  $(".search").on("submit", function listen(event) {
    var data = $("#value").val();
    event.preventDefault();
    console.log(data);
    $.ajax({
      method: 'GET',
      url: spotApi + data,
      success: onSuccess,
      error: onError
      });
    });
});

function onSuccess(json){
  console.log(json);
  var path = json.tracks.items;
  path.forEach(function (element){
    $("#results").append("<li>" + element.artists[0].name + "-" + element.name +"</li>");
  });
}

function onError(xhr, status, errorThrown){
  console.log('Error',json, status, errorThrown);
}
