import React from "react";
import Task from "./Task";

function TaskList({ Tasks ,onDelete }) {
  return (
    <div className="tasks">
      <br></br>
      {Tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete}/>
      ))}
    </div>
  );
}

export default TaskList;