import React, { Component } from "react";
import Person from "./person";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Moloy",
    };
    this.personHandler=this.personHandler.bind(this)
    console.log(this)
  }

  personHandler() {
    this.setState({ name: "Ram" });
  }

  render() {
    return (
      <div>
        <h2>Event Component </h2>
        <Person name={this.state.name} age="35" />
        <button type="button" onClick={this.personHandler}>
          Click me
        </button>
      </div>
    );
  }
}

export default Event;
