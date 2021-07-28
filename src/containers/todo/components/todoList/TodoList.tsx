import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from '../todoItem/TodoItem';
import { RootState } from '../../../../reducers/index';

import './todoList.scss';

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todo);

  const renderTodos = () => {
    return todos.map((todo) => <TodoItem key={todo.id} todo={todo} /> );
  };

  return(
    <section className="todo-list">
      {renderTodos()}
    </section>
  );
};
