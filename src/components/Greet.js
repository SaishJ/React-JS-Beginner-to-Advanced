import React from "react";

const Greet = ({ name, nickName }) => {
  //Destructure prop in function parameter.

  // const { name, nickName } = props;  //Destructure prop in function body.
  return (
    <div>
      <h1>
        Hello {name} a.k.a {nickName}
      </h1>
    </div>
  );
};

export default Greet;

// Destructure prop in function component.
// 1) pass prop in function parameter
// const Greet = ({name, nickName}) => {
//   return()
// }

// 2) pass prop in function body
// const Greet =(props) => {
//   const (name, nickName) = props;
//   return()
// }
