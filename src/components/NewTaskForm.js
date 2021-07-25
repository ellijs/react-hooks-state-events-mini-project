import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [ formData, setFormData ] = useState({
      text: "",
      category: "code"
  })

  const handleChange = (e) => {
      const key = e.target.name
      const value = e.target.value

      const newData = {
        ...formData, [key]: value
      }

      setFormData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData)
  }

  const addCategories = categories.map(category => {
    if (category === "All") return false
    return <option key={category}>{category}</option>
  })


  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {addCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
