const createElement = (tag, classNames) => {
  const element = document.createElement(tag);

  for (const className of classNames) {
    element.classList.add(className);
  }
  return element;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { createElement, isEscapeKey };
