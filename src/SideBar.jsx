import Drawer from "@mui/material/Drawer";

import "./SideBar.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import {pages} from "./Contexts/PagesContext"
import { useContext } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";


  export default function SideBar({open,pageNames ,darkMode,setDarkMode}) {
  const location = useLocation();
const currentPageId = Number(location.pathname.split("/").pop());

 const navigate= useNavigate()
 const handleNewPage = () => {
   const newPage = addNewPage();
 navigate(`/page/${newPage.id}`);
};


    const [light,setLight]=useState(true)
    const {pageData,addNewPage}=useContext(pages);
    const data=pageData.map((page)=>{
    return<div   key={page.id}>
       <Link
    
      to={`/page/${page.id}`}
      className="page-link"
    >

<h4>
  {page.title ||
    pageNames[page.id] ||
    "New Page"}
</h4>

    </Link>
    </div>
    })
  return (
    <div className="sidebar">
      <Drawer
      variant="persistent"
      anchor="left"
       open={open}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          backgroundColor: "var(--surface)",
          overflow: "hidden",
           top: "70px",
          height: "calc(100vh - 80px)",
        borderTop: "1px solid var(--light-border)",
  borderBottom: "1px solid var(--light-border)",
  borderRight: "1px solid var(--light-border)",
  borderRadius:"10px",
   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.08)",
          
        }
      }}
    >
     
      <div className="sidecontent">
      

        <div className="menu">
         

     <div>
<button className="new-page-btn" onClick={handleNewPage}>
  <AddCircleRoundedIcon className="addicon"  /><h2>New Page</h2></button>
 

      <div className="pagesdata">
        {data}
      </div>
     </div>

  </div>
  
 <div className="bottom">
  <hr />

  <div className="mode">

    {darkMode ? <DarkModeIcon  onClick={() => setDarkMode(!darkMode)} className="dark" /> : <LightModeIcon  className="light"  onClick={() => setDarkMode(!darkMode)} />}

  
  </div>
</div>
      
      </div>
    </Drawer>
    </div>
  );
}




