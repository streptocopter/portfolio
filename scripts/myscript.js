


$(function ( ) {

        //hide all insta on page load
            $(document).ready(function(){
          //HIDE ALL CONTENTS
          $(".content").hide(0);
          //EVENT CLICK
          $(".insta-nav a").click(function(event){
       //PREVENT RELOAD
        event.preventDefault();

        //HIDE ALL CONTENTS
        $(".content").hide(0);

        //GET ID FROM NEW CONTENT TO SHOW
        var id_content = $(this).attr("href");
        //SHOW NEW CONTENT
        $(id_content).fadeIn(150);

        return false;
      });
    });
        $(document).ready(function(){
        $("#senaste").hide(0).delay(000).fadeIn(1000)
    });
              
    
   "use strict";
   var topoffset = 10; //varible for menu height
   var slideqty = $("#featured .item").length;
   var wheight = $(window).height(); //get the height of the window
   var randSlide = Math.floor(Math.random()*slideqty);

   $('#featured .item').eq(randSlide).addClass('active');

   $('.fullheight').css('height', wheight); //sett to window 

   //replace IMG inside carousel with a background image 

   $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
   });

   //adjust height of .fullheight elements on window resize

   $(window).resize(function() {
        var wheight = $(window).height(); //get the height of the window
        $('.fullheight').css('height', wheight); //sett to window  
   }); 


   //Active Scrollspy
   $("body").scrollspy({
        target: "header .navbar",
        offsett: topoffset
   });
   //Add an inbody class to nav when scrollspy event fires on reload
    
      var hash = $(this).find("li.active a").attr("href");
          if(hash !== "#featured"){
              $("header nav").addClass("inbody");
          } else {
              $("header nav").removeClass("inbody");
          }

   //Add an inbody class to nav when scrollspy event fires 
    $(".navbar-fixed-top").on("activate.bs.scrollspy", function() {
        
        var hash = $(this).find("li.active a").attr("href");
        if(hash !== "#featured"){
            $("header nav").addClass("inbody");
        } else {
            $("header nav").removeClass("inbody");
        }
    });

    //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'')=== 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

//Automatically generate carousel indicators 

    for (var i = 0; i < slideqty; i++) {
        var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
        if(i === randSlide){
          insertText += 'class="active" ';
        }
        insertText += '></li>';
        $('#featured ol').append(insertText);
    };
   


   $('#featured').carousel({
      interval: '7000',
      pause: 'true',
    }); 


//close menu after click on nav a   
$('.navbar-collapse a').click('li', function() {
var navbar_toggle = $('.navbar-toggle');
if (navbar_toggle.is(':visible')) {
    navbar_toggle.trigger('click');
}});

//close menu if click outside nav    
    $('body').bind('click', function(e) {
    if($(e.target).closest('.navbar').length === 0) {
    // click happened outside of .navbar, so hide
    var opened = $('.navbar-collapse').hasClass('collapse in');
    if ( opened === true ) {
        $('.navbar-collapse').collapse('hide');
        }
    }
});



    /*Insta load via insta-nav*/
    
    /*
        var feed = new Instafeed({
       target:'insta-all',
        get: 'user',
        userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
        limit: 12,
  after: function () {
    var images = $("#insta-all").find('a');
    $.each(images, function(index, image) {
      var delay = (index * 0) + '750ms';
      $(image).css('-webkit-animation-delay', delay);
      $(image).css('-moz-animation-delay', delay);
      $(image).css('-ms-animation-delay', delay);
      $(image).css('-o-animation-delay', delay);
      $(image).css('animation-delay', delay);
      $(image).addClass('animated flipInX');
    });
  },
        resolution:'standard_resolution',
        
          template: '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>'
        });
feed.run();
 
    var foundImages = 0;
var maxImages = 8;     
var feed = new Instafeed({
     limit: 60,
      target:'farg',
     resolution: 'standard_resolution',
     get: 'user',
     userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
      template:  '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('färgning') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
});
feed.run();
    

    var foundImages = 0;
var maxImages = 8;     
var feed = new Instafeed({
     limit: 60,
      target:'vav',
     resolution: 'standard_resolution',
     get: 'user',
     userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
      template:  '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('väv') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
});
feed.run();
    

    var foundImages = 0;
var maxImages = 8;     
var feed = new Instafeed({
     limit: 60,
      target:'stick',
     resolution: 'standard_resolution',
     get: 'user',
     userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
      template:  '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('stickning') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
});
feed.run();
    

    var foundImages = 0;
var maxImages = 8;     
var feed = new Instafeed({
     limit: 60,
      target:'sydd',
     resolution: 'standard_resolution',
     get: 'user',
     userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
      template:  '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('sytt') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
});
feed.run();
    

    var foundImages = 0;
var maxImages = 8;     
var feed = new Instafeed({
     limit: 60,
      target:'brodd',
     resolution: 'standard_resolution',
     get: 'user',
     userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
      template:  '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('broderi') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
});
feed.run();
    
    
    var foundImages = 0;
var maxImages = 8;     
var feed = new Instafeed({
     limit: 60,
      target:'illu',
     resolution: 'standard_resolution',
     get: 'user',
     userId: 2049388480,
        accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
      template:  '<div class="col-xs-6 col-sm-4 col-md-4 col-lg-2"><a class="thumbnail" href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('illustration') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
    
}); 
feed.run();
    
    */


    //Nya instagram
    
