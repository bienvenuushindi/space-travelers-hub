import { FETCH_ROCKETS_FULFILLED, RESERVE } from './actions';

const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_ROCKETS_FULFILLED: {
      return action.payload.rockets;
    }
    case RESERVE: {
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    }
    default: return state;
  }
};

export default rocketReducer;
