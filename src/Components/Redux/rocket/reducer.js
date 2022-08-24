import { FETCH_ROCKETS_FULFILLED, TOGGLE_RESERVE } from './actions';

const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_ROCKETS_FULFILLED: {
      return action.payload.rockets;
    }
    case TOGGLE_RESERVE: {
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    }
    default: return state;
  }
};

export default rocketReducer;
