import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
