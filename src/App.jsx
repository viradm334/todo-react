import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskForm from './AddTaskForm'
import TaskItem from './TaskItem'
import TaskList from './TaskList'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AddTaskForm/>}/>
      <Route path='/tasks' element={<TaskList/>}/>
    </Routes>
  )
}

export default App
