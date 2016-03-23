// wait for DOM to load before running JS

var baseUrl = "https://api.spotify.com";
var endPoint = "/v1/search";

function getTracks(){
      $.ajax({
          // What kind of request
          method: "GET",
          // The URL for the request
          url: baseUrl + endPoint,
          // The data to send aka query parameters
          data: $("form").serialize(),
          // Code to run if the request succeeds;
          // the response is passed to the function
          success: onSuccess,
          // Code to run if the request fails; the raw request and
          // status codes are passed to the function
          error: onError
      });
    }

    function clearResults(element){
      $(element).remove();
    }

function onSuccess (json) {
  // console.log(json.data);
  console.log(json);
  clearResults("li");
  json.tracks.items.forEach(
    function logResults(result){
      console.log(result.name);
      $("#results ul").append(
        "<li>" + "Artist: " + result.artists[0].name +
        " // " + "Track: " +result.name + "</li>"
      );
    }
  );
}

function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.dir(xhr);
}



$(document).on('ready', function() {
  // check to make sure JS is loaded
  console.log('JS is loaded!');
////////////////////////// your code here vvvvvvv

//form click listener
$("form").on("submit",
  function (event){
    event.preventDefault();
    // clear previous resutls
    getTracks();
}
);


console.log ("queried: ?",$("form").serialize());



////////////////////////// your code here ^^^^

});
