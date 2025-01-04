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
<h1 className="text-center font-bold text-[25px] mt-5">Todo App</h1>
<div className="flex gap-2 mb-4 justify-center mt-10 ">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="w-[500px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
          />
        <button  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
 onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="space-y-2">
        {tasklist.map((item) => (
          <div key={item.id} className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md shadow-sm"     >
            <span className="text-gray-800">{item.text}</span>
            <button className="px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => handleDeleteTask(item.id)}>Delete Task</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
