import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../actions/todoActions';

import './todoInput.scss';

export const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onTextChange = (e) => setText(e.target.value);

  const onSaveTaskClicked = () => {
    if (text) {
      dispatch(addTask((new Date()).getTime(), text, false ));
      setText('');
    }
  };

  return(
    <form>
      <input 
        type="text" 
        className=""
        placeholder="Write your task"
        value={text}
        onChange={onTextChange}
      />
      <button
        type="button"
        className=""
        onClick={onSaveTaskClicked}
      >
        Add
      </button>
    </form>
  );
};
