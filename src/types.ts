// Store

import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./containers/todo/actions/todoActions";

export interface ITask {
  id: number | string,
  text: string,
  isCompleted: boolean,
};

// Actions

interface IAddTaskAction {
  type: typeof ADD_TASK,
  payload: {
    id: number | string,
    text: string,
    isCompleted: boolean,
  },
};

interface IRemoveTaskAction {
  type: typeof REMOVE_TASK,
  payload: {
    id: number | string,
  },
};

interface ICompletedTaskAction {
  type: typeof COMPLETED_TASK,
  payload: {
    id: number | string,
    isCompleted: boolean,
  },
};

export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompletedTaskAction;
