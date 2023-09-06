import { screen } from '@testing-library/react';


export const getByTextPartial = (text, options) => {
  return screen.getByText((content, element) => {
    const hasText = (node) => node.textContent.includes(text);
    const elementHasText = hasText(element);
    const childrenDontHaveText = Array.from(element.children).every(
      (child) => !hasText(child)
    );

    return elementHasText && childrenDontHaveText;
  }, options);
};
