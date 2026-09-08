import { Link } from "react-router-dom"
import "./NotFound.css"
import notfounddark from "./assets/images/notfounddark.png"
import notfound from "./assets/images/notfound.png"

export default function NotFound(){
    return (<>
    <div className="cont-404">
        
           <div>
        <img className="notfound-light" src={notfound} />
        <img className="notfound-dark" src={notfounddark} />
      </div>

        <div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for might have been removed,
had its name changed, or is temporarily unavailable.</p>
<Link to="/"><button>⬅ Go to Home</button></Link>
        </div>
    </div>
    </>)
}