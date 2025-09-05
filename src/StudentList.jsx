import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function StudentList() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchUsers();
  }, []);

  let url = "http://localhost:3000/users";

  async function fetchUsers() {
    const response = await fetch(url);
    const json = await response.json();
    console.log("Student List", json);
    setStudentData(json);
    setLoading(false);
  }

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Student deleted successfully");
          fetchUsers(); // Refresh the list after deletion
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const editStudent = (id) => {
    navigate("/college/edit/"+id); // Navigate to the user details page for editing
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "Green",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3>Students List</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {studentData.map((user, index) => (
            <div
              key={index}
              style={{
                border: "1px solid black",
                overflow: "auto",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px",
                width: "200px",
                backgroundColor: "lightgray",
              }}
            >
              <h4>{user.name}</h4>
              <p className="text-sm">Email: {user.email}</p>
              <p className="text-sm">Age: {user.age}</p>
              <button onClick={() => deleteStudent(user.id)}>Delete</button>
              <Link
                to={`/users/${user.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Details
              </Link>
              <button onClick={() => editStudent(user.id)}>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
