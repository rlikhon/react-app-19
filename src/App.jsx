import Button from "react-bootstrap/Button";
import "./App.css";
import {subjectContext} from "./CreateContext";
import { Collapse } from "bootstrap";
import College from "./College";
import { useState } from "react";

function App() {
  const [subject, setSubject] = useState("BAl");
  
  return (
    <>
      <header className="App-header">
        <h3>React 19 Context API</h3>
      </header>
      <div className="App">
        <div style={{ backgroundColor: "yellow", padding: "20px", textAlign: "center" }}>
        <h1>Context API</h1>
        <br />
        <subjectContext.Provider value={subject}>
          <select defaultValue={subject} onChange={(e) => setSubject(e.target.value)} >
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
          </select>
          <College />
        </subjectContext.Provider>
        <br />
        
        
        </div>
      </div>
    </>
  );
}

export default App;
