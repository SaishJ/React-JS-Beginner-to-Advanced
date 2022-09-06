import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Components");
    return <div>PureComp {this.props.name}</div>;
  }
}

export default PureComp;

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
