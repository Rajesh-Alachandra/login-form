import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log("setttttttt", input);
  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    console.log(loggeduser.email[0], loggeduser.password[0]);
    console.log(input.email, input.password);
    if (
      input.email[0] === loggeduser.email[0] &&
      input.password[0] === loggeduser.password[0]
    ) {
      localStorage.getItem("loggedin", true);
      navigate("/");
    } else {
      alert("wrong Email or password");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "200px"
      }}
    >
      <form onSubmit={handleLogin}>
        <div className="formBox">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter ur Emailid"
            name="email"
            value={input.name}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-box">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter ur Password"
            name="password"
            value={input.name}
            onChange={changeHandler}
          ></input>
        </div>
        <button>Login</button>
        <p>
          You don't have account?
          <Link to="/Register"> Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
