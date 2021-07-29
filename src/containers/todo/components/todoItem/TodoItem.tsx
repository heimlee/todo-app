import React from 'react';
import { useDispatch } from 'react-redux';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';

import { completedTask, removeTask } from '../../actions/todoActions';

import './todoItem.scss';

interface TodoItemProps {
  todo: {
    id: number | string,
    text: string,
    isCompleted: boolean,
  }
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();

  return(
    <div className="todo-item">
      <span 
        onClick={() => dispatch(completedTask(todo.id, todo.isCompleted))}
        className="circle"
      >
        {!todo.isCompleted ? 
          <RadioButtonUncheckedIcon style={{ fontSize: 30 }} /> :
          <CheckCircleIcon style={{ fontSize: 30, color: '#3f51b5' }}/>
        }
      </span>
      <span
        onClick={() => dispatch(completedTask(todo.id, todo.isCompleted))}
        className={todo.isCompleted ? 'completed text' : 'text'}
      >
        {todo.text}
      </span>
      <span 
        onClick={() => dispatch(removeTask(todo.id))}
        className="delete-task"
      >
        <CloseIcon style={{ fontSize: 30 }} />
      </span>
    </div>
  );
};
