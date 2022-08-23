import {
  GET_JOINED, GET_MISSIONS_FULFILLED, JOINED_MISSIONS, SWITCH_MISSION,
} from '../Actions/missionAction';

const missionReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_MISSIONS_FULFILLED: {
      return action.payload.missions;
    }

    case GET_JOINED: {
      return [...action.missions];
    }

    case JOINED_MISSIONS: {
      return [...state.filter((missions) => missions.joined)];
    }

    case SWITCH_MISSION: {
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, joined: !mission.joined };
      });
    }

    default: return state;
  }
};

export default missionReducer;
