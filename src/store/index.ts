import reducer from './ducks';
import { createStore, Store } from 'redux';
import { ITesteState } from './ducks/teste/interfaces';

export interface ApplicationStore {
  teste: ITesteState;
}

const store: Store = createStore(reducer);

export default store;
