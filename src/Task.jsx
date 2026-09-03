import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Task.css"
import DeletePopUp from './DeletePopUp';
import UpdatePopUp from './UpdatePopUp';
import { useContext, useState } from "react";
import { pages } from "./Contexts/PagesContext";
export default function Task({task}){
      const { pageData, setPageData } = useContext(pages);
      const [delopen,setDelOpen]=useState(false)
      const [updopen,setUpdOpen]=useState(false)
      const [updateValue,setUpdateValue]=useState("")
     const handleComplete = () => {
    const updatedPages = pageData.map((page) => ({
      ...page,
      tasks: page.tasks.map((item) =>
        item.id === task.id
          ? { ...item, completed: !item.completed }
          : item
      ),
    }));

    setPageData(updatedPages);
  };
  function deleteTask(){
   const updatedPages=pageData.map((page)=>({
    ...page,
    tasks:page.tasks.filter((item)=>item.id!==task.id)
   })
    
   )
   setPageData(updatedPages);
  }
  function updatetask(){

    const updatedPages=pageData.map((page)=>{
      return {...page,tasks:page.tasks.map((item)=>{
         if(item.id===task.id){
          return {...item,title:updateValue}
        

    }
      else{
            return item
          }
      }
  )}
    })
      setPageData(updatedPages);
  setUpdOpen(false);
  }
    
    return(
        <>
          <div>{delopen&&<DeletePopUp deleteTask={deleteTask} setOpen={setDelOpen}/>} </div>
          <div>{updopen&&< UpdatePopUp UpdatePopUp={updatetask} setOpen={setUpdOpen} tasktitle={task.title}  updateValue={updateValue} setUpdateValue={setUpdateValue}/>} </div>
        <div className="task-content">

<div className={`left ${task.completed?"check":""}`}>
    <input type="checkbox"  checked={task.completed}   onChange={handleComplete}
/>
<h2>{task.title}</h2>
</div>
<div className="right">
<EditIcon  className="edit" onClick={()=>setUpdOpen(true)}/>
<DeleteIcon className="delete" onClick={()=>{setDelOpen(true)}}  />
</div>

        </div>
        
        </>
    )
}