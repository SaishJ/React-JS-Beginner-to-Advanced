import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, nickName } = this.props;
    return (
      <div>
        <h1>
          Hello {name} a.k.a {nickName}
        </h1>
        {/* {this.props.children} */}
      </div>
    );
  }
}

export default Welcome;
