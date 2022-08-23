import { FETCH_ROCKETS_FULFILLED } from './actions';

const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_ROCKETS_FULFILLED: {
      return action.payload.rockets;
    }
    default: return state;
  }
};

export default rocketReducer;
