1. Cloned UI

2. install nanoid as : *npm i nanoid*

3. make useState[title,setTitle] and applied on change on input tag

4. <!-- log and check title working or not -->

5. apply on submit on the form and pass the refrence of function submitHandler function.

6. make a tasks array using useState.

7. make submitHandler function and inside it make store the data in a varibale, and then deepClone the existing tasks array and in setTasks add that varibale holding new task.

8. <!-- log and check tasks array getting updated or not -->

9. now we have to store the data somewhere so that we get data even after page is restored, for that we will be using localStorage of browser for storing the data.

10. to store the data in localStorage we have to simply write localStorage.setItem("name with which we want to save the data", data in string form)

11. now get the data at the time of starting the web page for that simply update the data in tasks useState as if there is already data present in localStorage then load that data otherwise just make a array

12. now simply update the frontend and make the value of total tasks dynamic by writing in place of 0/0 as 0/{tasks.length}

13. in the views area in app.jsx file under App function in third part we are rendering the tasks, thus, make it dynamic by simply writing :

*{tasks.map((task) => {
return(
    <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
            <div className="flex items-center">
                <div
                    className={`border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                ></div>
                <h1
                    className={` text-2xl font-extrabold text-yellow-100`}
                >
                    Task 01
                </h1>
            </div>
            <div className="flex gap-3 text-2xl text-yellow-100">
                <i className="ri-file-edit-line"></i>
                <i className="ri-delete-bin-3-line"></i>
            </div>
    </li>
)
})}*

14. what if there are no tasks, as user opens out to do application for the first time. For that simply apply a conditional expression that if tasks.length > 0 then only the above code should display tasks, otherwise there should be a h1 tag with data *No Tasks Pending*.

{ tasks.length > 0 ? tasks.map((task) => {
    return(
        <li className="mb-5 flex justify-between items-center border rounded-xl p-5">
            <div className="flex items-center">
                <div
                    className={`border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                ></div>
                <h1
                    className={` text-2xl font-extrabold text-yellow-100`}
                >
                    Task 01
                </h1>
            </div>
            <div className="flex gap-3 text-2xl text-yellow-100">
                <i className="ri-file-edit-line"></i>
                <i className="ri-delete-bin-3-line"></i>
            </div>
        </li>
    )
}) : <h1 className="mt-10 text-orange-600 text-center text-3xl">No Tasks Pending</h1>}

15. Now make the data dynamic as in place of task 01 simply write task.title

16. also give the dynamic key to li tag as task.id

17. Now on click on the bullet of the task we have to mark it as completed or not completed. For that we will simply apply onClick attribute to the the bullet div with a refrence of completeHandler function under a high order function as we want to send index as an parameter in the function.

Also, do not forget to take that index param from the above map function with task as param

18. Under completeHandler function, underGo following changes : 
    *const completeHandler = (index) => {
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        setTasks(copyTasks);
        localStorage.setItem('tasks', JSON.stringify(copyTasks));
    }*

    create a deep copy of original tasks array.
    change the value in the copy.
    set the copy as original value.
    store the data in localStorage.

19. Now apply the Css changes in bullet div to diffrentiate between tasks completed from tasks not completed.
Simply update the li tag as : 

    * <li key={singleTask.id} className="mb-5 flex justify-between items-center border rounded-xl p-5">
        <div className="flex items-center">
            <div
                onClick={() => completeHandler(index)}
                className={singleTask.completed === false?`border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`:`bg-green-600 mr-4 rounded-full w-[30px] h-[30px]  border-orange-600` }
            ></div>
            <h1
                className={singleTask.completed === false?` text-2xl font-extrabold text-yellow-100` : `line-through text-2xl font-extrabold text-yellow-100`}
            >
                {singleTask.task}
            </h1>
        </div>
        <div className="flex gap-3 text-2xl text-yellow-100">
            <i className="ri-file-edit-line"></i>
            <i className="ri-delete-bin-3-line"></i>
        </div>
    </li>*


20. Also make the number of completed task dunamic by simply replacing the 0 with:
 *{tasks.filter((t)=>t.completed===true).length}*

21. Now enabling the task delete option for that : there are two ways simply make hogh order function and pass it in onClick atrribute in delete icon with index as parameter and splice the index accordingly as : 
    personal my way : 
    *<i onClick={() => deleteHandler(index)} className="ri-delete-bin-3-line"></i>*
    *const deleteHandler = (index) => {
        const copyTasks = [...tasks];
        copyTasks.splice(index,1);
        setTasks(copyTasks);
        localStorage.setItem("toDoTasks",JSON.stringify(copyTasks));
    }*

    Way according to class[React]:
    *<i onClick={() => deleteHandler(task.id)} className="ri-delete-bin-3-line"></i>*
    *const deleteHandler = (id) => {
        setTasks(tasks.filter(t => t.id != id))
        localStorage.setItem("toDoTasks",JSON.stringify(tasks.filter(t => t.id != id)));
    }*