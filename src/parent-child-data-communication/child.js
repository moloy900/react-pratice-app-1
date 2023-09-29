import React from "react";

const Child = (props) => {
  return (
    <div>
      <h4>Child Component</h4>
      <>
        <h5 class="text-white">{props.data}</h5>
      </>
    </div>
  );
};

export default Child;
