import { useState } from "react";
import TaskForm from "./components/Taskform"

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };
  console.log(tasks);
  




  return (
    <>
      <div className="w-1/2 bg-black/25 mx-auto my-[120px] p-[10px] rounded-lg">
      <h1 className="uppercase text-center font-bold text-2xl">Task Management Project</h1>
      <div>
        <TaskForm addTask = {addTask} />
      </div>
      

      
      </div>
    </>
  )
}

export default App