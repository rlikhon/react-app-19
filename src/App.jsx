import { useState, useTransition } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user, setUser] = useState("");
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    console.log("Button Clicked");
    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
    });
  };
  return (
    <>
      <h1>We are learning React js with version 19 .</h1>

      <br></br>
      <div
        style={{ border: "2px solid black", margin: "20px", padding: "20px" }}
      >
        <h3>Share State Data {user}</h3>
        <AddUser setuser={setUser} />
        <DisplayUser user={user} />
      </div>
    </>
  );
}

export default App;
