import './App.css'
import Page from './Page'
import { useState,useEffect} from 'react'
import { Routes, Route ,Link,useNavigate} from 'react-router-dom'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import SideBar from './SideBar';
import MenuIcon from "@mui/icons-material/Menu";
import {pages} from "./Contexts/PagesContext"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Home from './Home';
import NotFound from './NotFound';

function App() {
const [darkMode, setDarkMode] = useState(false);
  const [pageNames, setPageNames] = useState({});
    const [open, setOpen] =useState(false)
    
   
const navigate=useNavigate();
    const [pageData, setPageData] = useState(() => {
  const savedPages = localStorage.getItem("pageData");

  return savedPages
    ? JSON.parse(savedPages)
    : [
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
      ];
});
useEffect(() => {
  localStorage.setItem("pageData", JSON.stringify(pageData));
}, [pageData]);

 const addNewPage = () => {
    const newPage = {
        id: Date.now(),
        title: "",
        tasks: []
    };

    setPageData(prev => [...prev, newPage]);

    return newPage;
};

const deletePage = (pageId) => {
  setPageData(prev =>
    prev.filter(page => page.id !== pageId)
  );
  navigate("/")
};

const updatePageTitle = (pageId, newTitle) => {
  setPageData(prev =>
    prev.map(page =>
      page.id === pageId
        ? { ...page, title: newTitle }
        : page
    )
  );
};


  return (
  <pages.Provider  value={{pageData,setPageData,addNewPage,deletePage,updatePageTitle,darkMode}}>
    <main className={darkMode ? "dark" : ""}>

        <div className="header">
           <div className='logo'>
            <CheckBoxOutlinedIcon style={{color:"var(--primary)" }}/>
           <Link to=""> <h1>Taskora</h1></Link>
           </div>
            <div >
             
         {darkMode ? <DarkModeIcon  onClick={() => setDarkMode(!darkMode)} className="dark" /> : <LightModeIcon  className="light"  onClick={() => setDarkMode(!darkMode)} />}
 <button className="toggle-btn"   onClick={() => setOpen(prev => !prev)} > <MenuIcon className='side-icon'/> </button>
            </div>
      </div>
   
   <div className='app'>
       <SideBar open={open}   pageNames={pageNames}  darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page/:pageId" element={<Page  pageNames={pageNames} setPageNames={setPageNames}/>} />
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   </div>
      
    </main>
  </pages.Provider>
  
  )
}




export default App


