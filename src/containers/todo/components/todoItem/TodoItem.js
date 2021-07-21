import React from 'react';
import { useDispatch } from 'react-redux';

import { completedTask, removeTask } from '../../actions/todoActions';

import './todoItem.scss';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return(
    <div className="todo-item">
      <span onClick={() => dispatch(completedTask(todo.id, todo.isCompleted))} className={todo.isCompleted ? 'mark check-circle' : 'mark circle'}></span>
      <span onClick={() => dispatch(completedTask(todo.id, todo.isCompleted))} className={todo.isCompleted ? 'completed text' : 'text'}>{todo.text}</span>
      <span onClick={() => dispatch(removeTask(todo.id))} className="delete-task">X</span>
    </div>
  );
};
