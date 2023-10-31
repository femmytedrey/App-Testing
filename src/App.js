import { useState, useRef, useEffect } from 'react';
import AddTask from './components/AddTask.jsx'
import UpdateTask from './components/UpdateTask.jsx'
import ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')
  const inputRef = useRef(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      console.log('Tasks loaded from localStorage:', storedTasks);
      setToDo(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(toDo));
    console.log('Tasks saved to localStorage:', toDo);
  }, [toDo]);
  
  


  const addTask = () => {
    if (newTask.trim() === ''){
      alert('Task field cannot be empty.');
    }
    else {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry])
      setNewTask('');

      inputRef.current.focus()
    }
  } 

  /////////////////////////////////////////////////

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id)
    setToDo(newTasks)
  }

  /////////////////////////////////////////////////

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if(task.id === id){
        return ({...task, status: !task.status});
      }
      return task;
    })
    setToDo(newTask)
  }

  /////////////////////////////////////////////////

  const cancelUpdate = () => {
    setUpdateData('');
  }

  /////////////////////////////////////////////////

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }

  /////////////////////////////////////////////////

  const updateTask = () => {
    if(updateData.title.trim() === ''){
      alert('Edit field cannot be empty')
    } else {
      // Find the existing task being updated
      const existingTask = toDo.find((task) => task.id === updateData.id);
    
      // Check if the text is the same as the existing task
      if (existingTask.title === updateData.title) {
        alert("No changes in the text field.");
      } 
      else {
        // Update the task only if there are changes
        let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
        let updatedObject = [...filterRecords, updateData];
        setToDo(updatedObject);
      }
    }
    
  }

  /////////////////////////////////////////////////

  return (
    <div className="container App">
      <h2>To Do List App (ReactJS)</h2>

      {/* Update Task       */}

      {updateData && updateData ? (
        <UpdateTask 
          updateData = {updateData}
          changeTask = {changeTask}
          updateTask = {updateTask}
          cancelUpdate = {cancelUpdate}
        />
      ) : (
        <AddTask 
          newTask = {newTask}
          setNewTask = {setNewTask}
          addTask = {addTask}
          inputRef = {inputRef}
        />
      )}

      {/* display ToDo */}

      {toDo && toDo.length ? '' : 'No Task Added'}
      
      <ToDo
        toDo = {toDo}
         markDone = {markDone}
         setUpdateData = {setUpdateData}
         deleteTask = {deleteTask}
      />
    </div>
  );
}

export default App;
