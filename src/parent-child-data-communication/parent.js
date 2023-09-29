import React from "react";
import Child from "./child";
import { Button } from "react-bootstrap";

const Parent = () => {
  const [data, setData] = React.useState(0);
  const increaseData = () => {
    setData(data + 1);
  };
  return (
    <div>
      <h3>Parent Component</h3>
      <Child data={data} />
      <Button variant="primary" onClick={increaseData}>
        Increase
      </Button>
    </div>
  );
};

export default Parent;
