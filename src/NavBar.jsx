import { Link, NavLink, Outlet } from "react-router";
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
            <li><NavLink to="/home">Home</NavLink></li> 
            <li><NavLink to="/about">About</NavLink></li> 
            <li><NavLink to="/login">Login</NavLink></li> 
            <li><NavLink to="/users">Users</NavLink></li> 
            <li><NavLink to="/college">College</NavLink></li> 
          </ul>        
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
