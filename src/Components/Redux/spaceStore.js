import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  /* space: ,
  missions: ,
  profile: , */
});

const spaceStore = configureStore(
  {
    reducer: rootReducer,
    middleware: [thunk],
  },
);

export default spaceStore;
