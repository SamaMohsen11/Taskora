import { Link } from "react-router-dom"
import "./NotFound.css"
import {pages} from "./Contexts/PagesContext"
import { useContext } from "react"

export default function NotFound(){
    const{darkMode}=useContext(pages)
    return (<>
    <div className="cont-404">
        <div><img src={darkMode?"/image.png":"/notfound.png"}/></div>
        <div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for might have been removed,
had its name changed, or is temporarily unavailable.</p>
<Link to="/"><button>⬅ Go to Home</button></Link>
        </div>
    </div>
    </>)
}