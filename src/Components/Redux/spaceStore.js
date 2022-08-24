import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rocket/reducer';
import thunk from 'redux-thunk';
import missionReducer from './Mission/Reducers/missionReducer';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
  /* profile: , */
});

const spaceStore = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default spaceStore;
