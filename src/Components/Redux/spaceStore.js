import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './Mission/Reducers/missionReducer';

const rootReducer = combineReducers({
  /* space: , */
  missions: missionReducer,
  /* profile: , */
});

const spaceStore = configureStore(
  {
    reducer: rootReducer,
    middleware: [thunk],
  },
);

export default spaceStore;
