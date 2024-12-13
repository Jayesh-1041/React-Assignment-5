import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './TodoListState';

function AddTask() {
  const [taskText, setTaskText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: Date.now(), // Unique ID
          text: taskText,
          isComplete: false,
        },
      ]);
      setTaskText(''); // Clear input field
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{
          padding: '10px',
          width: '80%',
          marginRight: '10px',
        }}
      />
      <button onClick={handleAddTask} style={{ padding: '10px 20px',background:"#d4edda",marginTop:"15px" }}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
