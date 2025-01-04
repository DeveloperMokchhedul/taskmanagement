import React, { useState } from "react";


const TaskForm: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`task title is ${taskTitle}`);
    

  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
    <div className="flex gap-5">
    <input 
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
        className="w-full bg-transparent px-3 py-2 rounded-lg outline-none border border-green-600"
      />
      <button type="submit" className="bg-green-600 px-5 rounded-lg">Add</button>
    </div>
    </form>
  );
};

export default TaskForm;
