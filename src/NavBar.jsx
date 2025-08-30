import { Link, Outlet } from "react-router";
import "./assets/Header.css";

function NavBar() {
  return (
    <div>
      <div className="header">
        <div>
          <h3>React 19 Router</h3>
        </div>

        <div>
          <ul>
            <li><Link to="/home">Home</Link></li> 
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/users">Users</Link></li> 
            <li><Link to="/college">College</Link></li> 
          </ul>        
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
