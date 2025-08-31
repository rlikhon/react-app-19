import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Usres() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  let url = "https://dummyjson.com/users";

  async function fetchUsers() {
    const response = await fetch(url);
    const json = await response.json();
    setUsersData(json.users);
  }

    console.log("usersData", usersData);


  return (
    <>
      <div style={{ backgroundColor: "Green", padding: "20px", textAlign: "center" }}>
        <h3>Users List</h3>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {usersData.map((user, index) => (
            <Link to={`/users/${user.id}`} style={{ textDecoration: "none", color: "black" }}>

            <div key={index} style={{ border: "1px solid black",overflow: "auto", borderRadius: "5px", padding: "10px", margin: "10px", width: "200px", backgroundColor: "lightgray" }}>
              <h4>{user.firstName}</h4>
              <p className="text-sm">{user.email}</p>
            </div>
            </Link>
          ))}
      </div>
      </div>
      
    </>
  );
}
