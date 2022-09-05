import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saish",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Saish",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component");
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

// Pure Component
/*
ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is 
no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares 
current state and props with new props and states to decide whether the React component should 
re-render itself or Not.
If the previous value of state or props and the new value of state or props is the same, the 
component will not re-render itself. Since Pure Components restricts the re-rendering when there 
is no use of re-rendering of the component. Pure Components are Class Components which extends 
React.PureComponent.
*/
