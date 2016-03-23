// wait for DOM to load before running JS

$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here

  $('form').on("submit", function handleClick(event) {
    event.preventDefault();
    $('#results').text("");
    getSongs();
  });

  function getSongs() {
    $.ajax({
      method: "GET",
      url: "https://api.spotify.com/v1/search?type=track",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    });
  }

});

function onSuccess(json) {
  console.log(json.tracks.items);
  json.tracks.items.forEach(function (element){
    $("#results").append("<li>" + element.name + " by " + element.artists[0].name+ "</li>");
  });
}

function onError(xhr, status, errorThrown) {
  alert("Don't search for nothing!");
}
