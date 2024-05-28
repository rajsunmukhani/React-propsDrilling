import React from 'react'

const Show = (props) => {

    const {tasks,setTasks} = props;

    const completeHandler = (index) => {
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        setTasks(copyTasks);
        localStorage.setItem("toDoTasks",JSON.stringify(copyTasks));
    }

    const deleteHandler = (id) => {
        setTasks(tasks.filter(t => t.id != id))
        localStorage.setItem("toDoTasks",JSON.stringify(tasks.filter(t => t.id != id)));
    }

  return (
    
            <ul className="list-none w-[35%] ">
                {tasks.length > 0 ? tasks.map((task,index) =>{
                     return(
                         <li key={task.id} className="mb-5 flex justify-between items-center border rounded-xl p-5">
                     <div className="flex items-center">
                         <div
                         onClick={() => completeHandler(index)}
                             className={ task.completed === false ? `border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600` : `bg-green-600 mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                         ></div>
                         <h1
                             className={ task.completed === false ? ` text-2xl font-extrabold text-yellow-100` : `line-through text-2xl font-extrabold text-yellow-100`}
                         >
                             {task.title}
                         </h1>
                     </div>
                     <div className="flex gap-3 text-2xl text-yellow-100">
                         <i className="ri-file-edit-line"></i>
                         <i onClick={() => deleteHandler(task.id)} className="ri-delete-bin-3-line"></i>
                     </div>
                 </li>)
                 
                }): <h1 className="mt-10 text-orange-600 text-center w-full text-3xl">No Tasks Pending</h1>}
            </ul>

  )
}

export default Show