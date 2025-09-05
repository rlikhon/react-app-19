import { useActionState } from "react";

function Login() {
  const handleLogin = (prevData, formData) => {
    //e.preventDefault();
    let username = formData.get("username");
    let password = formData.get("password");
    let regex = /^[A-Za-z0-9]+$/i;


    if (username.length < 5) {
      return {error: "Username must be at least 5 characters long"};
    } else if (!regex.test(password)) {
      return {error: "Password must contain at least one letter or number"};
    } else if (password.length < 6) {
      return {error: "Password must be at least 6 characters long"};
    }else {
      return {message: "Login Successful"};
    }
  }

  const [data, action, pending] = useActionState(handleLogin);
  
  console.log("Data:", data);
  
  return (
    <>
      <div
        style={{
          backgroundColor: "#dee2e6",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3>Login</h3>
        <form action={action}>
        {
            data && data.error && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                {data.error}
              </div>
            )
            
          }
          { data && data.message && (
              <div style={{ color: "green", marginBottom: "10px" }}>
                {data.message}
              </div>
            )
          }
          {
            pending && (
              <div style={{ color: "blue", marginBottom: "10px" }}>
                Processing...
              </div>
            )
          }

          <div style={{ marginBottom: "10px" }}>
            <input defaultValue={data?.username} type="text" name="username" placeholder="Username" />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input type="password" defaultValue={data?.password} name="password" placeholder="Password" />
          </div>
          <button disabled={data?.error}>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
