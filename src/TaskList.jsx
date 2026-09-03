import "./TaskList.css"
import Task from "./Task"
export default function TaskList(){
    return(
        <>
       <div className="container">
         <Task/>
         <Task/>
         <Task/>
      
       </div>
        </>
    )
}