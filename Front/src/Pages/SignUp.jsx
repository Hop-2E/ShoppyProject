import { useState } from "react";
import { instance } from "../App";
import Button from "react-bootstrap/esm/Button";
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Signup = async () => {
    const res = await instance.post("/users/signup", {
      email: email,
      password: password,
    });
    console.log(res);
    if (res.data.data.role === "admin") {
      window.location.replace(`/users/${res.data.data._id}`);
    }else {
      window.location.replace(`/users/normal/${res.data.data._id}`);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={Signup}>Signup</Button>
      </div>
    </div>
  );
};
export default Signup;