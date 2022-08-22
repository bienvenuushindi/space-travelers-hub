import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  /* space: ,
  missions: , 
  profile: ,*/
});

const spaceStore = configureStore(
  {
    reducer: rootReducer,
  },
);

export default spaceStore;
