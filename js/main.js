new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: '4',
  //slidesPerGroup: '1',
  //spaceBetween: '8',
  //slideToClickedSlide: true,
  autoHight: true,
  //slidesPerColumn: '2',

  //watchOverflow: true,

  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

var mySwiper = document.querySelector('.swiper-container').swiper;


// tabs


$(document).ready(function () {
  var sliderButtons = $(".sliders-buttons_item");
  var slider = $(".slider");


  sliderButtons.on("click", function (event) {
    var activeSlider = $(this).attr("data-target");
    sliderButtons.removeClass("activeButton");
    slider.removeClass("slider-active");
    $(activeSlider).addClass("slider-active");
    $(this).addClass("activeButton");

    //mySwiper = undefined;
    mySwiper.destroy();
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoHeight: true,
      slidesPerView: '4',
      //slidesPerGroup: '1',
      //spaceBetween: '8',
      //slideToClickedSlide: true,
      autoHight: true,
      //slidesPerColumn: '2',
      autoplay: {
        delay: 3000,
      },
      watchOverflow: true,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

    mySwiper = document.querySelector('.swiper-container').swiper;

  });
  AOS.init();
});