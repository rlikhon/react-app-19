import { useEffect, useState } from "react";
import { useParams } from "react-router";

function StudentEdit() {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getStudentDetails();
  }, []);

  const getStudentDetails = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3>Student Component</h3>
        <div>
          <h4>Add New Student</h4>
          <form>
            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Name" required />
            <br />
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Email" required />
            <br />
            <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Age" required />
            <br />
            <button type="submit"  onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentEdit;
