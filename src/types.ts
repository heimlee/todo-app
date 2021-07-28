// Store

import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from "./containers/todo/actions/todoActions";

export interface ITask {
  id: number,
  text: string,
  isCompleted: boolean,
};

// Actions

interface IAddTaskAction {
  type: typeof ADD_TASK,
  payload: ITask,
};

interface IRemoveTaskAction {
  type: typeof REMOVE_TASK,
  payload: {
    id: number,
  },
};

interface ICompletedTaskAction {
  type: typeof COMPLETED_TASK,
  payload: {
    id: number,
    isCompleted: boolean,
  },
};

export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompletedTaskAction;
