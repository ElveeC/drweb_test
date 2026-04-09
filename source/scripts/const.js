const EMAIL_REGEXP = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const PHONE_REGEXP = /^\+?([0-9]{1,4})[-\s]?([0-9]{1,15})[-\s]?([0-9]{1,15})[-\s]?([0-9]{1,15})[-\s]?([0-9]{1,15})$/;

const RegistrationClassName = {
  FORM: 'registration__form',
  SUBMIT: 'registration__button',
  INPUT: 'registration__input',
  CHECKBOX: 'registration__checkbox',
  FIELDSET: 'registration__fieldset',
  WRAPPER: 'registration__input-wrapper',
  FORM_WRAPPER: 'registration__form-wrapper'
};

const NotificationClassName = {
  INPUT_ERROR: 'registration__input--error',
  INPUT_NOTIFICATION: 'registration__error',
  EMAIL_NOTIFICATION: 'registration__notification',
};

const InputClassName = {
  NAME: 'registration__input--name',
  COMPANY: 'registration__input--company',
  POSITION: 'registration__input--position',
  EMAIL: 'registration__input--email',
  PHONE: 'registration__input--phone',
  NOT_EMPTY: 'registration__input--not-empty',
};

const PopupClassName = {
  POPUP: 'registration__popup',
  SUCCESS: 'registration__popup--success',
  INNER: 'registration__popup-inner',
  CLOSE: 'registration__popup-close',
  INFO: 'registration__popup-info',
  TITLE: 'registration__popup-title',
  TEXT: 'registration__popup-text',
  BUTTON: 'registration__popup-button'
};

const PopupContent = {
  CLOSE: 'Закрыть',
  TITLE_SUCCESS: 'Регистрация прошла успешно!',
  TEXT_SUCCEES: 'В\u00A0течение 24\u00A0часов вы\u00A0получите письмо с\u00A0подтверждением регистрации.',
  TITLE_ERROR: 'Что-то пошло не так',
  TEXT_ERROR: 'Перезагрузите страницу или зайдите позже.',
  OK_BUTTON: 'Хорошо',
};

const NotificationText = {
  INPUT: 'Укажите данные',
  EMAIL: 'Обратите внимание на\u00A0правильность указания адреса электронной почты: на\u00A0него придет подтверждение регистрации.'
};

const PageClassName = {
  BODY: 'page__body',
  NO_SCROLL: 'page__body--no-scroll'
};

export { RegistrationClassName, InputClassName, NotificationText, NotificationClassName, EMAIL_REGEXP, PHONE_REGEXP, PopupClassName, PopupContent, PageClassName };
