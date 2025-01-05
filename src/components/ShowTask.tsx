import { useState } from "react";
import { Task } from "../Task";

interface ShowTaskProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }

function ShowTask({ tasks, setTasks }:ShowTaskProps) {


  const [editId, setEditId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Task deleted");
  };

  const handleEdit = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
    setEditId(null); 
    setNewTitle(""); 
    console.log("Task updated");
  };

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  


  return (
    <div className="my-[40px]">
      {tasks.length === 0 ? <p className="text-center text-5xl font-bold text-white">Task is Empty</p>:
        tasks.map((data) => (
          <div
            key={data.id}
            className="w-[80%] text-white mx-auto mt-[10px] flex justify-between gap-[20px] items-center border-b pb-2"
          >
            <div className="flex-grow">
              {editId === data.id ? (
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Edit task title"
                  className="text-black border px-2 py-1 rounded w-full"
                />
              ) : (
                <h1>{data.title}</h1>
              )}
            </div>
            <div className="flex gap-[10px]">
              {editId === data.id ? (
                <button
                  onClick={() => handleEdit(data.id)}
                  className="bg-blue-600 text-white px-[20px] rounded-lg py-[5px]"
                >
                  UpDate
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(data.id);
                    setNewTitle(data.title); 
                  }}
                  className="bg-green-600 text-white px-[20px] rounded-lg py-[5px]"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(data.id)}
                className="bg-red-600 text-white px-[20px] rounded-lg py-[5px]"
              >
                Delete
              </button>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={data.isCompleted}
                  onChange={() => toggleTaskStatus(data.id)}
                  className="w-5 h-5"
                />
                {data.isCompleted ? "Complete" : "Incomplete"}
              </label>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ShowTask;
