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
    } else if (!formPhone.validity.value) {
      document.querySelector('.modal-callback__phone-error').classList.remove('visually-hidden');
    }
  };

  var onContactsSubmit = function (evt) {
    if (contactsName.validity.valid && contactsPhone.validity.valid) {
      openAccepted();
      evt.preventDefault();
    } else if (!contactsPhone.validity.value) {
      document.querySelector('.contacts__phone-error').classList.remove('visually-hidden');
    }
  };

  var onJourneySubmit = function (evt) {
    if (journeyName.validity.valid) {
      openAccepted();
      evt.preventDefault();
    } else if (!journeyName.validity.value) {
      document.querySelector('.journey__phone-error').classList.remove('visually-hidden');
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

  formPhone.addEventListener('click', function () {
    document.querySelector('.modal-callback__phone-error').classList.add('visually-hidden');
  });

  contactsPhone.addEventListener('click', function () {
    document.querySelector('.contacts__phone-error').classList.add('visually-hidden');
  });

  journeyName.addEventListener('click', function () {
    document.querySelector('.journey__phone-error').classList.add('visually-hidden');
  });


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
  var reviewsSwiper;
  var title = document.querySelector('.reviews__numbers');

  reviewsSwiper = new Swiper('.reviews', {
    direction: 'horizontal',
    wrapperClass: 'reviews__list',
    slideClass: 'reviews__slide',

    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
  });

  reviewsSwiper.on('slideChange', function () {
    title.textContent = (reviewsSwiper.activeIndex + 1) + ' / ' + reviewsSwiper.slides.length;
  });

  reviewsSwiper.slideNext();
  reviewsSwiper.slideNext();

  var buttonPrev = document.querySelector('.reviews__button--prev');
  var buttonNext = document.querySelector('.reviews__button--next');

  buttonPrev.addEventListener('click', function () {
    reviewsSwiper.slidePrev();
  });

  buttonNext.addEventListener('click', function () {
    reviewsSwiper.slideNext();
  });
})();

// слайдер жизнь в израиле
(function () {
  var mySwiper;

  var isDesktop = true;
  var isMobile = true;

  var initalizeSwiper = function () {
    document.querySelector('.life-in-israel__slider').classList.add('swiper-wrapper');
    document.querySelector('.life-in-israel').classList.add('swiper-container');
    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };

  var destroySwiper = function () {
    document.querySelector('.life-in-israel__slider').classList.remove('swiper-wrapper');
    document.querySelector('.life-in-israel').classList.remove('swiper-container');
    mySwiper.destroy(false, true);
  };

  if (window.innerWidth > 767) {
    isDesktop = true;
    isMobile = false;
    document.querySelector('.life-in-israel__slider').classList.remove('swiper-wrapper');
    document.querySelector('.life-in-israel').classList.remove('swiper-container');
  } else {
    isDesktop = false;
    isMobile = true;
    initalizeSwiper();
  }

  function swiperMode() {
    var currentWidth = window.innerWidth;
    if (currentWidth > 767 && !isDesktop) {
      isDesktop = true;
      isMobile = false;
      destroySwiper();
    } else if (currentWidth <= 767 && !isMobile) {
      isMobile = true;
      isDesktop = false;
      initalizeSwiper();
    }
  }

  window.addEventListener('resize', function () {
    swiperMode();
  });
})();
