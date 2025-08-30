import { Link } from "react-router";


export default function Usres() {
  const usersData = [
    { id: 1, name: "Alice", email: "alice@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" },
    { id: 3, name: "Charlie", email: "charlie@gmail.com" },
    { id: 4, name: "David", email: "david@gmail.com" },
    { id: 5, name: "Eve", email: "eve@gmail.com" },
    { id: 6, name: "Frank", email: "frank@gmail.com" },
    { id: 7, name: "Grace", email: "grace@gmail.com" },
    { id: 8, name: "Heidi", email: "heidi@gmail.com" },
    { id: 9, name: "Ivan", email: "ivan@gmail.com" },
    { id: 10, name: "Judy", email: "judy@gmail.com" }
  ]
  return (
    <>
      <div style={{ backgroundColor: "Green", padding: "20px", textAlign: "center" }}>
        <h3>Users List</h3>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {usersData.map((user) => (
            <Link to={`/users/${user.id}`} style={{ textDecoration: "none", color: "black" }}>

            <div key={user.id} style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", margin: "10px", width: "200px", backgroundColor: "lightgray" }}>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
            </Link>
          ))}
      </div>
      </div>
      
    </>
  );
}
