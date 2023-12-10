import { createAsyncThunk } from "@reduxjs/toolkit";


export const getRandomTasks = createAsyncThunk("task/randomTasks",async() => {
    const request = await fetch("https://fakerapi.it/api/v1/texts?_quantity=10&_characters=10")
    const json = await request.json()
    return json.data
})