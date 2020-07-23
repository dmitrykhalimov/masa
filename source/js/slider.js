'use strict';

var buttonsSlider = document.querySelectorAll('.life-in-israel__selector');

var onButtonSliderClick = function (button, number) {
  button.addEventListener('click', function () {
    showSlides(number);
  });
};

buttonsSlider.forEach(function (button, index) {
  onButtonSliderClick(button, index);
});

window.onresize = function () {
  var currentWidth = window.innerWidth;
  if (currentWidth > 767) {
    returnSlides();
  }
};

var returnSlides = function () {
  var slides = document.querySelectorAll('.life-in-israel__slider-item');

  slides.forEach(function (slide) {
    slide.classList.remove('visually-hidden');
  });
};

var showSlides = function (numberSlide) {
  document.querySelector('.life-in-israel__selector--active').classList.remove('life-in-israel__selector--active');
  buttonsSlider[numberSlide].classList.add('life-in-israel__selector--active');
  var slides = document.querySelectorAll('.life-in-israel__slider-item');

  slides.forEach(function (slide, index) {
    if (index !== (numberSlide)) {
      slide.classList.add('visually-hidden');
    } else {
      slide.classList.remove('visually-hidden');
    }
  });
};

