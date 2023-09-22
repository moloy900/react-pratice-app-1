import React, { useEffect, useState } from "react";
import PropsUseEffect from "./propsuseeffect";

const UseEffect=()=>{
    const [count,setCount]=useState(0)
    const [increase,setIncrease]=useState(10)

    useEffect(()=>{
        setTimeout(() => {
            setCount(count+1) 
        }, 2000);
    },[count])

    return(
        <div>
            <h2>UseEffect Component</h2>
            {/* <h3>Count: {count}</h3> */}
            <h3>Increase: <span id="count">{increase}</span></h3>
            <PropsUseEffect data={count}></PropsUseEffect>
            {/* <button onClick={()=>setCount(count+1)}>++</button> */}
            <button onClick={()=>{setIncrease(increase-1)}}>++</button>
        </div>
    )
}

export default UseEffect