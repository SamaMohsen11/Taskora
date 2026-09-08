import { Link } from "react-router-dom"
import "./NotFound.css"
import notfounddark from "./assets/images/notfounddark.png"
import notfound from "./assets/images/notfound.png"

export default function NotFound({darkMode}){
    return (<>
    <div className="cont-404">
        <div><img src={darkMode?notfounddark:notfound}/></div>
        <div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for might have been removed,
had its name changed, or is temporarily unavailable.</p>
<Link to="/"><button>⬅ Go to Home</button></Link>
        </div>
    </div>
    </>)
}