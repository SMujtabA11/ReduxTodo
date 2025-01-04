import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from './Store/store';

function App() {
  const tasklist = useSelector((state) => state.todo.task);
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(todoActions.addTask(task));
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(todoActions.deleteTask(id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {tasklist.map((item) => (
          <div key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => handleDeleteTask(item.id)}>Delete Task</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
