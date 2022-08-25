import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 1 way
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Saish</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // 2 way
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Saish</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    // 3 way
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Saish</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // 4 way
    return this.state.isLoggedIn && "Welcome Saish";
    // if isLoggedIn then it print message otherwise it will be blank.
  }
}

export default UserGreeting;

// There are 4 way for conditional render
// 1) if/else statement
// 2) element variable
// 3) Ternary conditional operator
// 4) Short circuit operator

/* if/else statement not work in JSX. JSX is just syntactic sugar for function calls and object construction. */
// In most cases use 3 or 4 way
