import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { LogicalTask } from './Components/Task/logicalTask';
import { LogicalForm } from './Components/FormTask/logicalForm';

function App() {
  const [taskE, setTaskE] = useState(undefined)

  const handleTask = (task) => {
    setTaskE(task)
  }
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Interfaz">
          <LogicalForm Task={taskE} />
          <LogicalTask task={handleTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
