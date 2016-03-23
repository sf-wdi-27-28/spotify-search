// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  // your code here
  $("form").on("submit", function (event){
  event.preventDefault();
  $("#results").empty()
  input();
});



function input() {
  $.ajax({

       // What kind of request
       method: "GET",

       // The URL for the request
       url: "https://api.spotify.com/v1/search",

       // The data to send aka query parameters
       data: $("form").serialize(),

       // Code to run if the request succeeds;
       // the response is passed to the function
       success: onSuccess,

       // Code to run if the request fails; the raw request and
       // status codes are passed to the function
       error: onError
   });



   function onSuccess(json) {
      console.log(json);
      var trackResults = json.tracks.items;
      trackResults.forEach(function(element) {
             $("#results").append("<li>" + element.name + " by " + element.artists[0].name +  "</li>");
             });
       }




   function onError(xhr, status, errorThrown) {
       alert("Sorry, there was a problem!");
       console.log("Error: " + errorThrown);
       console.log("Status: " + status);
       console.dir(xhr);
   }

}



});
