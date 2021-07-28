import { TaskActionTypes } from '../../../types';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETED_TASK = 'COMPLETED_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


export const addTask = (id: number, text: string, isCompleted: boolean): TaskActionTypes => ({
  type: ADD_TASK,
  payload: {
    id,
    text,
    isCompleted,
  },
});

export const removeTask = (id: number): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },
});

export const completedTask = (id: number, isCompleted: boolean): TaskActionTypes => ({
  type: COMPLETED_TASK,
  payload: {
    id,
    isCompleted,
  },
});
