import { useReducer } from "react";
import { Button } from "react-bootstrap";

const emptyData = {
  username: "",
  password: "",
  email: "",
  city: "",
  country: "",
  age: "",
};

const reducer = (data, action) => {
  return {...data, [action.field]: action.value};
};
function Signup() {
  const [state, dispatch] = useReducer(reducer, emptyData);
  console.log("State:", state);

  return (
    <>
      <div
        style={{
          backgroundColor: "#dee2e6",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3>Sign up</h3>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="username"
            onChange={(e) =>
              dispatch({ type: "update", field: "username", value: e.target.value })
            }
            placeholder="Username"
            style={{ border: "1px solid black" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="password"
            name="password"
            onChange={(e) =>
              dispatch({ type: "update", field: "password", value: e.target.value })
            }
            placeholder="Password"
            style={{ border: "1px solid black" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="email"
            onChange={(e) =>
              dispatch({ type: "update", field: "email", value: e.target.value })
            }
            placeholder="Email"
            style={{ border: "1px solid black" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="city"
            onChange={(e) =>
              dispatch({ type: "update", field: "city", value: e.target.value })
            }
            placeholder="City"
            style={{ border: "1px solid black" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="country"
            onChange={(e) =>
              dispatch({ type: "update", field: "country", value: e.target.value })
            }
            placeholder="Country"
            style={{ border: "1px solid black" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="age"
            onChange={(e) =>
              dispatch({ type: "update", field: "age", value: e.target.value })
            }
            placeholder="Age"
            style={{ border: "1px solid black" }}
          />
        </div>

        <Button variant="primary">Sign Up</Button>
      </div>
      <div style={{textAlign: "left", margin: "20px"}}>
        <h4>State Data:</h4>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </>
  );
}

export default Signup;
