'use strict';

var expandButtons = document.querySelectorAll('.questions__item');


var onExpand = function () {
  if (this.classList.contains('questions__item--active')) {
    this.classList.remove('questions__item--active');
  } else {
    this.classList.add('questions__item--active');
  }
};

expandButtons.forEach(function (expandButton) {
  expandButton.addEventListener('click', onExpand);
});

console.log(expandButtons);
