import './App.css'
import Page from './Page'
import { useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SideBar from './SideBar';
import MenuIcon from "@mui/icons-material/Menu";
import {pages} from "./Contexts/PagesContext"

import Home from './Home';

function App() {
  const[pageName,setPageName]=useState("")
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
 const addNewPage = () => {
    const newPage = {
        id: Date.now(),
        title: "",
        tasks: []
    };

    setPageData(prev => [...prev, newPage]);

    return newPage;
};


  return (
  <pages.Provider  value={{pageData,setPageData,addNewPage}}>
      <main>

        <div className="header">
           <div className='logo'>
            <CheckBoxOutlinedIcon style={{color:"var(--primary)"}}/>
            <h1>Taskora</h1>
           </div>
            <button className="toggle-btn" onClick={() => setOpen(!open)} > <MenuIcon className='side-icon'/> </button>
       
      </div>
   
   <div className='app'>
       <SideBar open={open} pageName={pageName} setPageName={setPageName} />
        <Routes>
      <Route path="" element={<Home />} />
      <Route path="/page/:pageId" element={<Page  pageName={pageName} setPageName={setPageName}/>} />
    </Routes>
   </div>
      
    </main>
  </pages.Provider>
  
  )
}




export default App


