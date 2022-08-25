import {
  GET_JOINED, GET_MISSIONS_FULFILLED, SWITCH_MISSION,
} from '../Actions/missionAction';

const missionReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_MISSIONS_FULFILLED: {
      return action.payload.missions;
    }

    case GET_JOINED: {
      return [...action.missions];
    }

    case SWITCH_MISSION: {
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, joined: !mission.joined };
      });
    }

    default: return state;
  }
};

export default missionReducer;
