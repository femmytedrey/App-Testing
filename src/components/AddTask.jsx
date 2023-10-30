const AddTask = ({newTask, setNewTask, addTask, inputRef}) => {
    return(
        <>
            <div className = "row">
            <div className = "col">
                <input ref={inputRef} value = {newTask} onChange={(e) => setNewTask(e.target.value)} className='form-control form-control-lg'/>
            </div>
            <div className = "col-auto">
            <button onClick={addTask} type="button" className="btn btn-lg btn-success">Add Task</button>
            </div>
            </div>
        </>
    )
}

export default AddTask;