import "./UpdatePopUp.css"
import ClearIcon from '@mui/icons-material/Clear';
export default function UpdatePopUp({UpdatePopUp,setOpen,tasktitle,updateValue,setUpdateValue}){

   
     function handlecancel(){
        setOpen(false)
     }
     function handleupdate(){
UpdatePopUp();
     }
    return(
        <>
          <div className="popup">
        <div className="popup-content">
            <div ><h3>Update Task</h3> <button onClick={handlecancel}><ClearIcon style={{cursor:"pointer"}} /></button> </div>

       <div className="inputs">
<label htmlFor="task">Tilte</label>
<input id="task" placeholder={tasktitle} value={updateValue} onChange={(e)=>setUpdateValue(e.target.value)}/>
       </div>
      

       <div className="div-btns">
        <button onClick={handlecancel}>Cancel</button>
        <button onClick={handleupdate} >Update</button>
       </div>
        </div>
    </div>
        </>
    )
}