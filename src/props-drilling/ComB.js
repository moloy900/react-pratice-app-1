import React from "react";
import ComC from './ComC';

const ComB = (props) => {
  return (
    <div>
      <h2>ComB Component</h2>
      <ComC val2={props.val} increase2={props.increase}/>
    </div>
  );
};

export default ComB;
