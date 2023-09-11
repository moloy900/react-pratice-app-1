import React, { Component } from "react";

class ShouldComponentUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
    };
  }

  shouldComponentUpdate() {
    console.log("Data updated:", this.state.count);
    if (this.state.count > 5 || this.state.count <= 1) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <h1>ShouldComponentUpdate Component</h1>
        <h4>{this.state.count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ++
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          --
        </button>
      </div>
    );
  }
}

export default ShouldComponentUpdate;
