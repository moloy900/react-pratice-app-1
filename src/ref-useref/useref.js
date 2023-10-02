import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.blur();
    inputRef.current.style.color = "green";
    inputRef.current.style.backgroundColor = "black";
  };

  return (
    <div>
      <h3>UseRef Component</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>Change Color</button>
    </div>
  );
};

export default UseRef;
