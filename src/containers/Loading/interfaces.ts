import { finished } from 'stream';

export interface ILoadingItem {
  activated: boolean;
}

export interface ILoadingBox {
  finished: boolean;
}

export interface ILoadingWrapper {
  finished: boolean;
}
