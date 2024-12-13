import React from 'react';
import { RecoilRoot } from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <RecoilRoot>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '30px 0px 300px 450px',fontSize:'1.3rem' }}>
        <h1>Recoil To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    </RecoilRoot> 
  );
}

export default App;
