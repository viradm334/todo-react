import React from "react";
import TaskList from "../TaskList";
import TaskItem from "../TaskItem";

function Home({tasks, setTasks}){

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
    <h1>Task Items</h1>
    <div className='container w-50'>
        {tasks.map((task, index) => 
                    <TaskItem key={index} task={task} index={index} onDelete={deleteTask} onMoveUp={moveTaskUp} onMoveDown={moveTaskDown}/>
            )}
        </div>
    </>)
}

export default Home