import React, { useEffect, useRef } from 'react';

const UpdateTask = ({ updateData, changeTask, updateTask, cancelUpdate}) => {
    const inputElement = useRef(null);

    useEffect(() => {
        if (updateData) {
        inputElement.current.focus();
        }
    }, [updateData]);
    return(
        <>
          <div className='row'>
            <div className='col'>
              <input ref={inputElement} value={updateData && updateData.title} onChange={(e) => changeTask(e)} className='form-control form-control-lg'/>
            </div>
            <div className='col-auto'>
              <button type = "button" onClick={() => {updateTask(); cancelUpdate()}} className='btn btn-lg btn-success mr-20'>Update</button>
              <button onClick={cancelUpdate} type = "button" className='btn btn-lg btn-warning mr-20'>Cancel</button>
            </div>
          </div>
        </>
    )
}

export default UpdateTask;