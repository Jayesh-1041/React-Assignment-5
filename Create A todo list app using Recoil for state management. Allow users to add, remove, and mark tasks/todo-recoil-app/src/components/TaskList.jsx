import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './TodoListState';
import TaskItem from './TaskItem';

function TaskList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p>No tasks available. Add a task to get started!</p>
      )}
    </div>
  );
}

export default TaskList;
