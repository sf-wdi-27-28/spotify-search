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
      json.tracks.items.forEach(function(element) {
            $("#results").append("<div class='row sub'>" + "<div class='col-xs-5 preview'>" + "<img src='"+ element.album.images[1].url + "'>" + "</div>" + "<div class='col-xs-2'></div>" + "<div class='col-xs-5 song'>" + "<strong>"+element.name+"</strong>" + " by " + element.artists[0].name + "</div>"+ "</div>");
            // $(".row.sub").append("<div class='col-xs-4'></div>")
            // $(".row").appead("<div class='col-xs-4'></div>")
            // $(".row").appead("<div class='col-xs-4 song'></div>")
            // $("#results").append("<div class='row sub'>" + "<img src='"+ element.album.images[1].url + "'>"  + "<strong>"+element.name+"</strong>" + " by " + element.artists[0].name + "</div>" );
            // $(".song").append("<strong>"+element.name+"</strong>" + " by " + element.artists[0].name);
            //  $(".image").append("<img src='"+ element.album.images[1].url + "'>");
            // "<button type='button' class='btn btn-default btn-lg'>" + "<span class='glyphicons glyphicons-play'></span>" + "</button>"
             });
       }

//element.album.images[0].url


   function onError(xhr, status, errorThrown) {
       alert("Sorry, there was a problem!");
       console.log("Error: " + errorThrown);
       console.log("Status: " + status);
       console.dir(xhr);
   }

}



});
