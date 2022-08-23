import { createAsyncThunk } from '@reduxjs/toolkit';
import load from './api';

export const RESERVE = 'space-travelers-hub/rocket/RESERVE';
export const FETCH_ROCKETS = 'space-travelers-hub/rocket/FETCH_ROCKETS';
export const FETCH_ROCKETS_FULFILLED = 'space-travelers-hub/rocket/FETCH_ROCKETS/fulfilled';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => load());
export const reserveRocket = (id) => ({ type: RESERVE, id });
