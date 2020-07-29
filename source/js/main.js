'use strict';

(function () {
// Модалки
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
    if (evt.target === callbackModal) {
      closeCallback();
    } else if (evt.target === acceptedModal) {
      closeAccepted();
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

})();


(function () {
  // Аккордеон
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
})();

(function () {
  // Слайдер
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


})();

(function () {
  var programs = document.querySelectorAll('.programs__radio');

  var showProgram = function (program) {
    var activeTab = document.querySelector('.programs__content--active');
    activeTab.classList.remove('programs__content--active');
    var newName = '.programs__content--' + program.value;
    var newTab = document.querySelector(newName);
    newTab.classList.add('programs__content--active');
  };

  var radioChangeHandler = function (program) {
    program.addEventListener('click', function () {
      showProgram(program);
    });
  };

  for (var i = 0; i < programs.length; i++) {
    radioChangeHandler(programs[i]);
  }
})();


(function () {

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
})();

/*
(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})();
*/
