import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    AddItem: (state, action) => {
      state.value.push(action.payload);
    },
    EditItem: (state, action) => {
      state.value.splice(action.payload["index"], 1, action.payload["task"]);
    },
    RemoveItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { AddItem, EditItem, RemoveItem } = todoSlice.actions;
export default todoSlice.reducer;
