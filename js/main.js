const swiper = new Swiper('.swiper-container', {
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