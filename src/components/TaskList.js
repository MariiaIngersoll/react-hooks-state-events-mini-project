import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  console.log(tasks)
  const tasksToDisplay = tasks.map((task, index)=>{
    return (
      <Task key={index} text={task.text} category={task.category} handleDelete={handleDelete}/>
  )})
  console.log(tasksToDisplay)
  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
