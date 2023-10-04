import React from "react";
import ComB from "./ComB";

const ComA = () => {
  const data = "My Name is Moloy";

  return (
    <div>
      <h2>ComA Component</h2>
      <ComB val={data}/>
    </div>
  );
};

export default ComA;
