export const ADD_TASK = 'ADD_TASK';
export const COMPLETED_TASK = 'COMPLETED_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  payload: {
    id,
    text,
    isCompleted,
  }
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const completedTask = (id, isCompleted) => ({
  type: COMPLETED_TASK,
  payload: {
    id,
    isCompleted,
  },
});
