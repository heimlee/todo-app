import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { addTask } from '../../actions/todoActions';

const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    margin: '50px 0 30px',
    width: '90%',

    '& .MuiOutlinedInput-root': {
      color: '#424242',
      
      '& fieldset': {
        border: '2px solid #5f6368'
      },
      '&:hover fieldset': {
        borderColor: '#3f51b5'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3f51b5',
      },
    },
  },
  input: {
    borderRadius: 6,
    width: '80%',
  },
  button: {
    border: 0,
    borderRadius: 6,
    marginLeft: 10,
    width: '20%',
  },
});

export const TodoInput = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const onTextChange = (e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.currentTarget.value);
  const classes = useStyles();

  const onSaveTaskClicked = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask(uuidv4(), text, false ));
      setText('');
    }
  };

  return(
    <FormControl variant="outlined" className={classes.root}>
      <InputLabel
        htmlFor="input-new-task"
        variant="outlined"
      >
        New Task
      </InputLabel>
      <OutlinedInput 
        id="input-new-task"
        className={classes.input}
        placeholder="Write your task"
        value={text}
        onChange={onTextChange}
        labelWidth={70}
      />
      <Button
        variant="contained"
        type="button"
        className={classes.button}
        onClick={onSaveTaskClicked}
        color="primary"
      >
        Add Task
      </Button>
    </FormControl>
  );
};
