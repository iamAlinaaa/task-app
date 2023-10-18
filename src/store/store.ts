import { configureStore } from "@reduxjs/toolkit";
import { reducer as tasksReducer } from "../slices/task-slice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export { store };
