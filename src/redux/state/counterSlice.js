import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    setValue: (state, action) => {
      if (action.payload) {
        state.value = action.payload;
      }
    },
  },
});

export const { increment, decrement, setValue } = counterSlice.actions;
export default counterSlice.reducer;
