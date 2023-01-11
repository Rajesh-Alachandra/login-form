import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
    PhoneNum: "",
  });
  const changeHandler = (e) => {
    setinput({ ...input, [e.target.name]: [e.target.value] });
  };
  // to store values in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/Login");
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "200px"
    }}>
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter ur Name"
            name="name"
            value={input.name}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-box">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter ur Emailid"
            name="email"
            value={input.email}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-box">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter ur Password"
            name="password"
            value={input.password}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-box">
          <label>PhoneNum:</label>
          <input
            type="text"
            placeholder="Enter ur PhoneNumber"
            name="PhoneNum"
            value={input.PhoneNum}
            onChange={changeHandler}
          ></input>
        </div>
        <button>Register</button>
        <p>
          have already an account?
          <Link to="/Login"> Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
