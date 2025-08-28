import { useContext } from "react";
import { subjectContext } from "./CreateContext";

function Subject() {
  const subject = useContext(subjectContext);

  return (
    <>
      <div style={{ backgroundColor: "Red", padding: "20px", textAlign: "center" }}>
        <h1> Subject Component</h1>
        <h1>{subject}</h1>
      </div>
    </>
  );
}

export default Subject;
