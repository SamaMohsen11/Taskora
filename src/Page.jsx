
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ListIcon from "@mui/icons-material/List";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { pages } from "./Contexts/PagesContext";
import { useContext,useState } from "react";
import { useParams} from "react-router-dom";
import "./Page.css"
import TaskList from "./TaskList" 
export default function Page() {
  const [filter, setFilter] = useState("all");
  const [task,setTask]=useState("")
  const { pageId } = useParams();
    const { pageData,setPageData } = useContext(pages);
  const currentPage = pageData.find(
    (page) => page.id === Number(pageId)
  );

  const tasks = currentPage?.tasks || [];

const allTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const unCompletedTasks = tasks.filter(
  (task) => !task.completed
).length;

const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") {
    return task.completed;
  }

  if (filter === "uncompleted") {
    return !task.completed;
  }

  return true;
});
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
  return (
    <>
      <div className="content">
        <div className="header-page">
         <h1>{currentPage?.title || "New Page"}</h1>
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
       <TaskList tasks={filteredTasks}/>
        </div>
        <div className="add-task">
         <div >
          <input placeholder="Enter Your New Task here..." value={task} onChange={(e)=>setTask(e.target.value)} onKeyDown={(e) => {
  if (e.key === "Enter") {
  addtask();
  }
}}/>
          <button onClick={addtask}> Add</button>
         </div>
        </div>
      </div>
    </>
  );
}
