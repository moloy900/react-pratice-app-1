import React, { useState } from "react";
import ComB from "./ComB";

const ComA = () => {
  const data = "My Name is Moloy";
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>ComA Component</h2>
      <button onClick={counter}>Increase</button>

      <ComB val={data} increase={count}/>
    </div>
  );
};

export default ComA;
