var swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  autoHeight: false,
  slidesPerView: '4',
  slidesPerGroup: '4',
  slidesPerColumn: '2',

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

// tabs
$(document).ready(function () {
  var sliderButtons = $(".sliders-buttons_item");
  var slider = $(".slider");
  console.log("click");

  sliderButtons.on("click", function (event) {
    swiper.destroy(true, true);
    var activeSlider = $(this).attr("data-target");
    sliderButtons.removeClass("activeButton");
    slider.removeClass("slider-active");
    $(activeSlider).addClass("slider-active");
    $(this).addClass("activeButton");
  });
});