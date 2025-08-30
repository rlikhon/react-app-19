import { Link, NavLink, Outlet } from "react-router";
import Class from "./Class";

function College() {
  return (
    <>
      <div
        className="college"
        style={{
          backgroundColor: "Orange",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>College Component</h1>
        <h3>
          <Link to="/home">Go Back to Home</Link>{" "}
        </h3>
        
        <NavLink className="link" to="">
          Students
        </NavLink>
        <NavLink className="link" to="department">
          Departments
        </NavLink>
        <NavLink className="link" to="class">
          Class
        </NavLink>
        <Outlet />
      </div>
    </>
  );
}

export default College;
