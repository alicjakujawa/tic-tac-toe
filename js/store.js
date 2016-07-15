import { createStore, combineReducers, applyMiddleware } from 'redux';
import game from './reducers/game';
import createLogger from 'redux-logger';

const logger = createLogger();
export default createStore(combineReducers({ game }));
