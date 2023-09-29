import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const multiCount = useMemo(() => {
    console.log("multiCount" + count);
    return count * 1;
  });

  return (
    <div>
      <h2>UseMemo Component</h2>
      <h2>{multiCount}</h2>
      <h4>{count}</h4>
      <Button variant="danger" onClick={handleCount}>
        Increase
      </Button>
    </div>
  );
};

export default UseMemo;
