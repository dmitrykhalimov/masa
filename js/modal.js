'use strict';

var callbackOpenButton = document.querySelector('.page-header__callback');
var callbackModal = document.querySelector('.modal-callback');
var callbackCloseButton = document.querySelector('.modal-callback__close');

var body = document.querySelector('body');
var openModal = function () {
  body.style.overflow = 'hidden';
  callbackModal.classList.remove('visually-hidden');
};
var closeModal = function () {
  body.style.overflow = 'visible';
  callbackModal.classList.add('visually-hidden');
};

callbackOpenButton.addEventListener('click', openModal);
callbackCloseButton.addEventListener('click', closeModal);


