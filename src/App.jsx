import Button from "react-bootstrap/Button";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Page404 from "./Page404";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <div className="App"></div>
    </>
  );
}

export default App;
