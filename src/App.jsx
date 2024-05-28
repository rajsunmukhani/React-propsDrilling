
import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {

    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("toDoTasks")) || []);

    
    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            <Header tasks={tasks}/>
            {/*  */}
            <Create tasks={tasks} setTasks={setTasks}/>
            {/*  */}
            <Show  tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};

export default App;
