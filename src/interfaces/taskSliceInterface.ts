import { TaskInterface } from "./taskInterface";

export const statusOptions = <const>["fulfilled","rejected","idle","pending"];

export interface TaskSliceInitialStateInterface {
    data: TaskInterface[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | undefined 
}