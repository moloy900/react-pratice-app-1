import React, { useRef } from "react";
import Child from "./child";

const ForwardRef = () => {
  const inputref = useRef(null);

  const changeBehaviour = () => {
    inputref.current.style.color = "white";
    inputref.current.style.backgroundColor = "black";
  };

  return (
    <div>
      <h2>Forward Component</h2>
      <Child ref={inputref}/>
      <button onClick={changeBehaviour}>Update Input Box</button>
    </div>
  );
};

export default ForwardRef;
