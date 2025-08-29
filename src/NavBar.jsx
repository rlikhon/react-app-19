import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <header className="App-header">
        <h3>React 19 Router</h3>

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </header>
    </>
  );
}

export default NavBar;
