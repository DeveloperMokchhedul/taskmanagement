

function ShowTask({allTask}) {
    console.log(`all task is ${allTask}`);
    
  return (
    <div>
        {
            allTask.map((task)=>(
                <div>
                    <h1>{task.title}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default ShowTask