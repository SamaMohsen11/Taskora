import './App.css'
import Page from './Page'
import { useState } from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SideBar from './SideBar';
import MenuIcon from "@mui/icons-material/Menu";

function App() {
    const [open, setOpen] =useState(true)



  return (
    <main>

        <div className="header">
           <div className='logo'>
            <CheckBoxOutlinedIcon style={{color:"var(--primary)"}}/>
            <h1>Taskora</h1>
           </div>
            <button className="toggle-btn" onClick={() => setOpen(!open)} > <MenuIcon className='side-icon'/> </button>
       
      </div>
   
   <div className='app'>
       <SideBar open={open} />

    <Page/>
   </div>
    </main>
  )
}




export default App


