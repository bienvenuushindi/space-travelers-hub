import { createAsyncThunk } from '@reduxjs/toolkit';
import getMissionList from '../missionAPI';

export const SWITCH_MISSION = 'space-travelers-hub/missions/SWITCH_MISSION';
export const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
export const GET_MISSIONS_FULFILLED = 'space-travelers-hub/missions/GET_MISSIONS/fulfilled';
export const GET_JOINED = 'space-travelers-hub/missions/GET_JOINED';

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => getMissionList());
export const switchMissions = (id) => ({ type: SWITCH_MISSION, id });
export const getJoined = (missions) => ({ type: GET_JOINED, missions });
