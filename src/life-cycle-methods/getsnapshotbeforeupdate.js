import React, { Component } from "react";

class GetSnapshotBeforeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      newMessage: "",
    };
    this.listRef = React.createRef();
  }

  componentDidMount() {
    // Simulate adding items to the list over time.
    this.interval = setInterval(() => {
      const { items } = this.state;
      this.setState({
        items: [...items, `Item ${items.length + 1}`],
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Check if new items were added to the list.
    if (prevState.items.length < this.state.items.length) {
      // Capture the current scroll position before the update.
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If there was a snapshot (scroll position), adjust it after the update.
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  handleInputChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  render() {
    const { items, newMessage } = this.state;

    return (
      <div>
        <h1>Scrollable List</h1>
        <div
          ref={this.listRef}
          style={{
            height: "200px",
            overflowY: "auto",
            border: "1px solid #ccc",
          }}
        >
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter a new item"
          value={newMessage}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdate;
