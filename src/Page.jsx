
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ListIcon from "@mui/icons-material/List";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { pages } from "./Contexts/PagesContext";
import { useContext,useState ,useRef  } from "react";
import { useParams} from "react-router-dom";
import "./Page.css"
import TaskList from "./TaskList" 
import NotFound from "./NotFound";

export default function Page({pageNames,setPageNames}) {
  const { pageData,setPageData } = useContext(pages);
  const [filter, setFilter] = useState("all");
  const [task,setTask]=useState("")
  const { pageId } = useParams();
  const pageName = pageNames[pageId] || "";
  const taskInputRef = useRef(null);
 
 // current page 
  const currentPage = pageData.find(
    (page) => page.id === Number(pageId)
  );
  if (!currentPage) {
return <NotFound/>
}
const tasks = currentPage?.tasks || [];

// (dynamic cards numbers)
const allTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const unCompletedTasks = tasks.filter(
  (task) => !task.completed
).length;

//filtred data (filtered buttons)
const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") {
    return task.completed;
  }

  if (filter === "uncompleted") {
    return !task.completed;
  }

  return true; // all
});

// add task
function addtask() {
  if (!task.trim()) return;

  const newTask = {
    id: Date.now(),
    title: task,
    completed: false,
  };

  setPageData((prev) =>
    prev.map((page) =>
      page.id === Number(pageId)
        ? {
            ...page,
            tasks: [...page.tasks, newTask],
          }
        : page
    )
  );

  setTask("");
}

function updatePageName(value) {
  if (!value.trim()) return;

  setPageData((prev) =>
    prev.map((page) =>
      page.id === Number(pageId)
        ? { ...page, title: value }
        : page
    )
  );

  setPageNames(prev => ({
    ...prev,
    [pageId]: ""
  }));
}
//empty satate (filtered buttons)
function emptyState() {
  if (filter === "all") {
    return (
      <div className="empty">
        <div className="empty-icon">
          <ListIcon />
        </div>

        <h4>No Tasks Yet</h4>
        <p>Add a task to get started</p>

        <button className="empty-btn" onClick={()=>{task.trim()!==""?addtask():taskInputRef.current.focus();}}>+ Add Task</button>
      </div>
    );
  }

  if (filter === "completed") {
    return (
      <div className="empty">
        <div className="empty-icon" style={{background: "linear-gradient(120deg, #F1FCF7, #E5F7EE)"}} >
          <CheckCircleOutlinedIcon style={{color:"var(--success)"}} />
        </div>

        <h4>No Completed Tasks Yet</h4>
        <p>Complete a task to see it here</p>
      </div>
    );
  }

  if (filter === "uncompleted") {
    return (
      <div className="empty">
        <div className="empty-icon" style={{background: "linear-gradient(120deg, #FFF9F0, #FFF0DD)"}}>
          <AccessTimeIcon  style={{color:"var(--warning)"}}/>
        </div>

        <h4>No Uncompleted Tasks</h4>
        <p>Great job! All your tasks are completed</p>
      </div>
    );
  }
}

  return (
    <>
      <div className="content">
        <div className="header-page">
         {!currentPage?.title?  <input
     key={pageId}
  id="pagename"
  value={pageName}
  onChange={(e) =>
    setPageNames(prev => ({
      ...prev,
      [pageId]: e.target.value
    }))
  }
  className="pageinput"
  placeholder="New Page"
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      updatePageName(e.target.value);
    }
  }}
/>: <h1>{currentPage.title}</h1>}
          <p>stay focused and get things done</p>
        </div>

        <div className="cards">
          <div>
           <div className="icon list"> <ListIcon /></div>
            <p>All Tasks</p>
            <h1>{allTasks}</h1>
          </div>
          <div>
           <div className="icon check"> <CheckCircleOutlinedIcon /></div>
         <p>Completed</p>
             <h1>{completedTasks}</h1>
          </div>
          <div>
         <div className="icon time"><AccessTimeIcon /></div>
           <p>UnCompleted</p>
             <h1>{unCompletedTasks}</h1>
          </div>
        </div>

        <div className="btns">
            <button onClick={()=>setFilter("all")} >ALL</button>
            <button onClick={()=>setFilter('completed')}>Completed</button>
            <button onClick={()=>setFilter("uncompleted")}>UnCompleted</button>
        </div>

        <div className="tasks"> 
         
{filteredTasks.length > 0
  ? <TaskList tasks={filteredTasks} />
  : emptyState()
}
        </div>
        <div className="add-task">
         <div >
          <input   ref={taskInputRef} placeholder="Enter Your New Task here..." value={task} onChange={(e)=>setTask(e.target.value)} onKeyDown={(e) => {
  if (e.key === "Enter") {
  addtask();
  }
}}/>
          <button onClick={()=>{task.trim()!==""?addtask():taskInputRef.current.focus();}}> Add</button>
         </div>
        </div>
      </div>
    </>
  );
}
