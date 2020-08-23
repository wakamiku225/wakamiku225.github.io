
fetch('https://graph.facebook.com/v7.0/2572249166435402/accounts?access_token=EAAK5fdPk3ckBAA9SWVql7ZAswZBlcEOtaWjB3kAbunYlDR2H3y7Wy3E4FQToGCmY5xxwZAHNSeDfuWJJjqNvc9Tq3H54EpiVDhZBdZBx137mtJIn7TTb8bH0TplaGShQ4n2HFftk3LSzWbwjZBbVlXlhriJTe22JAisSFKZAJ5PIQZDZD')
      .then(function (res){
        console.log(res);
        return res.json();
      }
      ).then(
          function (json) {
            console.log(json);
            let answerHTML;
            let i=0;
            answerHTML ="<ul>";
            while(i< json.media.data.length){
              answerHTML = answerHTML + "<li class='instagram'>"
                  + "<img class='instagram' src =" +json.media.data[i].media_url + "> "
                  +"<br>"
                  + "<i class='instagram'>" + json.media.data[i].caption+ "</i>"
                  +"<br>"
                  +"<a class='btn-gradient-3d-orange' href=" + json.media.data[i].permalink +">" +json.media.data[i].username+"</a>"
                  + "</li>";

              i++;


            }

       document.querySelector("#inSta").innerHTML =answerHTML;
      });