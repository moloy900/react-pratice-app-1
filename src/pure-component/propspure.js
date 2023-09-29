import React from "react";

class PropsPure extends React.PureComponent{
  
    render(){
        console.log("user component check-rendering")
        return(
            <div>
                <h3>PropsPure Component</h3>
                <h3>{this.props.data}</h3>
            </div>
        )
    }
}

export default PropsPure