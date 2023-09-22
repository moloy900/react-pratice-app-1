import React, { useEffect, useState } from "react";

function UseState(){
    const [state,setState]=useState(null)
    const [show,setShow]=useState(true)

    const showData=()=>{
        setState("hello World")
        setShow(false)
    }

    useEffect(()=>{
        console.log("useEffect")
    })
    
    return(
        <div>
            {
                show? <h4>UseState Component</h4> :  <h2>{state}</h2>
            }
            
            <button onClick={showData}>Click</button>
        </div>
    )
}

export default UseState