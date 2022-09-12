import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./useContext";

class ComponentB extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <h1>Component B context {this.context}</h1>
        <ComponentC />
      </div>
    );
  }
}

export default ComponentB;

// Context Type
