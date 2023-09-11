import React from "react";

class Render extends React.Component{
    constructor(){
        super()
        this.state={
            name:'Moloy'
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount is deleted!")
    }

    render(){
        return(
            <div>
               {/* { this.state.name=='Moloy' ?  console.log("component was created: "+this.state.name) : console.log("state is updated"+this.state.name)} */}
               <button onClick={()=>this.setState({name:"Ram"})}>Update State</button>
            </div>
        )
    }
}

export default Render