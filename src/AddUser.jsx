function AddUser({ setuser }) {
  return (
    <>
      <h4>AddUser</h4>
      <input
        type="text"
        onChange={(event) => setuser(event.target.value)}
        placeholder="Enter User Name"
      />
    </>
  );
}

export default AddUser;
