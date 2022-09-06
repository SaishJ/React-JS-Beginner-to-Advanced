import React, { Component } from "react";

export class RefDemo2 extends Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInput = (element) => {
      this.textInput = element;
    };
  }

  componentDidMount() {
    // Focus the text input using the raw DOM API
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text" ref={this.setTextInput} />
      </div>
    );
  }
}

export default RefDemo2;

// Ref in React using Callback Ref
