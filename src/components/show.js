import React,{Component} from "react";

class Show extends Component{
    render(){
        return(
            <div style={{backgroundColor:'darkmagenta',width:'100%',height:'30vh'}}>
                <h1>Show class component</h1>
                <h3>{this.props.data}</h3>
            </div>
        )
    }
}

export default Show