import React from "react";
import Child from "./child";

const Parent = () => {
  const parentAlert = (data) => {
    alert(data.age);
  };
  return (
    <div>
      <h3>Parent Component</h3>
      <Child alert={parentAlert} />
    </div>
  );
};

export default Parent;
