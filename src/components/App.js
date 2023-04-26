import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filter, setFilter] = useState("All")
  console.log(filter)

  function onTaskFormSubmit( event, text, category) {
    event.preventDefault()
    setTasks([...tasks, {text: text, category: category}])
  }

 
  function handleDelete(text) {
      const filteredArray = tasks.filter((task)=>  task.text !== text)

      setTasks(filteredArray)
  }
  function handleClick(e) {
    e.target.className = "selected"
    setFilter(e.target.innerText)
  }

  function displayTasks() {
    return tasks.filter(task=> {
      if(filter === "All") {
        return true
    } else{
      return task.category === filter

    }})
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleClick={handleClick} categories={CATEGORIES}/>
      <NewTaskForm onTaskFromSubmit={onTaskFormSubmit} categories ={CATEGORIES.filter(category => category !== "All")}/>
      <TaskList tasks ={displayTasks()} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
