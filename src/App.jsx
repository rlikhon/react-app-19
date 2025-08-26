import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <>
      <header className="App-header"> 
        <h3>React Fragment</h3>
      </header>
      <div className="App">
        <Apple />
        <Apple />
        <Apple />
      </div>
    </>
  );
}

export default App;


function Apple()
{
  return(
    <>
      <h1>Hello</h1>
    </>
  );  
}