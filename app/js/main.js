$(function () {
  //весь код писать внутри что бы дом загрузился первым
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  window.addEventListener('scroll', function () {
//    if (pageYOffset > 501) 
if (pageYOffset > 501){
      let el = document.querySelector(".nav-bar");
      let elem = document.querySelector(".header__info");
      el.classList.remove("visible");
      el.classList.add("hidden");
      elem.classList.remove("visible");
      elem.classList.add("hidden");
    }
    if (pageYOffset < 500) {
      let el = document.querySelector(".nav-bar");
      let elem = document.querySelector(".header__info");
      el.classList.add("visible");
      el.classList.remove("hidden");
      elem.classList.add("visible");
      elem.classList.remove("hidden");
    }
    if (pageYOffset > 401) {
      let el = document.querySelector(".nav-bar");
      el.classList.remove ("opacity1");
      el.classList.add ("opacity0");
    }
    if (pageYOffset < 250) {
      let el = document.querySelector(".nav-bar");
      el.classList.add("opacity1");
      el.classList.remove("opacity0");
    }
  });

  window.addEventListener('scroll', function () {
    if (pageYOffset > 151) {
      let elem = document.querySelector(".header__info");
      elem.classList.add("opacity0");
      elem.classList.remove("opacity1");
    }
    if (pageYOffset < 150) {
      let elem = document.querySelector(".header__info");
      elem.classList.add("opacity1");
      elem.classList.remove("opacity0");
    }
  });

});