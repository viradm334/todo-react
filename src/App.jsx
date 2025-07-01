import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [
      { title: "Eat breakfast", priority: "High" },
      { title: "Walk the dog", priority: "Low" },
      { title: "Take a shower", priority: "Medium" },
    ]
  });

  const [newTask, setNewTask] = useState({
    title: "",
    priority: "",
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Routes>
      <Route path="/" element={<AddTask setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />} />
      <Route path="/tasks" element={<Home tasks={tasks} setTasks={setTasks} />} />
    </Routes>
  );
}

export default App;
