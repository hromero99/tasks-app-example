import { configureStore } from "@reduxjs/toolkit";
import { TaskSlice } from "../features/tasks/taskSlice";


export const store = configureStore({
    reducer:{
        task: TaskSlice.reducer
    }
})