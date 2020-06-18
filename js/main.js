
$(document).ready(function(){
   $('.slider').slick({
      dots: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      centerPadding: '0px',
      responsive: [
         {
           breakpoint: 992,
           settings: {
            //  arrows: false,
             slidesToShow: 1,
             slidesToScroll: 1,
           }
         },
       ]
   });

   $('#menu__btn').on('click', function(){
      if (!$("#menu__btn").hasClass("header__btn_active")) {
         $("#menu__btn").addClass("header__btn_active");
         $(".header__mobile").css("left", "0");

      } else {
         $("#menu__btn").removeClass("header__btn_active");
         $(".header__mobile").css("left", "-100%")
      }
    });


 });