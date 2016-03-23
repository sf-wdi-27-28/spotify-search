var spotify_api = "https://api.spotify.com/v1/search";
// wait for DOM to load before running JS
$(document).on('ready', function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');

  getTracks();
  //
  $("form").on("submit", function(e) {
    e.preventDefault();
  }

  // your code here
  function getTracks(){
    $.ajax({
      method: "GET",
      url: spotify_api,
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    });
  }

  function onSuccess(json){
      console.log(json);
    }

  function onError(){
    alert("You fucked up!");
  }


  // function onSuccess(json){
  //
  // }

});
