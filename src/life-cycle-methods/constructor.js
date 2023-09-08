import React, { Component } from "react";

class Constructor extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
    };
    // console.log(this);
    this.data = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
    <div>
        <h1>Constructor Component</h1>
        <p>{this.state.count}</p>
        <button onClick={this.data}>++</button>
    </div>
    );
  }
}

export default Constructor;
