import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddTask from './pages/AddTask'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AddTask/>}/>
      <Route path='/tasks' element={<Home/>}/>
    </Routes>
  )
}

export default App
