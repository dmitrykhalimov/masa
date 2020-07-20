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

var showSlides = function (numberSlide) {
  var slides = document.querySelectorAll('.life-in-israel__slider-item');

  slides.forEach(function (slide, index) {
    if (index !== (numberSlide)) {
      slide.classList.add('visually-hidden');
    } else {
      slide.classList.remove('visually-hidden');
    }
  });
};

