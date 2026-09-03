import "./TaskList.css"
import Task from "./Task"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { pages } from "./Contexts/PagesContext";
export default function TaskList({tasks}){
      const { pageId } = useParams();

  const { pageData } = useContext(pages);
  const currentPage=pageData.find((page)=>{

    return page.id===Number(pageId)
  })

  

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