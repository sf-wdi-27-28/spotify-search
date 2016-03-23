var spotify_api = "https://api.spotify.com/v1/search";
getTracks();
function getTracks(){
  $.ajax({
  method: "GET",
  url: spotify_api,
  data: "q=blue&type=track",
  success: onSuccess,
  error: onError
  });
}
