import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './TodoListState';

function TaskItem({ task }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleComplete = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((t) =>
        t.id === task.id ? { ...t, isComplete: !t.isComplete } : t
      )
    );
  };

  const removeTask = () => {
    setTodoList((oldTodoList) => oldTodoList.filter((t) => t.id !== task.id));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: task.isComplete ? '#d4edda' : '#f8d7da',
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={task.isComplete}
          onChange={toggleComplete}
          style={{ marginRight: '10px' }}
        />
        <span
          style={{
            textDecoration: task.isComplete ? 'line-through' : 'none',
          }}
        >
          {task.text}
        </span>
      </div>
      <button onClick={removeTask} style={{ backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px' }}>
        Remove
      </button>
    </div>
  );
}

export default TaskItem;
