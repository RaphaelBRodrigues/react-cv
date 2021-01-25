import { UiTypes } from './types';

export const setGlobalLoading = (payload: boolean) => {
  return {
    type: UiTypes.SET_LOADING,
    payload,
  };
};
