// GetDriveStateFromProps.js
import React, { Component } from "react";
import PropsGetDriveStateFromProps from "./props-getdrivestatefromprops";

class GetDriveStateFromProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps - props:", props);
    // console.log("getDerivedStateFromProps - state:", state);
    console.log(state,props)
    return null; // You typically return an updated state object here
  }

  render() {
    return (
      <div>
        <h1>GetDriveStateFromProps</h1>
        <PropsGetDriveStateFromProps data={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click to Props Update
        </button>
      </div>
    );
  }
}

export default GetDriveStateFromProps;
