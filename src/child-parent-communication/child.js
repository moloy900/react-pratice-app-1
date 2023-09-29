import React from "react";
import { Button } from "react-bootstrap";

const Child = (props) => {
  const data = { name: "Moloy", age: 35, email: "moloy@test.com" };
  return (
    <div>
      <h3>Child Component</h3>
      <Button variant="outline-info" onClick={()=>props.alert(data)}>Update Data</Button>
    </div>
  );
};

export default Child;
