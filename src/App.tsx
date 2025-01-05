import { useEffect, useState } from "react";

import ShowTask from "./components/ShowTask";
import TaskForm from "./components/TaskForm";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);


  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks)); 
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); 




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
    <div style={{backgroundImage:"url('https://projectsly.com/images/task-management-system-screenshot-1.png?v=1691124479409199525')", 
    width:"full", 
    height:"100vh", 
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    
    
    }} className="">
      <div className=" w-full  mx-auto py-[160px] p-[10px] rounded-lg bg-black/75 h-screen  ">
      <h1 className="uppercase text-center font-bold text-5xl pb-[20px] text-white">Task Management Project</h1>
      <div className="w-[80%] mx-auto">
        <TaskForm addTask = {addTask} />
      </div>
      <div>
        <ShowTask tasks = {tasks} setTasks = {setTasks} />
      </div>
      

      
      </div>
    </div>
  )
}

export default App