
fetch('https://graph.facebook.com/v8.0/17841427624640862?fields=name,username,profile_picture_url,media_count,followers_count,follows_count,media.limit(5){caption,like_count,media_url,permalink,timestamp,thumbnail_url}&access_token=EAAK5fdPk3ckBAMZCvZBK73SEZC0pMLFZCZAZAkMwJR8QY9Y2VPZCihZCqDflxtDtw6xP7F7EvvjvvcG1fZCpmWXkyknem5nia40J0JoZA0XxdZAYT6m5CpZA2dJT90QKfyXwPzENlPmXIQqrKsijd0Im7F4XZCxXVK9MTw5y12PyoZCMm1gQZDZD')
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