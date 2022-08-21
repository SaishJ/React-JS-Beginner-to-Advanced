import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.state.count = this.state.count + 1; //state are never modify directly.
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log(this.state.count) //Code has to be executed after the state has been updated. Place that code in the call back function, which is second argument to the setState method.
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log(this.state.count)
    ); //To update state based on previous state value, pass in a function as an argument instead of the regular object.
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Click Me</button>
      </div>
    );
  }
}

export default counter;

// Why use setState
// 1) state are never modify directly. Using setState react re-render component.
// 2) Code has to be executed after the state has been updated. Place that code in the call back function, which is second argument to the setState method.
// 3) To update state based on previous state value, pass in a function as an argument instead of the regular object.
