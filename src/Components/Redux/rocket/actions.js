import { createAsyncThunk } from '@reduxjs/toolkit';
import load from './api';

export const FETCH_ROCKETS = 'space-travelers-hub/rocket/FETCH_ROCKETS';
export const FETCH_ROCKETS_FULFILLED = 'space-travelers-hub/rocket/FETCH_ROCKETS/fulfilled';

export const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => load());
