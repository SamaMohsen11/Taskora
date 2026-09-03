import Drawer from "@mui/material/Drawer";

import "./SideBar.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

import { useState } from "react";


export default function SideBar({open}) {
    const [light,setLight]=useState(true)
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
        borderTop: "1px solid var(--dark-text-secondary)",
  borderBottom: "1px solid var(--dark-text-secondary)",
  borderRight: "1px solid var(--dark-text-secondary)",
  borderRadius:"10px",
          
        }
      }}
    >
     
      <div className="sidecontent">
      

        <div className="menu">
         

     <div><h4> <AddCircleRoundedIcon style={{color:"var(--primary)"}}/>New Page</h4></div>

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
    </div>
  );
}


