import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="layout">
            <div className="nav-bar">
                <h3>Best Email Client</h3>
                <div className="links">
                    <Link className="link" to={""}>Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/inbox">Inbox</Link>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
export default Layout