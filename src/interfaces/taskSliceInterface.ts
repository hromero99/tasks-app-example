import { TaskInterface } from "./taskInterface";

export const statusOptions = <const>["fulfilled","rejected","idle","pending"];

export interface TaskSliceInitialStateInterface {
    data: TaskInterface[],
    status: string,
    error: string | undefined 
}