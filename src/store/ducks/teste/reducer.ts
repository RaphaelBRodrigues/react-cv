import { IActionDTO } from './interfaces';
import { TesteTypes } from './types';
import { ITesteState } from './interfaces';
import { Reducer } from 'react';

const INITIAL_STATE: ITesteState = {
  num: 0,
};

const reducer: Reducer<ITesteState, IActionDTO> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case TesteTypes.INCREASE_TEST:
      return { ...state, num: ++state.num };
    case TesteTypes.DECREASE_TEST:
      return { ...state, num: --state.num };
    default:
      return { ...state };
  }
};

export default reducer;
