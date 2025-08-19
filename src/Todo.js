import React, { useState } from "react";

function Todo(){
    const [task,setTask]=useState('');
    function handleInput(e){
        setTask(e.target.value)
    }
    const [tasks,setTasks]=useState([])
    function addTask(){
        if(task.trim() !== ''){
            
        setTasks([...tasks,task])
        setTask('')
        }

    }
    function removeTask(indexToRemove){
        const removedTask=tasks.filter((_,index)=>index!==indexToRemove);
        setTasks(removedTask)

    }
    return (
        <>
        <input placeholder="Enter Task" type="text" onChange={handleInput} value={task} />
        <button onClick={addTask}>Add Task</button>
        <ol>
            {tasks.map((item,index)=>{
               return (<li key={index}>{item}<button onClick={()=>removeTask(index)}>Delete</button></li>)
               
            })}
        </ol>
        </>
    )
}
export default Todo;