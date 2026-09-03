import "./TaskList.css"
import Task from "./Task"
export default function TaskList({tasks}){
    return(
        <>
       <div className="container">
       {
       
       tasks.map((task)=>{
        return <Task task={task} key={task.id}/>
       })}
      
       </div>
        </>
    )
}