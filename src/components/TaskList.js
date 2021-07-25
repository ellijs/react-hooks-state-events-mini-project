import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleDelete }) {
  const taskLists = tasks.map((task) => <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete}/>)

  return (
    <div className="tasks">
      {taskLists}
    </div>
  );
}

export default TaskList;
