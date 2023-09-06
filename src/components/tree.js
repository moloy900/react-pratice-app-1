import React, { useState } from "react";

function Tree(){
    const [show,SetShow]=useState(null)

    const toggleElement=(a)=>{
        SetShow(a)
        console.log(a)
    }
    return(
        <div>
           { show?  <h1>Tree Component</h1> : null}
            <button onClick={()=>toggleElement(!show)}>Toggle</button>
        </div>
    )
}

export default Tree