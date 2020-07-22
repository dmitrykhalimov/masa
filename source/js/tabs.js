'use strict';

var programs = document.querySelectorAll('.programs__radio');

var showProgram = function (program) {
  var activeTab = document.querySelector('.programs__content--active');
  activeTab.classList.remove('programs__content--active');
  var newName = '.programs__content--' + program.value;
  console.log(newName);
  var newTab = document.querySelector(newName);
  console.log(newTab);
  newTab.classList.add('programs__content--active');
  //alert('Титька');
  //console.log(document.querySelector('.program__content--active'));
  //.classList.remove('program__content--active');
  //document.querySelector('.program__content--' + program.value).classList.add('program__content--active');
};

var radioChangeHandler = function (program) {
  program.addEventListener('click', function () {
    showProgram(program);
  });
};

for (var i = 0; i < programs.length; i++) {
  radioChangeHandler(programs[i]);
}
/*
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
*/
