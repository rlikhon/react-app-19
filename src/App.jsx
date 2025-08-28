import Button from "react-bootstrap/Button";
import "./App.css";
import useToggle from "./useToggle";

function App() {
  const {value, toggleValue} = useToggle(false);
  const {data, setData} = useToggle(true);
  
  console.log("Log value:"+  value);
  return (
    <>
      <header className="App-header">
        <h3>React 19 Custom Hook</h3>
      </header>
      <div className="App">
        <Button onClick={toggleValue} variant="primary">Toggle</Button>
        <Button onClick={()=>toggleValue(true)} variant="danger m-3">Show</Button>
        <Button onClick={()=>toggleValue(false)} variant="warning m3">Hide</Button>
        <div className="content mt-3 p-3">
          {
            value ?
          
          <p>
            The world's most contextually aware AI software development platform
            for mature enterprise engineering teams. Experience Tabnine's
            foundational capabilities with a free trial of Tabnine Dev:
            Foundational AI Agents and Context Engine Jira to Code and Test Case
            Agents Switchable Models Custom Commands & Chat Behavior Evaluate
            Tabnine Enterprise: Full suite of AI agents,
          </p>
          : 
          null

          }
          <Button onClick={setData} variant="primary">Toggle</Button>
        <Button onClick={()=> setData(false)} variant="danger m-3">Show</Button>
        <Button onClick={()=>setData(true)} variant="warning m3">Hide</Button>
          {
            data ?
            <p>
            No AI model is perfect for every task. With Tabnine, you can switch
            between multiple AI models to find the one that best fits your needs.
            Choose from a variety of models, including open-source and
            proprietary options, to get the best results for your specific use
            case.
          </p>
          :
          null
          }
        </div>
      </div>
    </>
  );
}

export default App;
