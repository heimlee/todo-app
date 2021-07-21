import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from '../todoItem/TodoItem';

import './todoList.scss';

export const TodoList = () => {
  const todos = useSelector(state => state.todo);

  const renderTodos = () => {
    return todos.map(todo => <TodoItem key={todo.id} todo={todo} isCompleted={todo.isCompleted} /> );
  };

  return(
    <section>
      {renderTodos()}
    </section>
  );
};
