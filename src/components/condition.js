import React, { useState } from "react";

const Condition = () => {
    const [loggedIn, setLoggedIn]=useState(1)
    // const loggedInData=(a)=>{
    //     setLoggedIn(a)
    // }
  return (
    <div>
     
      <input type="text" placeholder="Enter LoggedIn Number" onChange={(e)=>setLoggedIn(e.target.value)}/>
      {
        loggedIn==1?<h1>Welcome User1</h1>:loggedIn==2?<h1>Welcome User2</h1>:<h1>Welcome User3</h1>
      }
    </div>
  );
};

export default Condition;
