import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { addTask } from '../../actions/todoActions';

const useStyles = makeStyles({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '50px 30px 30px',
    '& .MuiOutlinedInput-root': {
      color: '#3f51b5',

      '& fieldset': {
        border: '2px solid #666'
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
    width: 500,
  },
  button: {
    border: 0,
    borderRadius: 6,
    marginLeft: 10,
    width: 200,
  },
});

export const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onTextChange = (e) => setText(e.target.value);
  const classes = useStyles();

  const onSaveTaskClicked = () => {
    if (text) {
      dispatch(addTask((new Date()).getTime(), text, false ));
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
