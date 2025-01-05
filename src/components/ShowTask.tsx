

function ShowTask({allTask}) {
    console.log(`all task is ${allTask}`);
    
  return (
    <div className="my-[40px]">
        {
            allTask &&  allTask.map((data)=>(
                <div key={data.id} className="w-[80%] mx-auto mt-[10px]  flex justify-between gap-[100px]">
                    <div>

                    <h1>{data.title}</h1>
                    </div>
                    <div className="flex gap-[10px]">
                        <button className="bg-green-600 px-[20px] rounded-lg py-[5px]">Edit</button>
                        <button className="bg-red-600 px-[20px] rounded-lg py-[5px]">Delete</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ShowTask