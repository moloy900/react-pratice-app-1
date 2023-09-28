import React, { Component } from "react";

class FriendStatus extends Component {
  constructor() {
    super();
    this.state = {
      isOnline: 'OnLine',
    };
    this.handleStatus = this.handleStatus.bind(this)
  }

  componentDidMount(){
    this.handleStatus()
  }

  handleStatus = (status) => {
    this.setState({
      isOnline: status.isOnline
    });
  };

  render() {
   
    return(
        <div>
            <h2>FriendStatus component - {this.state.isOnline}</h2>
        </div>
    )
  }
   
}

export default FriendStatus;
