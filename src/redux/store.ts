import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import apiReducer from "./apiSlice";
import selectedTaskSlice from "./selectedTaskSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    selectedTask: selectedTaskSlice
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
