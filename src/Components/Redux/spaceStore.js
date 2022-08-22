import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  /* space: ,
  missions: , */
});

const spaceStore = configureStore(
  {
    reducer: rootReducer,
  },
);

export default spaceStore;
