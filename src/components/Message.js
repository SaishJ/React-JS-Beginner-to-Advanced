import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "Welcome",
    };
  }

  changeMessage() {
    this.setState({
      Message: "Hii",
    });
  }

  render() {
    const { Message } = this.state; //Destructure state.
    return (
      <div>
        <h1>{Message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </div>
    );
  }
}

export default Message;
