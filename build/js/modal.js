'use strict';

var callbackOpenButton = document.querySelector('.page-header__callback');
var callbackModal = document.querySelector('.modal-callback');
var callbackSubmitButton = document.querySelector('.modal-callback__button');
var callbackCloseButton = document.querySelector('.modal-callback__close');

var acceptedModal = document.querySelector('.modal-accepted');
var acceptedCloseButton = document.querySelector('.modal-accepted__close');
var acceptedSubmitButton = document.querySelector('.modal-accepted__button');

var formName = document.querySelector('.modal-callback__input--name');
var formPhone = document.querySelector('.modal-callback__input--phone');
var formAccepted = document.querySelector('.modal-callback__acceptance-cb');

var contactsName = document.querySelector('.contacts__input--name');
var contactsPhone = document.querySelector('.contacts__input--phone');

var journeyName = document.querySelector('.journey__input');

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
  if (formName.validity.valid && formPhone.validity.valid && formAccepted.validity.valid) {
    closeCallback();
    openAccepted();
    evt.preventDefault();
  }
};

var onContactsSubmit = function (evt) {
  if (contactsName.validity.valid && contactsPhone.validity.valid) {
    openAccepted();
    evt.preventDefault();
  }
};

var onJourneySubmit = function (evt) {
  if (journeyName.validity.valid) {
    openAccepted();
    evt.preventDefault();
  }
};

var onAcceptedCloseClick = function () {
  closeAccepted();
};

var onAcceptedSubmitClick = function () {
  closeAccepted();
};

var onOverlayClick = function (evt) {
  console.log(evt.target);
  if (evt.target === callbackModal) {
    closeCallback();
  } else if (evt.target === acceptedModal) {
    closeAccepted();
  } else {
    console.log('FFFUUUU');
  }
};

var openCallback = function () {
  body.style.overflow = 'hidden';
  callbackModal.classList.remove('visually-hidden');
  document.addEventListener('keydown', onCallbackEsc);
  document.querySelector('body').addEventListener('click', onOverlayClick);
};

var closeCallback = function () {
  body.style.overflow = 'visible';
  callbackModal.classList.add('visually-hidden');
  document.removeEventListener('keydown', onCallbackEsc);
  document.querySelector('body').removeEventListener('click', onOverlayClick);
};

var openAccepted = function () {
  body.style.overflow = 'hidden';
  var shift = window.pageYOffset;
  acceptedModal.style.top = shift + 'px';
  acceptedModal.classList.remove('visually-hidden');

  document.addEventListener('keydown', onAcceptedEsc);
  document.querySelector('body').addEventListener('click', onOverlayClick);
};

var closeAccepted = function () {
  body.style.overflow = 'visible';
  acceptedModal.classList.add('visually-hidden');

  document.removeEventListener('keydown', onAcceptedEsc);
  document.querySelector('body').removeEventListener('click', onOverlayClick);
};


callbackOpenButton.addEventListener('click', onCallbackOpenClick);
callbackCloseButton.addEventListener('click', onCallbackCloseClick);
callbackSubmitButton.addEventListener('click', onCallbackSubmitClick);

acceptedCloseButton.addEventListener('click', onAcceptedCloseClick);
acceptedSubmitButton.addEventListener('click', onAcceptedSubmitClick);

var contactsButton = document.querySelector('.contacts__button');
var journeyButton = document.querySelector('.journey__button');

contactsButton.addEventListener('click', onContactsSubmit);
journeyButton.addEventListener('click', onJourneySubmit);
