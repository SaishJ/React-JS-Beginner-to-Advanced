import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default Increment;

/*
Sharing common functionality between components.
The term "render prop" refers to a technique for sharing code between React components using a prop whosevalue is a function. 
*/
