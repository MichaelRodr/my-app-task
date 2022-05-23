import React, {useState} from 'react';
import Task from '../task/Task';
import TaskForm from '../taskFrom/TaskForm';
import './TaskListStyle.css';

const Tasklist = props => {
  const [tasks, setTasks] = useState([{}]);

  const addTask = task => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updateTask = [task, ...tasks];
      setTasks(updateTask);
    }
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='content-task-list'>
        {tasks.map(task => {
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />;
        })}
      </div>
    </>
  );
};

export default Tasklist;
