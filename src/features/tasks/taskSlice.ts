import { createSlice } from "@reduxjs/toolkit";
import { getRandomTasks } from "./taskThunk";
import { TaskInterface } from "../../interfaces/taskInterface";
import { TaskSliceInitialStateInterface, statusOptions } from "../../interfaces/taskSliceInterface";



const initialState: TaskSliceInitialStateInterface  = {
    data: [],
    status: "idle",
    error: undefined
}

export const TaskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers:{
        removeTask: (state,action):void => {
            state.data = state.data.filter((el) => el.content != action.payload)
        },
        addTask: (state,action): void => {
            state.data.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRandomTasks.fulfilled,(state,action):void => {
            state.data = action.payload;
            state.status = "fulfilled"
        }).addCase(getRandomTasks.pending,(state,action):void => {
            state.status = "pending"
        }).addCase(getRandomTasks.rejected,(state,action): void => {
            state.status= "rejected"
            state.error = action.error.message
        })
    }
})

export const getTaskData = (state): TaskInterface[] => state.task.data
export const getTaskStatus = (state) => state.task.status
export const getTaskError = (state) => state.task.error
export const {removeTask} = TaskSlice.actions