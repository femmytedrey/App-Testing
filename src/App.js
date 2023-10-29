import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const [toDo, setToDo] = useState([
    // {id: "1", title: "Task 1", status: "false"},
    // {id: "2", title: "Task 2", status: "false"},
    {"id": 2, "title": "Task 2", "status": false},
    {"id": 1, "title": "Task 1", "status": false}
  ]);

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  const addTask = () => {
    
  } 

  /////////////////////////////////////////////////

  const deleteTask = () => {

  }

  /////////////////////////////////////////////////

  const markTask = (id) => {

  }

  /////////////////////////////////////////////////

  const cancelUpdate = () => {

  }

  /////////////////////////////////////////////////

  const changeTask = () => {

  }

  /////////////////////////////////////////////////

  const updateTask = () => {

  }

  /////////////////////////////////////////////////

  return (
    <div className="container App">
      <h2>To Do List App (ReactJS)</h2>

      <div className = " row">
        <div className = "col">
          <input className='form-control form-control-lg'/>
        </div>
        <div className = "col-auto">
          
        </div>
      </div>

      {/* display ToDo */}

      {toDo && toDo.length ? '' : 'No Task Added'}
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => {
          return(
            <React.Fragment key = {task.id}>
              <div className='col taskBg'>
                <div className={task.status ? 'done': ''}>
                  <span className = 'taskNumber'>{index + 1}</span>
                  <span className = 'taskText'>{task.title}</span>
                </div>
                <div className='iconsWrap'>
                  <span title = "Completed / Not Completed">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  <span title = "Edit">
                    <FontAwesomeIcon icon={faPen} />
                  </span>
                  <span title = "Delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
              
            </React.Fragment>

            
          )
        })
      }
    </div>
  );
}

export default App;
