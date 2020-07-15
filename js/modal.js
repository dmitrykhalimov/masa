'use strict';

var callbackOpenButton = document.querySelector('.page-header__callback');
var callbackModal = document.querySelector('.modal-callback');
var callbackSubmitButton = document.querySelector('.modal-callback__button');
var callbackCloseButton = document.querySelector('.modal-callback__close');

var acceptedModal = document.querySelector('.modal-accepted');
var acceptedCloseButton = document.querySelector('.modal-accepted__close');
var acceptedSubmitButton = document.querySelector('.modal-accepted__button');

var body = document.querySelector('body');

var onCallbackOpenClick = function () {
  openCallback();
};

var onCallbackCloseClick = function () {
  closeCallback();
};

var onCallbackEsc = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeCallback();
  }
};

var onAcceptedEsc = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeAccepted();
  }
};

var onCallbackSubmitClick = function (evt) {
  evt.preventDefault(); // тут должна быть логика отправки на сервер через XHR
  closeCallback();
  openAccepted();
};

var onAcceptedCloseClick = function () {
  closeAccepted();
};

var onAcceptedSubmitClick = function () {
  closeAccepted();
};

var openCallback = function () {
  body.style.overflow = 'hidden';
  callbackModal.classList.remove('visually-hidden');
  document.addEventListener('keydown', onCallbackEsc);
};

var closeCallback = function () {
  body.style.overflow = 'visible';
  callbackModal.classList.add('visually-hidden');
  document.removeEventListener('keydown', onCallbackEsc);
};

var openAccepted = function () {
  body.style.overflow = 'hidden';
  acceptedModal.classList.remove('visually-hidden');
  document.addEventListener('keydown', onAcceptedEsc);
};

var closeAccepted = function () {
  body.style.overflow = 'visible';
  acceptedModal.classList.add('visually-hidden');
  document.removeEventListener('keydown', onAcceptedEsc);
};

callbackOpenButton.addEventListener('click', onCallbackOpenClick);
callbackCloseButton.addEventListener('click', onCallbackCloseClick);
callbackSubmitButton.addEventListener('click', onCallbackSubmitClick);

acceptedCloseButton.addEventListener('click', onAcceptedCloseClick);
acceptedSubmitButton.addEventListener('click', onAcceptedSubmitClick);

