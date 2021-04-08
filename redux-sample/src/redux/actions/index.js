import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  EQUAL,
  CLEAR
} from './types';


export const onNumberClick = (number) => ({
  type: INPUT_NUMBER,
  number,
});

export const onPlusClick = (number) => ({
  type: PLUS,
});

export const onMinusClick = (number) => ({
  type: MINUS,
});

export const onMultiplyClick = (number) => ({
  type:  MULTIPLY,
});

export const onDivideClick = (number) => ({
  type:  DIVIDE,
});

export const onEqualClick = (number) => ({
  type: EQUAL,
});

export const onClearClick = (number) => ({
  type: CLEAR,
});