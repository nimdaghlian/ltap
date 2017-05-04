  $(document).ready(function(){
    
    $.fn.random = function() {
    return this.eq(Math.floor(Math.random() * this.length));
      }          
    
    // function checkControls(){
    //   if ($(".active-tweet").next().length == 0){ $("#next").hide();} else{$("#next").show();}
    //   if ($(".active-tweet").prev().length == 0){ $("#prev").hide();} else{$("#prev").show();}
    // }
    var hash = location.hash.replace('#','');
    if (hash != "") {
      if ( hash == "undefined") {
        location.hash = "";
        $('.tweet-text').random().addClass('active-tweet');
      }
      else if ($("#tweets #"+hash).length) {
        $("#tweets #"+hash).addClass('active-tweet');
        // checkControls();
      }
      else {showTweet('init');}
    } 
      else {showTweet('init');}
    
    function showTweet(type){
      var newTweet = $('.active-tweet');
      var activeTweet = $('.active-tweet');


      function toggleTweet(tog){
        if (tog == "rand") {
          newTweet = $('.tweet-text').random();
          console.log('fart');
        }

        newTweet.addClass('active-tweet');
        activeTweet.removeClass('active-tweet');
        location.hash = newTweet.attr("id");
        // checkControls();

      }
      switch (type) {
        case 'init' :
          toggleTweet('rand');
          break;
        case 'prev':
          if ($(".active-tweet").prev().length == 0) {newTweet=$('.tweet-text').last();} else {newTweet=$('.active-tweet').prev();};
          toggleTweet();
          break; 
        case 'next':
          if ($(".active-tweet").next().length == 0) {newTweet=$('.tweet-text').first();} else {newTweet=$('.active-tweet').next();};
          // newTweet=$('.active-tweet').next();
          toggleTweet();
          break;                
        case 'all':
          $(".tweet-text").addClass("active-tweet full-tweet");
          $("#show-all").hide();
          $("#prev").hide();
          $("#next").hide();
          $("#close").show();
          break;
        case 'close':

          // $("#tweets").fadeOut(1000, function(){
          //   $("#tweets").fadeIn(1000);
          // });
          break;
      };    
     }
     $("#hamburger").click(function(){
      $("#menu").toggle();

    })
    $("#prev").click(function(){showTweet('prev');}); 
    $("#next").click(function(){showTweet('next');}); 
    $("p.tweet-text").click(function(){showTweet('next');}); 
    $("#show-all").click(function(){showTweet('all');}); 
    $("#close").click(function(){
          $(".tweet-text").removeClass("active-tweet full-tweet");  
          // $(".tweet-text").removeClass("full-tweet");  
          $("#show-all").show();
          $("#prev").show();
          $("#next").show();
          $("#close").hide(); 
          // toggleTweet('rand');
          $("html, body").animate({ scrollTop: 0 }, "fast", function(){
            showTweet('init');          
           });
      }); 

      $(document).keydown(function(event) {
        switch (event.keyCode) {
          case 37: showTweet('prev'); break;
          case 39: showTweet('prev'); break;
        }
      });

    $(window).scroll(function () {
          if ($(window).scrollTop() > $("#tweet-container").offset().top) { 
              $("#controls").addClass("offscreen"); 
          }
          else { 
            console.log("hello");
            $("#controls").removeClass("offscreen"); 
          } 
       });

    $("#essay-arrow").click(function(){$('#essay-body').toggle()});
    $("h1.subhead").click(function(){$(this).nextAll('div.box').toggle(); console.log('cholo');});

  });
