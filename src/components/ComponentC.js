import React, { Component } from "react";
import { UserConsumer } from "./useContext";

class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(userName) => {
            return (
              <div>
                <h1>Hello {userName}</h1>
              </div>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
