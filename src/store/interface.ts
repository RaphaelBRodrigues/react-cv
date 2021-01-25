import { ITesteState } from './ducks/teste/interfaces';
import { IUiState } from './ducks/ui/interfaces';

export interface ApplicationStore {
  ui: IUiState;
}

export interface IDefaultAction {
  type: string;
  payload: any;
}
