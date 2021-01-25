import { IActionDTO } from './interfaces';
import { UiTypes } from './types';
import { IUiState } from './interfaces';
import { Reducer } from 'react';

const INITIAL_STATE: IUiState = {
  globalLoading: true,
};

const reducer: Reducer<IUiState, IActionDTO> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UiTypes.SET_LOADING:
      return { ...state, globalLoading: payload };
    default:
      return { ...state };
  }
};

export default reducer;
