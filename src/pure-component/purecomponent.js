import React from "react";
import { Button } from "react-bootstrap";
import PropsPure from "./propspure";

class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleExecuteIncrease=this.handleExecuteIncrease.bind(this)
    this.handleExecuteDecrease=this.handleExecuteDecrease.bind(this)
  }

  handleExecuteIncrease() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  handleExecuteDecrease(){
    this.setState({
        count:this.state.count - 1
    })
  }


  render() {
    console.log("Check-rendering")
    return (
      <div>
        <h4>Pure Component</h4>
        <PropsPure data={this.state.count}/>
        <Button variant="danger" onClick={this.handleExecuteIncrease}>
          Increase
        </Button>
        <Button variant="warning" onClick={this.handleExecuteDecrease}>Decrease</Button>
      </div>
    );
  }
}

export default PureComponent;
