import { createSlice } from "@reduxjs/toolkit";
import { getRandomTasks } from "./taskThunk";


export const TaskSlice = createSlice({
    name: "task",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers:{
        removeTask: (state,action) => {
            state.data = state.data.filter((el) => el.content != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRandomTasks.fulfilled,(state,action) => {
            state.data = action.payload;
            state.status = "fulfilled"
        }).addCase(getRandomTasks.pending,(state,action) => {
            state.status = "pending"
        }).addCase(getRandomTasks.rejected,(state,action) => {
            state.status="error"
            state.error = action.error.message
        })
    }
})

export const getTaskData = (state) => state.task.data
export const getTaskStatus = (state) => state.task.status
export const getTaskError = (state) => state.task.error
export const {removeTask} = TaskSlice.actions