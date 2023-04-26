import React, { useState} from "react";

function NewTaskForm({ categories, onTaskFromSubmit }) {
const [textInput, setTextInput] = useState("")
const [categoryInput, setCategoryInput] = useState("Code")
  function renderOptions(){
     return categories.map(category=> {
       return  <option key={category}>{category}</option>
    })
  }

  const handleChange = (e) => {
      if (e.target.name === "text") {
        setTextInput(e.target.value)
      }else {
        setCategoryInput(e.target.value)
      }
        
  }
  return (
    <form onSubmit={(e)=> onTaskFromSubmit(e, textInput, categoryInput)} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" value={textInput} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={categoryInput}>
          {renderOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
