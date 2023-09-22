import React, { useEffect } from "react";

function PropsUseEffect(props){
    useEffect(()=>{
        document.getElementById('name').innerText=`${props.data}`
    }, [props.data])

    return(
        <div>
            <h1 >PropsUseEffect Component - <span id="name"></span></h1>
        </div>
    )
}

export default PropsUseEffect