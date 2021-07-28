import React from 'react';

import { TodoInput } from './components/todoInput/TodoInput';
import { TodoList } from './components/todoList/TodoList';

import './todo.scss';

export const Todo:React.FC = () => {
  return(
    <>
      <h1 className="todo-title">Todo App</h1>
      <div className="todo-wrapper">
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
};
