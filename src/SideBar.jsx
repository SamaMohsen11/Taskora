import Drawer from "@mui/material/Drawer";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./SideBar.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { useState } from "react";

export default function SideBar() {
    const [light,setLight]=useState(true)
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
       
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "var(--surface)",
         borderRight:"2px siold var(--dark-text-secondary)",
        overflow: "hidden",
        },
      }}
    >
      {/* Sidebar content */}
      <div className="sidecontent">
      

        <div className="menu">
               <div className="header">
           <CheckBoxOutlinedIcon style={{color:"var(--primary)"}}/>
            <h1>Taskora</h1>
      </div>

     <h4> <AddCircleRoundedIcon style={{color:"var(--primary)"}}/>New Page</h4>
  </div>
  
 <div className="bottom">
  <hr />

  <div className="mode">
    {light ? <LightModeIcon /> : <DarkModeIcon />}

    <Switch
      onChange={() => setLight(!light)}
      style={{ color: "var(--primary)" }}
    />
  </div>
</div>
      
      </div>
    </Drawer>
  );
}