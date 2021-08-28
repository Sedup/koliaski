var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoHeight: true,
  slidesPerView: '4',
  //slidesPerGroup: '1',
  //spaceBetween: '20',
  slideToClickedSlide: true,
  autoHight: true,
  //slidesPerColumn: '2',

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

//swiper.destroy();

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


    swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoHeight: true,
      slidesPerView: '4',
      //slidesPerGroup: '1',
      //spaceBetween: '20',
      slideToClickedSlide: true,
      autoHight: true,
      //slidesPerColumn: '2',

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



  });
});