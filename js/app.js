// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
var spoUrl= "https://api.spotify.com/v1/search";


  $.ajax(
              {
    method: 'GET',
       url: spoUrl,
    artists: {
          q:"artistName",
       type:"track",
            },
    dataType: "json",
    success: onSuccess
              }

);
});
$(".Search").on("submit", function () {
  event.preventDefault();
  $("#result").append("<ul>"+"<il>" + json.artists.items  +"</li>"+"</ul>");

  console.log(json.artists);
});
function onSuccess() {
console.log();
}
