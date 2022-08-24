import {
  FETCH_ROCKETS_FULFILLED, LOAD_ROCKETS, RESERVED_ROCKETS, TOGGLE_RESERVE,
} from './actions';

const rocketReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_ROCKETS_FULFILLED: {
      return action.payload.rockets;
    }
    case LOAD_ROCKETS: {
      return [...action.rockets];
    }
    case TOGGLE_RESERVE: {
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    }
    case RESERVED_ROCKETS: {
      return [...state.filter((rocket) => rocket.reserved)];
    }
    default: return state;
  }
};

export default rocketReducer;
