import React, { useState } from "react";
import AddTaskForm from "../AddTaskForm";

function AddTask({ setTasks, newTask, setNewTask }) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function addTask() {
    if (newTask.title.trim() !== "") {
      const taskToAdd = {
        ...newTask,
      };
      setTasks((prev) => [...prev, taskToAdd]);
      setNewTask({ title: "", priority: "" });
    }
  }

  return (
    <>
      <AddTaskForm
        newTask={newTask}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />
    </>
  );
}

export default AddTask;