var feed = new Instafeed({
    target:'insta-all',
    get: 'user',
    userId: 2049388480,
    accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
    limit: 12,
resolution:'low_resolution',
   template:  '<meta property="og:image" content="{{image}}"/><div class="col-xs-6 col-sm-3 col-md-3 col-lg-2 col-insta-margin"><figure class="thumbnail"><a  href="{{link}}"><img src="{{image}}"></a><a href="https://www.facebook.com/sharer/sharer.php?u={{link}}" target="_blank"><div class="share_box"><i class="fa fa-facebook-official fa-2x share_fb"></i></a><a href="https://twitter.com/intent/tweet?text={{link}}" target="_blank"> <i class="fa fa-twitter-square fa-2x share_tw"></i></a></div></figure></div>',
        });
        feed.run();
    
    
 var foundImages = 0;
 var maxImages = 12;     
 var feed = new Instafeed({
     limit: 60,
     target:'text',
     resolution: 'low_resolution',
     get: 'user',
     userId: 2049388480,
     accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
   template:  '<meta property="og:image" content="{{image}}"/><div class="col-xs-6 col-sm-3 col-md-3 col-lg-2 col-insta-margin"><figure class="thumbnail"><a  href="{{link}}"><img src="{{image}}"></a><a href="https://www.facebook.com/sharer/sharer.php?u={{link}}" target="_blank"><div class="share_box"><i class="fa fa-facebook-official fa-2x share_fb"></i></a><a href="https://twitter.com/intent/tweet?text={{link}}" target="_blank"> <i class="fa fa-twitter-square fa-2x share_tw"></i></a></div></figure></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('textil') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
    
}); 
feed.run();
    
    
    

    var foundImages = 0;
var maxImages = 12;     
var feed = new Instafeed({
     limit: 60,
     target:'annat',
     resolution: 'low_resolution',
     get: 'user',
     userId: 2049388480,
     accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
   template:  '<meta property="og:image" content="{{image}}"/><div class="col-xs-6 col-sm-3 col-md-3 col-lg-2 col-insta-margin"><figure class="thumbnail"><a  href="{{link}}"><img src="{{image}}"></a><div class="share_box"><a href="https://www.facebook.com/sharer/sharer.php?u={{link}}" target="_blank"><i class="fa fa-facebook-official fa-2x share_fb"></i></a><a href="https://twitter.com/intent/tweet?text={{link}}" target="_blank"> <i class="fa fa-twitter-square fa-2x share_tw"></i></a></div></figure></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('papper') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
    
}); 
feed.run();

    
    var foundImages = 0;
var maxImages = 12;     
var feed = new Instafeed({
     limit: 60,
     target:'illu',
     resolution: 'low_resolution',
     get: 'user',
     userId: 2049388480,
     accessToken: '2049388480.9312b66.c08fb9d34c4344f091fe9d62d642fea7',
   template:  '<meta property="og:image" content="{{image}}"/><div class="col-xs-6 col-sm-3 col-md-3 col-lg-2 col-insta-margin"><figure class="thumbnail"><a  href="{{link}}"><img src="{{image}}"></a><a href="https://www.facebook.com/sharer/sharer.php?u={{link}}" target="_blank"><div class="share_box"><i class="fa fa-facebook-official fa-2x share_fb"></i></a><a href="https://twitter.com/intent/tweet?text={{link}}" target="_blank"> <i class="fa fa-twitter-square fa-2x share_tw"></i></a></div></figure></div>',
     success: function() {
          foundImages = 0;
     },
     filter: function(image) {
          if (image.tags.indexOf('illustration') >= 0 && foundImages < maxImages) {
               foundImages = foundImages + 1;
               return true;
          }
     return false;
     }
    
}); 
feed.run();
     


    
//Active Instanav a
    
    $(".insta-nav a").on("click", function(){
   $(".insta-nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

    
     

});
