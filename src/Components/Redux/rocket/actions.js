import { createAsyncThunk } from '@reduxjs/toolkit';
import load from './api';

export const TOGGLE_RESERVE = 'space-travelers-hub/rocket/TOGGLE_RESERVE';
export const RESERVED_ROCKETS = 'space-travelers-hub/rocket/RESERVED_ROCKETS';
export const LOAD_ROCKETS = 'space-travelers-hub/rocket/LOAD_ROCKETS';
export const FETCH_ROCKETS = 'space-travelers-hub/rocket/FETCH_ROCKETS';
export const FETCH_ROCKETS_FULFILLED = 'space-travelers-hub/rocket/FETCH_ROCKETS/fulfilled';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => load());
export const toggleReserveRocket = (id) => ({ type: TOGGLE_RESERVE, id });
export const getReservedRockets = () => ({ type: RESERVED_ROCKETS });
export const loadRockets = (rockets) => ({ type: LOAD_ROCKETS, rockets });
