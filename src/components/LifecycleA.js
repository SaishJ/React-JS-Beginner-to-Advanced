import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saish",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "SJ",
    });
  };

  render() {
    console.log("LifecucleA render");
    return (
      <div>
        <h1>LifecycleA</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

// Component Lifecycle Methods:
/* 
1) Mounting:- When an instance of a component is being created and inserted into the DOM.
        Methods:- constructor, static getDerivedStateFromProps, render, componentDidMount
2) Updating:- When a component is being re-renedred as a result of changes to either its props or state.
        Methods:- static getDerivedStateFromProps, shouldComponentUpdate, render, 
                  getSnapshotBeforeUpdate, componentDidUpdate
3) Unmounting:- When a component is being removed from DOM.
        Methods:- componentWillUnmount
4) Error Handling:- When there is an error during rendering in a lifecycle method or in the 
                    constructor of any child component.
        Methods:- static getDerivedStateFromError, componentDidCatch
*/
