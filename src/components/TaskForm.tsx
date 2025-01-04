// import React, { useState } from "react";

// interface TaskFormProps {
//   addTask: (title: string) => void;
// }

// const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
//   const [taskTitle, setTaskTitle] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (taskTitle.trim()) {
//       addTask(taskTitle);
//       setTaskTitle("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-form">
//       <input
//         type="text"
//         value={taskTitle}
//         onChange={(e) => setTaskTitle(e.target.value)}
//         placeholder="Add a new task"
//         className="input"
//       />
//       <button type="submit" className="btn">Add</button>
//     </form>
//   );
// };

// export default TaskForm;
