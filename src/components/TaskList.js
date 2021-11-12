import React from "react";
import Task from "./Task";

function TaskList({tasks , onDeleteTask}) {
  const tasksArray = tasks.map((task) => {
    return <Task 
    key={task.text} 
    text={task.text} 
    category={task.category}
    handleTaskDelete={onDeleteTask}/>
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    {tasksArray}
    </div>
  );
}

export default TaskList;
