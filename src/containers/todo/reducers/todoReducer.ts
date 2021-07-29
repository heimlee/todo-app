import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from '../actions/todoActions';
import { TaskActionTypes, ITask } from '../../../types';

type stateTasks = ITask[];

export const todoReducer = (state: stateTasks = [], action: TaskActionTypes): stateTasks => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state, action.payload
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== action.payload.id);
    case COMPLETED_TASK:
      return [...state].map(task => {
        if (task.id === action.payload.id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    default:
      return state;
  }
};
