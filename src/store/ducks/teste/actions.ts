import { TesteTypes } from './types';

export const increaseNumber = () => {
  return {
    type: TesteTypes.INCREASE_TEST,
  };
};

export const decreaseNumber = () => {
  return {
    type: TesteTypes.DECREASE_TEST,
  };
};
