import { RegistrationClassName, InputClassName, NotificationText, NotificationClassName, EMAIL_REGEXP, PHONE_REGEXP } from './const';
import { showSuccessPopup } from './popup';
import { createElement } from './utils';

const form = document.querySelector(`.${RegistrationClassName.FORM}`);
const submitButton = form.querySelector(`.${RegistrationClassName.SUBMIT}`);
const inputElements = form.querySelectorAll(`.${RegistrationClassName.INPUT}`);
const checkboxElement = form.querySelector(`.${RegistrationClassName.CHECKBOX}`);
const emailElement = form.querySelector(`.${InputClassName.EMAIL}`);
const fieldsetElement = form.querySelector(`.${RegistrationClassName.FIELDSET}`);

const createErrorNotification = (element) => {
  const errorNotificationElement = createElement('p', [NotificationClassName.INPUT_NOTIFICATION]);
  errorNotificationElement.textContent = NotificationText.INPUT;
  element.closest(`.${RegistrationClassName.WRAPPER}`).append(errorNotificationElement);
  element.classList.add(NotificationClassName.INPUT_ERROR);
};

const removeErrorNotification = (element) => {
  element.classList.remove(NotificationClassName.INPUT_ERROR);
  element.closest(`.${RegistrationClassName.WRAPPER}`).querySelector(`.${NotificationClassName.INPUT_NOTIFICATION}`).remove();
};

const isNotEmpty = (element) => Boolean(element.value.trim());

const isValueValid = (element, regexp) => regexp.test(element.value);

const onEmailChange = (evt) => {
  const notification = form.querySelector(`.${NotificationClassName.EMAIL_NOTIFICATION}`);
  if (evt.target.value && !notification) {
    const emailNotificationElement = createElement('p', [NotificationClassName.EMAIL_NOTIFICATION]);
    emailNotificationElement.textContent = NotificationText.EMAIL;
    fieldsetElement.after(emailNotificationElement);
  } else

    if (!evt.target.value && notification) {
      notification.remove();
    }
};

const onFieldInput = (evt) => {
  if (evt.target.value) {
    evt.target.classList.add(InputClassName.NOT_EMPTY);
  } else {
    evt.target.classList.remove(InputClassName.NOT_EMPTY);
  }
};

const isAgreementChecked = checkboxElement.checked;
if (isAgreementChecked) {
  submitButton.disabled = false;
}

const onCheckboxChange = () => {
  submitButton.disabled = !submitButton.disabled;
};


let validCount = 0;

const validateElement = (element) => {
  const isValueEmpty = !isNotEmpty(element);

  if (isValueEmpty) {
    if (!element.classList.contains(NotificationClassName.INPUT_ERROR)) {
      createErrorNotification(element);
    }
    return;
  }

  if (element.classList.contains(InputClassName.PHONE)) {
    if (isValueValid(element, PHONE_REGEXP)) {
      validCount++;

      if (element.classList.contains(NotificationClassName.INPUT_ERROR)) {
        removeErrorNotification(element);
      }
      return;
    }

    if ((!element.classList.contains(NotificationClassName.INPUT_ERROR))) {
      createErrorNotification(element);
    }
    return;
  }

  if (element.classList.contains(InputClassName.EMAIL)) {

    if (isValueValid(element, EMAIL_REGEXP)) {

      validCount++;

      if (element.classList.contains(NotificationClassName.INPUT_ERROR)) {
        removeErrorNotification(element);
      }
      return;
    }

    if ((!element.classList.contains(NotificationClassName.INPUT_ERROR))) {
      createErrorNotification(element);
    }
    return;
  }

  validCount++;

  if (element.classList.contains(NotificationClassName.INPUT_ERROR)) {
    removeErrorNotification(element);
  }

};

const resetForm = () => {
  form.reset();
  const notification = form.querySelector(`.${NotificationClassName.EMAIL_NOTIFICATION}`);
  if (notification) {
    notification.remove();
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  validCount = 0;
  for (const element of inputElements) {
    validateElement(element);
  }
  if (validCount === inputElements.length) {
    showSuccessPopup();
    resetForm();
  }
};

const initForm = () => {
  checkboxElement.addEventListener('change', onCheckboxChange);
  form.addEventListener('submit', onFormSubmit);
  emailElement.addEventListener('change', onEmailChange);
  form.addEventListener('input', onFieldInput);
};

export { initForm };
