  function onError(xhr, status, errorThrown){
    console.log(errorThrown);
  }

  function convertToObject(qp) {
      var output = {};
      if (!qp) { return output; }
      qp.split("&").forEach(function(sub_str){
          var pair = sub_str.split("=");
          output[pair[0]] = pair[1];
      });
      return output;
  }

  function convertToQueryParameter(o) {
    var pairs = Object.keys(o).map(function(key){
        return key + "=" + o[key];
    });
    return pairs.join("&");
  }

  $(document).on("ready", function(){
    console.log("Sanity Check: JS is working!");
        // convertToObject(st
      // code in here

      // inputdata.api_key="dc6zaTOxFJmzC";
      var templateSource = document.getElementById('results-template').innerHTML,
          template = Handlebars.compile(templateSource),
          resultsPlaceholder = document.getElementById('results'),
          spotifyapi = "https://api.spotify.com/v1/search";
      $("form").on("submit", function(event){
        event.preventDefault();
        var serialdata = $("input").serialize();
        var inputdata=convertToObject(serialdata);
        console.log("test ", inputdata);
        $.ajax({
          method: 'GET',
          url: spotifyapi,
          data: inputdata,
          success: onSuccess,
          error: onError
        });
        $("#results").append($("<a href='spotify_search' src="+json.artists.items[0].external_urls["spotify"]+">"));
        // for(var i = 0; i<100; i++) {
        //   var results = "";
        //   results +=  "<p>Song Title: " + json.tracks[i].name + " | "+ " Artist: "+json.tracks[i].artists[0].name;
        //   console.log(results);
        //   $("#results").append(results);
// }//while
        // $("#results").append($("<img class='img-responsive img-thumbnail' src="+inputdata.artists.href+">"));

        function onSuccess(json) {
          console.log(json.artists.items.external_urls);
          resultsPlaceholder.innerHTML = template(response);
        //   json.data.forEach(function(v,i){
        //     $("#results").append($("<img class='img-responsive img-thumbnail' src="+v.artists.href+">"));
        //   });
        }

        function onError(xhr, status, errorThrown){
            console.log(errorThrown);
        }
      });

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });


    });

  // your code here
