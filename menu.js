     $("#hamburger").click(function(){
      $("#menu").toggle();
      $("#menu").addClass("mobile-menu");
    });

    $(".menu-link").click(function(){ 
      $(".mobile-menu").toggle();
     });
