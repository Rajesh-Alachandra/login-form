import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import "./App.css"
// import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
