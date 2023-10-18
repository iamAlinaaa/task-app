import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
    id: string;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    status: "ToDo" | "In Progress" | "Done";
  };
  

type State = {
  tasks: Task[];
};

const initialState: State = {
  tasks: [],
};

const { reducer, actions, name } = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload;
      }
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === "Done" ? "ToDo" : "Done";
      }
    },
  },
});

export { actions, name, reducer };
