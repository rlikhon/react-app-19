import { useState, useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import './App.css'
function App() {
  //const [count, setCount] = useState(0)
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    console.log("Button Clicked")     
    startTransition(async () => {
      await new Promise((resolve) => { setTimeout(resolve, 3000) })     
    })
  }
  return (
    <>
       <h1>Use react useTransition</h1>
      <p>We are learning React js with version 19 .</p>

      <br></br>
      {
        pending? 
        <img src="https://cdn.dribbble.com/userupload/22076800/file/original-8e7ce77dec0edaf0105e8287038f6e60.gif" alt="React Logo" width="150" />
        : null
      }
      
      <br></br>
      <Button variant="warning" disabled={pending} onClick={handleButton}>Click Me</Button>
    </>
  )
}

export default App
