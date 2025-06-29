import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function TaskItem({task, index, onDelete, onMoveUp, onMoveDown}){
    return(
        <Card key={index} className='mb-3'>
        <Card.Body  className="d-flex justify-content-between align-items-center py-2 px-3">
            <div className='col'>
                <h5 className='row'>{task.title}</h5>
                <p className='row'>{task.priority}</p>
            </div>
            <div className='d-flex gap-2'>
                <Button variant="danger" onClick={() => onDelete(index)}>Delete</Button>
                <Button variant="warning" onClick={() => onMoveUp(index)}>Up</Button>
                <Button variant="info" onClick={() => onMoveDown(index)}>Down</Button>
            </div>
        </Card.Body>
    </Card>
    )
}

export default TaskItem