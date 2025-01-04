import TaskForm from "./components/Taskform"



function App() {
  return (
    <>
      <div className="w-1/2 bg-black/25 mx-auto my-[120px] p-[10px] rounded-lg">
      <h1 className="uppercase text-center font-bold text-2xl">Task Management Project</h1>
      <div>
        <TaskForm />
      </div>

      
      </div>
    </>
  )
}

export default App