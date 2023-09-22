import React, { Component } from "react";

class ComponentDidMountAndUpdate extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    increase=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    // componentDidMount(){
    //     console.log("componenentdidMount")
    //     document.title=`class component ${this.state.count}`
    // }

    componentDidUpdate(){
        document.title=`component did update ${this.state.count}`
    }


    render(){
        return(
            <div>
                <h2>ComponentDidMountAndUpdate Component</h2>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}

export default ComponentDidMountAndUpdate