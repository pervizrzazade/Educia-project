
$(document).ready(function(){
    $('.your-class').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
      nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
    });
  });


  
  $(document).ready(function(){
    $('.sponsors_boxes').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 300,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      prevArrow: false,
      nextArrow: false,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
  });