import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const [toDo, setToDo] = useState([
    {id: "1", title: "Task 1", status: "false"}
    {id: "2", title: "Task 2", status: "false"}
  ])

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')
  
  return (
    <div className="container App">
      <h2>To Do List App (ReactJS)</h2>
    </div>
  );
}

export default App;
