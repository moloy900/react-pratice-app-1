import React, { Component } from "react";

class Person extends Component {
    constructor(props){
        super(props)
        this.props=props
        console.log("props",props);
        console.log("this.props"+this.props.name)
        console.log(this)
    }
  render() {
    return (
      <div>
        <h2>Person Component </h2>
        <h4>
            <label>Name</label>:<i>{this.props.name}</i>
            <br />
            <label>Age</label>:<i>{this.props.age}</i>
        </h4>
      </div>
    );
  }
}

export default Person;
