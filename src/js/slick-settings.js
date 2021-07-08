$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    initialSlide: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
  });
});

// Добавляет файл с настройками слайдера
