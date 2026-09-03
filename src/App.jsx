import './App.css'
import Page from './Page'
import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SideBar from './SideBar';
import MenuIcon from "@mui/icons-material/Menu";
import {pages} from "./Contexts/PagesContext"


function App() {
    const [open, setOpen] =useState(true)
    
      const [pageData, setPageData] = useState(
        [
  {
    id: 1,
    title: "Today",
    tasks: [
      { id: 1, title: "Study React", completed: true },
      { id: 2, title: "Build Taskora", completed: false }
    ]
  },

  {
    id: 2,
    title: "Work",
    tasks: [
      { id: 3, title: "Finish project", completed: false }
    ]
  }
]

    )



  return (
  <pages.Provider  value={{pageData,setPageData}}>
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
        <Routes>
      <Route path="" element={<Page />} />
      <Route path="/page/:pageId" element={<Page />} />
    </Routes>
   </div>
      
    </main>
  </pages.Provider>
  
  )
}




export default App


