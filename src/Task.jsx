import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Task.css"
export default function Task(){
    return(
        <>
        <div className="task-content">

<div className="left">
    <input type="checkbox"/>
<h2>task title</h2>
</div>
<div className="right">
<EditIcon  className="edit"/>
<DeleteIcon className="delete" />
</div>

        </div>
        
        </>
    )
}