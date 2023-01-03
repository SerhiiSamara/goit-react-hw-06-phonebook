import { createSlice } from '@reduxjs/toolkit';

const numberInitialState = '';

const numberSlice = createSlice({
  name: 'number',
  initialState: numberInitialState,
  reducers: {
    changeNumber(state, action) {
      return (state = action.payload);
    },
  },
});
export const { changeNumber } = numberSlice.actions;
export const numberReducer = numberSlice.reducer;
