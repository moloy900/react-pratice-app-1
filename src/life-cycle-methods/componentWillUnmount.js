import React, { Component } from "react";
import Render from "./render";

class ComponentWillUnMount extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.show ? <Render /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </div>
    );
  }
}

export default ComponentWillUnMount;
