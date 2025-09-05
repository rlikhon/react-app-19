import Button from "react-bootstrap/Button";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Page404 from "./Page404";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Class from "./Class";
import Usres from "./Users";
import UserDetails from "./UserDetails";
import StudentList from "./StudentList";
import StudentEdit from "./StudentEdit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Usres />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="studentList" element={<StudentList />} />
          <Route path="edit/:id" element={<StudentEdit />} />
          <Route path="department" element={<Department />} />
          <Route path="class" element={<Class />} />
        </Route>
        <Route path="/*" element={<Page404 />} />
        {/*<Route path="/*" element={<Navigate to="/home" />} />*/}
      </Routes>
      <div className="App"></div>
    </>
  );
}

export default App;
