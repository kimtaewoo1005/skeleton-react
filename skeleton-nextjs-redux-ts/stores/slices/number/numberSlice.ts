import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

type NumberState = {
  value: number;
};

const initialState: NumberState = {
  value: 0,
};

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    increment(state: NumberState) {
      state.value += 1;
    },
    decrement(state: NumberState) {
      state.value -= 1;
    },
  },
});

