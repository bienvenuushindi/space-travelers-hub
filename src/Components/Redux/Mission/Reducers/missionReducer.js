import { GET_MISSIONS_FULFILLED, SWITCH_MISSION } from '../Actions/missionAction';

const missionReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_MISSIONS_FULFILLED: {
      return action.payload.missions;
    }
    case SWITCH_MISSION: {
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission };
      });
    }
    default: return state;
  }
};

export default missionReducer;
