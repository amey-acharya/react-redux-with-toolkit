import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, shown: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.shown = !state.shown;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
