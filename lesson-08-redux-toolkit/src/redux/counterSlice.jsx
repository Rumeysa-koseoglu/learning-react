import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 65,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  //we define functions in reducers
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    }
  },
});

export const { increment, decrement} = counterSlice.actions;//we export our functions
export default counterSlice.reducer;
