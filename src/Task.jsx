import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Task.css"
import { useContext } from "react";
import { pages } from "./Contexts/PagesContext";
export default function Task({task}){
      const { pageData, setPageData } = useContext(pages);
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
    
    return(
        <>
        <div className="task-content">

<div className={`left ${task.completed?"check":""}`}>
    <input type="checkbox"  checked={task.completed}   onChange={handleComplete}
/>
<h2>{task.title}</h2>
</div>
<div className="right">
<EditIcon  className="edit"/>
<DeleteIcon className="delete" onClick={deleteTask}/>
</div>

        </div>
        
        </>
    )
}