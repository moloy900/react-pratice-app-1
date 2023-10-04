import React, { useRef } from "react";
import Child from "./child";

const Parent = () => {
  const inputRef = useRef();

  const updateColor = () => {
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.value = "Ambika Kalna";
  };

  return (
    <div>
      <h3>Parent Component</h3>
      <Child ref={inputRef} />
      <button onClick={updateColor}>ChangeData</button>
    </div>
  );
};

export default Parent;
