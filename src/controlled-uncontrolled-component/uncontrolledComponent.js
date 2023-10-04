import React, { useRef } from "react";

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const updateColor = () => {
    inputRef.current.style.color = "red";
    inputRef.current.style.backgroundColor = "black";
    inputRef.current.value=1000;
  };

  return (
    <div>
      <h3>Uncontrolled Component</h3>
      <input type="text" placeholder="Enter name" ref={inputRef} />
      <button onClick={updateColor}>ColorChange</button>
    </div>
  );
};

export default UncontrolledComponent;
