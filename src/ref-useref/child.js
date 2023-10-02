import React from "react";
import { forwardRef } from "react";

const Child = (props,ref) => {
  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" placeholder="Enter name" ref={ref} />
    </div>
  );
};

export default forwardRef(Child);
