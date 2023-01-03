import { createSlice } from '@reduxjs/toolkit';

const nameInitialState = '';

const nameSlice = createSlice({
  name: 'name',
  initialState: nameInitialState,
  reducers: {
    changeName(state, action) {
      return (state = action.payload);
    },
  },
});
export const { changeName } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
