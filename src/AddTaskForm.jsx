import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTaskForm({newTask, handleInputChange, addTask}){

    return(<>
    <div className='to-do-list'>
        <h1>Add To Do List</h1>

        <div className='container mb-3 w-50'>
            <div className='row'>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" className='col-md-4 mb-3' name='title' value={newTask.title} onChange={handleInputChange} placeholder="Write your task title here..." />
            </Form.Group>
            <Form.Select className='col-md-4 mb-3' name='priority' value={newTask.priority} onChange={handleInputChange}>
                <option value=''>Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </Form.Select>
            <Button variant="success" onClick={addTask}>Add Task</Button>
            </div>
        </div>
    </div>
    </>)
}

export default AddTaskForm