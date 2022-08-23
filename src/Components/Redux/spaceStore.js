import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rocket/reducer';

const rootReducer = combineReducers({ rockets: rocketReducer });

const spaceStore = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default spaceStore;
