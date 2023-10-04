import React, { useState } from "react";

const Controlled = () => {
  const [state, setState] = useState("hello");

  const inputUdate=(e)=>{
    setState(e.target.value)
  }

  return (
    <div>
      <h2>Controlled Component</h2>
      <h2>{state}</h2>
      <input type="text" onChange={inputUdate}/>
    </div>
  );
};

export default Controlled;
