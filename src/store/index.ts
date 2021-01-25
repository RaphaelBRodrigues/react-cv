import reducer from './ducks';
import { createStore, Store, applyMiddleware } from 'redux';
import logger from './middlewares/logger';

const middlewares = applyMiddleware(logger);

const store: Store = createStore(reducer, middlewares);

export default store;
