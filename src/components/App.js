import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ tasks, setTasks ] = useState(TASKS)
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const handleDelete = (value) => {
      const deleteTask = tasks.filter(task => task.text !== value)
      setTasks(deleteTask)
  }
  console.log(tasks)
  const handleFilter = (value) => {
      console.log(value)
      setSelectedCategory(value)
  }    
  const filter = tasks.filter((task) => {
      if ( selectedCategory === "All" ) return true;
      return task.category === selectedCategory
  })

  const onTaskFormSubmit = (formData) => {
      const addData = tasks.concat(formData)
      setTasks(addData)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filter} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
