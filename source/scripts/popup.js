import { createElement, isEscapeKey } from './utils';
import { PopupClassName, RegistrationClassName, PopupContent, PageClassName } from './const';

const formWrapper = document.querySelector(`.${RegistrationClassName.FORM_WRAPPER}`);
const pageElement = document.querySelector(`.${PageClassName.BODY}`);

const popupSuccess = {
  text: PopupContent.TEXT_SUCCEES,
  title: PopupContent.TITLE_SUCCESS,
  button: PopupContent.OK_BUTTON,
};

const createPopup = ({text, title, button}) => {
  const sectionElement = createElement('section', [PopupClassName.POPUP]);
  const innerElement = createElement('div', [PopupClassName.INNER]);
  const closeElement = createElement('button', [PopupClassName.CLOSE]);
  closeElement.type = 'button';
  const hiddenElement = createElement('span', ['visually-hidden']);
  hiddenElement.textContent = PopupContent.CLOSE;
  const infoElement = createElement('div', [PopupClassName.INFO]);
  const titleElement = createElement('h2', [PopupClassName.TITLE]);
  titleElement.textContent = title;
  const textElement = createElement('p', [PopupClassName.TEXT]);
  textElement.textContent = text;
  const buttonElement = createElement('button', [PopupClassName.BUTTON, 'button']);
  buttonElement.type = 'button';
  buttonElement.textContent = button;

  closeElement.append(hiddenElement);

  infoElement.append(titleElement);
  infoElement.append(textElement);

  innerElement.append(closeElement);
  innerElement.append(infoElement);
  innerElement.append(buttonElement);

  sectionElement.append(innerElement);
  return sectionElement;
};

const onPopUpClose = () => {
  const popup = formWrapper.querySelector(`.${PopupClassName.POPUP}`);
  popup.remove();
  pageElement.classList.remove(PageClassName.NO_SCROLL);
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey (evt)) {
    evt.preventDefault();
    onPopUpClose();
  }
}

const showSuccessPopup = () => {
  const successPopup = createPopup (popupSuccess);
  formWrapper.append(successPopup);
  pageElement.classList.add(PageClassName.NO_SCROLL);

  const closeButton = successPopup.querySelector(`.${PopupClassName.CLOSE}`);
  const okButton = successPopup.querySelector(`.${PopupClassName.BUTTON}`);

  closeButton.addEventListener('click', onPopUpClose);

  okButton.addEventListener('click', onPopUpClose);

  document.addEventListener('keydown', onDocumentKeydown);
};


export { showSuccessPopup };
