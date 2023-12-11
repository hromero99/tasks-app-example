import { createAsyncThunk } from "@reduxjs/toolkit";
import {TaskInterface} from "../../interfaces/taskInterface";

export const getRandomTasks = createAsyncThunk<TaskInterface[], void, { state: any, rejectValue: string }>("task/randomTasks",async(): Promise<TaskInterface[]>=> {
    /*const request = await fetch("https://fakerapi.it/api/v1/texts?_quantity=10&_characters=10")
    const json = await request.json()
    return json.data*/
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            {content: "123"}, {content: "pepe"}, {content: "romero"}, {content: "hector"}, {content: "123"}, {content: "123"}

          ]);
        }, 1);
      });
});