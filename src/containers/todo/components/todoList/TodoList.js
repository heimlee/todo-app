import React from 'react';
import { useSelector } from 'react-redux';

import './todoList.scss';

export const TodoList = () => {
  const todos = useSelector(state => state.todo);

  const renderTodos = () => {
    return todos.map(todo => <div key={todo.id} todo={todo} isCompleted={todo.isCompleted} /> );
  };

  return(
    <section>
      {renderTodos()}
    </section>
  );
};
