
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ListIcon from "@mui/icons-material/List";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Page.css"
export default function Page() {
  return (
    <>
      <div className="content">
        <div className="header">
          <h1>New Page</h1>
          <p>stay focused and get things done</p>
        </div>

        <div className="cards">
          <div>
           <div className="icon list"> <ListIcon /></div>
            <p>All Tasks</p>
            <h1>0</h1>
          </div>
          <div>
           <div className="icon check"> <CheckCircleOutlinedIcon /></div>
         <p>Completed</p>
             <h1>0</h1>
          </div>
          <div>
         <div className="icon time"><AccessTimeIcon /></div>
           <p>UnCompleted</p>
             <h1>0</h1>
          </div>
        </div>

        <div className="btns">
            <button>ALL</button>
            <button>Completed</button>
            <button>UnCompleted</button>
        </div>
      </div>
    </>
  );
}
