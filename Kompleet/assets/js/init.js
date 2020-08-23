/* ==================================================
//  ____  _     _   _            _   _          _____ _                              
// |  _ \(_)___| |_(_)_ __   ___| |_(_)_   ____|_   _| |__   ___ _ __ ___   ___  ___ 
// | | | | / __| __| | '_ \ / __| __| \ \ / / _ \| | | '_ \ / _ \ '_ ` _ \ / _ \/ __|
// | |_| | \__ \ |_| | | | | (__| |_| |\ V /  __/| | | | | |  __/ | | | | |  __/\__ \
// |____/|_|___/\__|_|_| |_|\___|\__|_| \_/ \___||_| |_| |_|\___|_| |_| |_|\___||___/
//
/* ================================================*/

/*-----------------------------------------------------------------------------------*/
/*  DOCUMENT READY
/*-----------------------------------------------------------------------------------*/
jQ(document).ready(function(){
    'use strict';

    // SLIDERS
    jQ('#headerwrap.agency-slider').backstretch([
        "assets/img/agency/hero1.jpg",
        "assets/img/agency/hero2.jpg",
        "assets/img/agency/hero3.jpg"
      ], {duration: 8000, fade: 500});

    // OWL CAROUSEL //
    jQ('.owl-carousel').owlCarousel({
      navigation: false,
      pagination: false,
      navigationText: [
      "<i class='pe-7s-angle-left'></i>",
      "<i class='pe-7s-angle-right'></i>"
      ], 
      autoPlay: 8000,
      loop: true
    });

    jQ('.owl-carousel-paged').owlCarousel({
      navigation: false,
      pagination: false,
      autoPlay: 8000,
      loop: true
    });

    jQ('#single-slider').owlCarousel({
      navigation: false,
      pagination: true,
      autoPlay: 8000,
      loop: true
    });

    jQ(".side-menu .nav").metisMenu({
        toggle: false
    });

    // ANIMATED ONLY IF NOT AT TOP OF PAGE ON LOAD //
    var $win = jQ(window);
    if ($win.scrollTop() == 0)
        jQ('.navbar-fixed-top').addClass('wow');
    else if ($win.height() + $win.scrollTop() == jQ(document).height()) {
         jQ('.navbar-fixed-top').removeClass('wow');
    }



    //NEAT VID EMBEDS
    jQ().prettyEmbed({ useFitVids: true });
    
    var magnificPopup = jQ.magnificPopup.instance;
    jQ('.lb-link, .image-gallery').magnificPopup({
      preloader:true,
      type: 'image',
      removalDelay: 300,
      mainClass: 'fadeInDown',
      callbacks: {
          open: function() {
            magnificPopup.content.addClass('mobile');
          }
        }
    });

    //BACK TO TOP
    jQ('a#back-to-top').on('click', function(event){
      event.preventDefault();
      jQ('html, body').animate({
        scrollTop: jQ("body").offset().top
      }, 500);
    }); 

    jQ('.vertical-center').flexVerticalCenter({ cssAttribute: 'padding-top' });

    //CONTACT FORM
    jQ('#contactform').submit(function(){
      var action = jQ(this).attr('action');
      jQ("#message").slideUp(750,function() {
      jQ('#message').hide();
      jQ('#submit').attr('disabled','disabled');
      jQ.post(action, {
        name: jQ('#name').val(),
        email: jQ('#email').val(),
        website: jQ('#website').val(),
        comments: jQ('#comments').val()
      },
        function(data){
          document.getElementById('message').innerHTML = data;
          jQ('#message').slideDown('slow');
          jQ('#submit').removeAttr('disabled');
          if(data.match('success') != null) jQ('#contactform').slideUp('slow');
          jQ(window).trigger('resize');
        }
      );
      });
      return false;
    });

    jQ(".rotate").textrotator({
      animation: "dissolve",
      separator: ",",
      speed: 2500 // How many milliseconds until the next word show.
    });

    jQ('.match-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });

    var mapHeight = jQ('#contact-inner').outerHeight();
    jQ('#mapwrapper').css('height', mapHeight);

    jQ(document).on( 'shown.bs.tab', 'a[href="#contact2"]', function (e) {
        jQ("#mapwrapper").gMap({ 
            controls: false,
            scrollwheel: false,
            markers: [{     
                latitude:40.7566,
                longitude: -73.9863,
            icon: { image: "assets/img/marker.png",
                iconsize: [44,44],
                iconanchor: [12,46],
                infowindowanchor: [12, 0] } }],
            icon: { 
                image: "assets/img/marker.png", 
                iconsize: [26, 46],
                iconanchor: [12, 46],
                infowindowanchor: [12, 0] },
            latitude:40.7566,
            longitude: -73.9863,
            zoom: 14,
            styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"12"},{"color":"#000000"},{"lightness":"-5"},{"gamma":"7.71"},{"weight":"10.00"},{"invert_lightness":true}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
        });
        if (!jQ('#contact-tabs').hasClass('map-open')) {
          jQ('#contact-tabs').addClass('map-open');
        }
    });

    jQ(document).on( 'shown.bs.tab', 'a[href="#contact1"]', function (e) {
        if (jQ('#contact-tabs').hasClass('map-open')) {
          jQ('#contact-tabs').removeClass('map-open');
        }        
    });

    //SIDE NAV MOBILE
    jQ('#side-menu-toggle').on('click', function(event){
      event.preventDefault();
      jQ(this).toggleClass('open');
      jQ('#side-menu-toggle i').toggleClass('fa-bars');
      jQ('#side-menu-toggle i').toggleClass('fa-times');
      jQ('#side-wrapper').toggle();
    });

    // ONEPAGER XTRA //
    jQ('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // FULLSCREEN FIX //
    var windowHeight = jQ(window).innerHeight();
    var isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if( !isMobileDevice ) {
        jQ('#headerwrap.fullheight').css('height', windowHeight);
        jQ(window).on('resize', function(){
            jQ('#headerwrap.fullheight').css('height', windowHeight);
        });
    }

    // ANIMATE ONCE PAGE LOAD IS OVER //
    Pace.on("done", function(){
        new WOW().init();
        jQ(window).trigger('resize');
    });

    // SEARCH //
    jQ('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        jQ('#search-wrapper').addClass('open');
        jQ('#search-wrapper > form > input[type="search"]').focus();
    });
    
    jQ('#search-wrapper, #search-wrapper button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            jQ(this).removeClass('open');
        }
    });
    
    jQ('form').submit(function(event) {
        event.preventDefault();
        return false;
    })

    // ONEPAGER //
    jQ('a.page-scroll').on('click', function(event){
        var $anchor = jQ(this);
        jQ('html, body').stop().animate({
            scrollTop: jQ($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    jQ('.entry-content table, #post-content table').addClass('table');
    jQ('.entry-content dl, #post-content dl').addClass('dl-horizontal');
    //jQ(window).trigger('resize');

    jQ('.flexpanel').flexpanel({
        animation: 'slide',
        direction: 'right',
        wrapper: '.master-wrapper',
        button: '.side-menu-trigger',
        maxWidth: null  
    });

    jQ('.flexpanel').flexpanel({
        animation: 'slide',
        direction: 'right',
        wrapper: '.master-wrapper',
        button: '.side-menu-only .navbar-toggle',
        maxWidth: null  
    });

    jQ('a[href="#search"]').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      jQ(this).closest('li').find('.dropdown-menu').toggleClass('open-me');
    });
  

    jQ('.viewport-wrap').mCustomScrollbar({
      theme:"dark"
    });

    if(jQ('nav').hasClass('header-6')) {
      var headerHeight = jQ('.header-6.navbar-fixed-top').outerHeight();
      jQ('body').css({
        'padding-top' : headerHeight
      });
    }

    jQ("#mapwrapper.alt-map").gMap({ 
        controls: false,
        scrollwheel: false,
        markers: [{     
            latitude:40.7566,
            longitude: -73.9863,
        icon: { image: "assets/img/marker.png",
            iconsize: [44,44],
            iconanchor: [12,46],
            infowindowanchor: [12, 0] } }],
        icon: { 
            image: "assets/img/marker.png", 
            iconsize: [26, 46],
            iconanchor: [12, 46],
            infowindowanchor: [12, 0] },
        latitude:40.7566,
        longitude: -73.9863,
        zoom: 14,
        styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"12"},{"color":"#000000"},{"lightness":"-5"},{"gamma":"7.71"},{"weight":"10.00"},{"invert_lightness":true}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
    });
});

