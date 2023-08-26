import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { TaskStateProps } from "../utils/type";

const initialState: TaskStateProps = {
  selectedTask: {
    id: uuidv4(),
    name: '',
    description: '',
    time: new Date(),
    concluded: false,
  },
};

const selectedTaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setSelectedTaskSlice(state, action: PayloadAction<any>) {
      state.selectedTask = action.payload;
    },
  },
});

export const { setSelectedTaskSlice } =
selectedTaskSlice.actions;

export default selectedTaskSlice.reducer;
