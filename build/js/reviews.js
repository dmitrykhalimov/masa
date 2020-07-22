'use strict';

var reviews = document.querySelectorAll('.reviews__item');
var title = document.querySelector('.reviews__numbers');
var activeNumber = 0;

var returnActiveNumber = function () {
  for (var i = 1; i < reviews.length; i++) {
    if (reviews[i].classList.contains('reviews__item--active')) {
      activeNumber = i;
      title.textContent = (activeNumber + 1) + ' / ' + reviews.length;
    }
  }
};

var decreaseSlide = function () {
  if (activeNumber > 0) {
    reviews[activeNumber].classList.remove('reviews__item--active');
    activeNumber--;
    reviews[activeNumber].classList.add('reviews__item--active');
    title.textContent = (activeNumber + 1) + ' / ' + reviews.length;
  }
};

var increaseSlide = function () {
  if (activeNumber < (reviews.length - 1)) {
    reviews[activeNumber].classList.remove('reviews__item--active');
    activeNumber++;
    reviews[activeNumber].classList.add('reviews__item--active');
    title.textContent = (activeNumber + 1) + ' / ' + reviews.length;
  }
};

var onButtonPrevClick = function () {
  decreaseSlide();
};

var onButtonNextClick = function () {
  increaseSlide();
};

var buttonPrev = document.querySelector('.reviews__button--prev');
var buttonNext = document.querySelector('.reviews__button--next');

buttonPrev.addEventListener('click', onButtonPrevClick);
buttonNext.addEventListener('click', onButtonNextClick);

returnActiveNumber();
