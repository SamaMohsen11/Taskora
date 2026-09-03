import "./DeletePopUp.css"
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
export default function PopUp({deleteTask,setOpen}){
   function handlecancel(){
setOpen(false)
    }
    function handeledelete(){
     deleteTask();
     setOpen(false);
    }
return (
    <>
    <div className="popup">
        <div className="popup-content">
            <div ><h3>Delete Task</h3> <button onClick={handlecancel}><ClearIcon /></button> </div>
       <div className="delete-icon"><DeleteIcon style={{color:"red"}} /></div>
       <h3>Are You Sure you want to delete this task</h3>
       <div className="div-btns">
        <button onClick={handlecancel}>Cancel</button>
        <button onClick={handeledelete} >yes, Delete</button>
       </div>
        </div>
    </div>
    </>
)
}