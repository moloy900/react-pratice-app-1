import React, { useState } from "react";

function User(){

    const [user,setUser]=useState(null);
    const [show, setShow]=useState(false)

    const setInput=(val)=>{
    //    console.log(val.target.value)
          setUser(val.target.value)
        // console.log(val)
        setShow(false)
    }

    return(
        <div style={{backgroundColor:'royalblue',width:'100%',height:'30vh'}}>
            {show? <h4>{user}</h4>:null}
            <input type="text" placeholder="Enter Name" onChange={setInput}/>
            <button onClick={()=>setShow(true)}>Show</button>
            <button onClick={()=>setShow(false)}>Hide</button>
            <button onClick={()=>setShow(!show)}>Toggle</button>

        </div>
    )

}

export default User