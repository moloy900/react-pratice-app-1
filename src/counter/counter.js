import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increase, Decrease } from "../redux/action/action";

const Counter = () => {
  const myState = useSelector((state) => state.CounterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter Component</h3>
      <>
        <button onClick={() => dispatch(Increase())}>++</button>
        <input type="text" value={myState} />
        <button onClick={() => dispatch(Decrease())}>--</button>
      </>
    </div>
  );
};

export default Counter;
