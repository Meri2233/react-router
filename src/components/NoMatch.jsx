
import { Link } from "react-router-dom";

function NoMatch(){
    return(
        <div className="no-match">
            Page not found. Go to <Link to={""}>Home</Link>
        </div>
    )
}
export default NoMatch;