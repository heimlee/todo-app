import { ADD_TASK, COMPLETED_TASK, REMOVE_TASK } from '../actions/todoActions';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state, action.payload
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== action.payload);
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
