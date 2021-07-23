import React from 'react';

import { TodoInput } from './components/todoInput/TodoInput';
import { TodoList } from './components/todoList/TodoList';

import './todo.scss';

export const Todo = () => {
  return(
    <div className="todo-wrapper">
      <TodoInput />
      <TodoList />
    </div>
  );
};