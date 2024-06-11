import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../state/counterSlice";
import todoSlice from "../state/todoSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
});
