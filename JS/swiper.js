// core version + navigation, pagination modules:

// init Swiper:

var swiper = new Swiper(".mySwiper", {
 slidesPerView: 1,
 spaceBetween: 30,
 loop: true,
 pagination: {
 el: ".swiper-pagination",
 clickable: true,
 },
 navigation: {
 nextEl: ".swiper-button-next",
 prevEl: ".swiper-button-prev",
 },
});
console.log('swiper.js says "I\'m here"');

var rellax=new Rellax('.rellax');