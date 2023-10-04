import React, { useState } from "react";

const ControlledComponent = () => {
    const [state,setState]=useState();

  return (
    <div>
      <h2>Controlled Component</h2>
      <h4>{state}</h4>
      <input type="text" onChange={(e)=>setState(e.target.value)}/>
    </div>
  );
};

export default ControlledComponent;
