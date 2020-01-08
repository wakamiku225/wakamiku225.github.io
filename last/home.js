
fetch('https://graph.facebook.com/v3.0/17841427624640862?fields=name%2Cmedia.limit(5)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Ctimestamp%2Cusername%7D&access_token=EAAK5fdPk3ckBABgZAdNOA3YrpvVZB89LSdZA3yuYHqKju3ZBJVTo2VMoNS1aE875jqBYQwW8SVXGjQGWf4gpRfHQujDz0OBbzXvmDwCDCtCrqV5PyR5kPtJaZAM7048MQerBYxC0SJD862dS5Am3TwrrKRAGvP7fpXVmRcq37PwZDZD')
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
                  +"<a href=" + json.media.data[i].permalink +">" + json.media.data[i].permalink +"</a>"
                  + "</li>";

              i++;


            }

       document.querySelector("#inSta").innerHTML =answerHTML;
      });