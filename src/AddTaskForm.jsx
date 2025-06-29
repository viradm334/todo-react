import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TaskItem from './TaskItem';


function AddTaskForm(){

    const [tasks, setTasks] = useState([
        { title: 'Eat breakfast', priority: 'High' },
        { title: 'Walk the dog', priority: 'Low' },
        { title: 'Take a shower', priority: 'Medium' }
      ]);
    const [newTask, setNewTask] = useState({
        title: '',
        priority: ''
    });

    function handleInputChange(event){
        const {name, value} = event.target;
        setNewTask(prev => ({
            ...prev, 
            [name]: value
        }))
    }

    function addTask(){

        if(newTask.title.trim() !== ''){
            const taskToAdd = {
                ...newTask
            }
            setTasks(prev => [...prev, taskToAdd]);
            setNewTask({title: '', priority: ''});
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

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

        <div className='container w-50'>
        {tasks.map((task, index) => 
                    <TaskItem key={index} task={task} index={index} onDelete={deleteTask} onMoveUp={moveTaskUp} onMoveDown={moveTaskDown}/>
            )}
        </div>
    </div>
    </>)
}

export default AddTaskForm