import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function StudentEdit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getStudentDetails();
  }, []);

  const getStudentDetails = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    setName(data.name);
    setAge(data.age);
    setEmail(data.email);
  };

  const updateStudentData = async (e) => {
    e.preventDefault();
    const updatedStudent = { name, age, email };
    console.log(updatedStudent);

    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    })
      .then((res) => {
        if (res.ok) {
          alert("Student updated successfully");
          navigate("/college/studentList"); // Navigate back to the student list after update
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

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
          <h4>Update Student</h4>
          <form>
            <input
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Name"
              required
            />
            <br />
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Email"
              required
            />
            <br />
            <input
              type="text"
              onChange={(event) => setAge(event.target.value)}
              value={age}
              placeholder="Age"
              required
            />
            <br />
            <button type="submit" onClick={updateStudentData}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentEdit;
