import "./Home.css"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "./Contexts/PagesContext";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import image from "./assets/images/image.png"
import imagedark from "./assets/images/imagedark.png"

export default function Home({darkMode}){

    const { addNewPage } = useContext(pages);
    const navigate = useNavigate();

    const handleNewPage = () => {
        const newPage = addNewPage();

        navigate(`/page/${newPage.id}`);
    };

    return(
        <>
<div className="cont">

    <div className="hero">
        <div className="image">
            <img src={darkMode?imagedark:image}/>
        </div>

        <div className="info">
            <h1>
                Welcome to Taskora!<br />
                You don't have any pages yet.
            </h1>

            <p>
                Create your first page to start organizing
                and tracking your tasks.
            </p>

            <button onClick={handleNewPage}>
                + Create New Page
            </button>
        </div>
    </div>


    <div className="steps">

        <div className="step">
            <div className="step-icon page-icon">
                <AddCircleRoundedIcon />
            </div>

            <div>
                <h3>Create a Page</h3>
                <p>Give your page a name<br />and let's get started.</p>
            </div>
        </div>

        <div className="step">
            <div className="step-icon task-icon">
                <CheckCircleOutlineIcon />
            </div>

            <div>
                <h3>Add Tasks</h3>
                <p>Add tasks to your page<br />and organize your work.</p>
            </div>
        </div>

        <div className="step">
            <div className="step-icon complete-icon">
                <DoneAllIcon />
            </div>

            <div>
                <h3>Complete Tasks</h3>
                <p>Mark tasks as completed<br />and keep your work organized.</p>
            </div>
        </div>

    </div>

</div>
        </>
    );
}