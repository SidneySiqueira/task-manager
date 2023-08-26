import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TasksProps } from "../utils/type";

interface Api {
  tasks: TasksProps[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface Props {
  item: string,
  patchData: TasksProps
}

const initialState: Api = {
  tasks: [],
  status: "idle",
  error: null,
};

const url = "https://tasks-4b4cb-default-rtdb.firebaseio.com"

export const fetchApi = createAsyncThunk("api/fetch", async () => {
  const response = await axios.get(`${url}/tasks.json`);  
  return response.data;
});

export const AddApi = createAsyncThunk("api/post", async (postData: TasksProps) => {   
  const response = await axios.post(`${url}/tasks.json`, postData);      
  return response.data;
});

export const updateApi = createAsyncThunk("api/update", async ({ item, patchData }:Props, { getState }) => {   
  const response = await axios.patch(`${url}/tasks/${item}.json`, patchData);  
  return response.data;
});

export const deleteApi = createAsyncThunk("api/delete", async (itemId: string) => {
  await axios.delete(`${url}/tasks/${itemId}.json`);        
  return itemId;
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(AddApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(AddApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(updateApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = Object.values(action.payload);
        const index = state.tasks.findIndex((task: { id: string; }) => task.id === action.payload.id);
        state.tasks[index] = action.payload;
      })
      .addCase(updateApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      })
      .addCase(deleteApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteApi.fulfilled, (state, action) => {        
        state.status = "succeeded";
        const tasksArray = Object.values(action.payload);
        if (Array.isArray(state.tasks)) {
          state.tasks = state.tasks.filter((task) => {
            return !tasksArray.some((deletedTask) => (deletedTask as unknown as TasksProps).id === task.id);
          });
        }
      })
      .addCase(deleteApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
});

export default apiSlice.reducer;