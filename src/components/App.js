import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasksStateArray , setTasksStateArray] = useState(TASKS)
  
  function handleTaskDelete(text) {
    const newTaskArray = tasksStateArray.filter((task) => task.text !== text);
    setTasksStateArray(newTaskArray);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList 
      tasks = {tasksStateArray}
      onDeleteTask = {handleTaskDelete}
      />
    </div>
  );
}

export default App;
