import React, { useState } from "react";
// using useState method
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  const myStyle = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    with: "20px",
  };
  return (
    <div style={myStyle}>
      <h1>Counter : {count}</h1>
      <button
        type="button"
        className={`btn btn-lg btn-{themeClass} dropdown-toggle dropdown-toggle-split`}
        onClick={handleInc}
      >
        Increment
      </button>
      <button
        type="button"
        className={`btn btn-lg btn-{themeClass} dropdown-toggle dropdown-toggle-split`}
        onClick={handleDec}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
