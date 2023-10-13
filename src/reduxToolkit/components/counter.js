import React from "react";
import { Increment, Decrement } from '../features/counterSlice';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Counter Component</h2>
            <button onClick={() => dispatch(Increment())}>Increment</button>
            <input type="text" value={count} readOnly/>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
        </div>
    )
}

export default Counter