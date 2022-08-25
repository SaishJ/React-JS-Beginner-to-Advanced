import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hii",
    };

    // 3 way
    this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //     // console.log(this);
  //   }

  // 4 way
  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* 1 way */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 2 way */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

// There are 4 ways to Bind event handler.
// 1) binding in render.    => performance implication.
// 2) arrow function in render. => when pass argument.
// 3) binding in class constructor.
// 4) class property as arrow function.
// use 3 or 4 way to bind event handler and when pass argument that time use 2 way
