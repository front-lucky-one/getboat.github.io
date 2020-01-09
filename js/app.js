"use strict";

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 28,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {},
    640: {
      slidesPerView: 1,
      spaceBetween: -20
    }
  }
});