console.log('Hello');

// Slick-slider

$(document).ready(function(){
   $('.slider1__slider').slick({
      arrows: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 7000,
      pauseonHover: true,
      pauseonDotsHover: true,
      pauseonDots: true,
      centerMode: true,
      slidesToShow: 1,

      responsive: [{
         breakpoint: 1200,
         settings: {
             arrows : false
         }
     }, ]
   });
});

$(document).ready(function(){
   $('.faq__spoiler-title').click(function(event) {
      $(this).toggleClass('active');
   });
});

$(document).ready(function(){
   $('.faq__spoiler-title').click(function(event) {
      $(this).toggleClass('active');
   });
});

$(function() {

   let header = $("#header"),
       offerH = $("#offer").innerHeight(),
       scrollOffset = $(window).scrollTop();


   /* Fixed Header */
   checkScroll(scrollOffset);

   $(window).on("scroll", function() {
       scrollOffset = $(this).scrollTop();

       checkScroll(scrollOffset);
   });

   function checkScroll(scrollOffset) {
       if( scrollOffset >= offerH ) {
           header.addClass("header--fixed");
       } else {
           header.removeClass("header--fixed");
       }
   }

   /* Menu nav toggle */
   $('.header__burger').click(function(event) {
      $('.header__burger, .header__links').toggleClass('active');
      $('body').toggleClass('lock');
   });

});