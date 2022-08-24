import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rocket/reducer';
import missionReducer from './Mission/Reducers/missionReducer';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const spaceStore = configureStore(
  {
    reducer: rootReducer,
    middleware: [thunk],
  },
  applyMiddleware(thunk),
);

export default spaceStore;
