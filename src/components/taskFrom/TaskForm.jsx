import React, {useState} from 'react';
import './TaskFormStyle.css';
import {v4 as uuidv4} from 'uuid';

const TaskForm = props => {
  const [input, setInput] = useState(' ');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(), //uuid
      text: input,
      completed: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='task-input'
        placeholder='New task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>Add Task</button>
    </form>
  );
};

export default TaskForm;
