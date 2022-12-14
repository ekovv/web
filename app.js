$(function() {



  var header = $("#header"),
      introH = $("#intro").innerHeight (),
      scrollOffset = $(window).scrollTop();



      /* fixed header */


  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();


    checkScroll(scrollOffset);



  });

  function checkScroll(scrollOffset) {



    if( scrollOffset >= introH ) {


      header.addClass("header--fixed");

    } else {
      header.removeClass("header--fixed");


    }


  }


    /* smootrh scroll */

  $("[data-scroll]").on("click", function(event) {

    event.preventDefault();
    var scrollName = $(this).attr('data-scroll'),
    scrollElem = $(scrollName),
    scrollTop = scrollElem.offset().top;



    /*var $this = $(this),
        blockId = $this.data("scroll"),
        scrollTop = $(blockId).offset().top; */

   /* $("#nav a").removeClass("active");
    $this.addClass("active"); */


    $("html, body").animate ({


      scroppTop: scrollTop



    }, 500);




  })




})
