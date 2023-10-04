import React, { forwardRef } from "react";

const Child = (props, ref) => {
  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" placeholder="Enter Name" ref={ref} />
    </div>
  );
};

export default forwardRef(Child);
