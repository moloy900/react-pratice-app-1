import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === this.state.count) {
      // console.log("previous Props:",prevProps.count)
      alert("Data is already the same", prevState.count);
    }
  }

  render() {
    return (
      <div>
        <h1>ComponentDidUpdate</h1>
        <h4>{this.state.count}</h4>
        <button onClick={() => this.setState({ count: 1 })}>Update Data</button>
      </div>
    );
  }
}

export default ComponentDidMount;
