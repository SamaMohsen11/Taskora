import Drawer from "@mui/material/Drawer";
import "./SideBar.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useState } from "react";
import {pages} from "./Contexts/PagesContext"
import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import DeletePopUp from "./DeletePopUp";
import UpdatePopUp from "./UpdatePopUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";

  export default function SideBar({open,pageNames }) {
  const isPhone = useMediaQuery("(max-width:767px)");
  const [deleteOpen, setDeleteOpen] = useState(false);
const [editOpen, setEditOpen] = useState(false);
const [selectedPage, setSelectedPage] = useState(null);
const [updateValue, setUpdateValue] = useState("");
const [menuOpen, setMenuOpen] = useState(null);
const {pageData,addNewPage,deletePage,updatePageTitle} = useContext(pages);

 const navigate= useNavigate()
 const handleNewPage = () => {
   const newPage = addNewPage();
 navigate(`/page/${newPage.id}`);
};

const data = pageData.map((page) => {
  return (
    <div className="page-item" key={page.id}>

      <Link to={`/page/${page.id}`}className="page-link">
        <h4>
          {page.title || pageNames[page.id] || "New Page"}</h4>
      </Link>

      <div className="page-menu">

        <button
          className="page-menu-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setMenuOpen(
              menuOpen === page.id ? null : page.id
            );
          }}
        >
          <MoreVertIcon />
        </button>

        {menuOpen === page.id && (
          <div className="page-dropdown">

            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedPage(page);
                setUpdateValue(page.title || pageNames[page.id] || "New Page");
                setEditOpen(true);
                setMenuOpen(null);
              }}
            >
              Edit
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedPage(page);
                setDeleteOpen(true);
                setMenuOpen(null);
              }}
            >
              Delete
            </button>

          </div>
        )}

      </div>

    </div>
  );
});
  return (
    <div className="sidebar">
<Drawer
  variant="persistent"
  anchor={isPhone ? "top" : "left"}
  open={open}
  hideBackdrop
  ModalProps={{
    disableEnforceFocus: true,
  }}
  sx={{
    "& .MuiDrawer-paper": {
      width: isPhone ? "100%" : 260,
      height: isPhone ? "300px" : "calc(100vh - 90px)",
      top: isPhone?"60px":"80px",
      left: isPhone ? 0 : "auto",
      boxSizing: "border-box",
      backgroundColor: "var(--surface)",
      overflow: "hidden",

      borderTop: "1px solid var(--light-border)",
      borderBottom: "1px solid var(--light-border)",
      borderRight: "1px solid var(--light-border)",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.08)",
    },
  }}
>
  {deleteOpen && selectedPage && (
  <DeletePopUp
    setOpen={setDeleteOpen}
    type="Page"
    deleteTask={() => {
      deletePage(selectedPage.id);
    }}
  />
)}
{editOpen && selectedPage && (
  <UpdatePopUp
    setOpen={setEditOpen}
    updateValue={updateValue}
    setUpdateValue={setUpdateValue}
    type="Page"
    UpdatePopUp={() => {
      const title = updateValue.trim();
      if (title !== "") {
        updatePageTitle(selectedPage.id, title);
        setEditOpen(false);
      }
    }}
  />
)}
     
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
      </div>
    </Drawer>
    </div>
  );
}