/*-----------------------------------------------------------------------------------*/
/*  WINDOW LOAD
/*-----------------------------------------------------------------------------------*/
jQ(window).load(function() {
    'use strict';

    var portfolio_selectors = jQ('.portfolio-filter li a');

    if(portfolio_selectors!='undefined'){
        var portfolio = jQ('.portfolio-items');
        portfolio.imagesLoaded( function(){
             portfolio.isotope({
                itemSelector : 'li',
                layoutMode : 'fitRows',
                percentPosition: true
            });
        });

        portfolio_selectors.on('click', function(e){
            e.preventDefault();
            portfolio_selectors.removeClass('active');
            jQ(this).addClass('active');
            var selector = jQ(this).attr('data-filter');
            portfolio.isotope({ filter: selector });
            return false;
        });
    }

    var boxed_portfolio_selectors = jQ('.boxed-portfolio-filter li a');

    if(boxed_portfolio_selectors!='undefined'){
        var boxed_portfolio = jQ('.boxed-portfolio-items');
        boxed_portfolio.imagesLoaded( function(){
             boxed_portfolio.isotope({
                itemSelector : 'li',
                layoutMode : 'fitRows',
                percentPosition: true
            });
        });

        boxed_portfolio_selectors.on('click', function(e){
            e.preventDefault();
            boxed_portfolio_selectors.removeClass('active');
            jQ(this).addClass('active');
            var selector = jQ(this).attr('data-filter');
            boxed_portfolio.isotope({ filter: selector });
            return false;
        });
    }

    var masonry_portfolio_selectors = jQ('.masonry-portfolio-filters li a');
    var masonry_container = jQ('.masonry-portfolio');

    if(masonry_portfolio_selectors!='undefined'){
        var masonry_portfolio = jQ('.masonry-portfolio-items');
        masonry_portfolio.imagesLoaded( function(){
             masonry_portfolio.isotope({
                itemSelector: '.masonry-portfolio-item',
                masonry: {
                  columnWidth: masonry_container.width() / masonry_container.attr('data-masonry-cols')
                }
            });
        });

        masonry_portfolio_selectors.on('click', function(e){
            e.preventDefault();
            masonry_portfolio_selectors.removeClass('active');
            jQ(this).addClass('active');
            var selector = jQ(this).attr('data-filter');
            masonry_portfolio.isotope({ filter: selector });
            return false;
        });
    }

    // PRELOADING SCREEN
    /*
    jQ('a:not([target="_blank"]):not([href*=#]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu):not(a[href$="jpg"]):not([href$="jpeg"]):not(a[href$="gif"]):not(a[href$="png"]):not(a.ajax-link):not(a.side-menu-trigger hidden-xs)').on('click', function(){
      var href = jQ(this).attr('href');
      jQ('.preloader').fadeIn(300);
      setTimeout(function(){
        window.location = href;
      }, 300);
      return false;
    });
*/
});