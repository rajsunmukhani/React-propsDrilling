import React, { useState } from 'react'
import { nanoid } from "nanoid";

const Create = (props) => {

    const {tasks,setTasks} = props;

    const [title,setTitle] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        const newToDo = {id : nanoid(),title,completed : false}
        setTasks([...tasks,newToDo]);
        setTitle("");
        localStorage.setItem("toDoTasks",JSON.stringify([...tasks,newToDo]))
    }

  return (
    <form onSubmit={submitHandler} className="w-[35%] flex justify-between px-5 my-[2%]">
        <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="write your next task..."
            className="px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700 "
            type="text"
        />
        <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
            <i className="ri-add-fill"></i>
        </button>
    </form>
  )
}

export default Create