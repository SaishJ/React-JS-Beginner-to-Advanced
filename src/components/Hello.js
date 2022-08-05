import React from "react";

// With JSX (JavaScript XML)
const Hello = () => {
  return (
    <div className="dummyClass">
      <h1>Hello JSX</h1>
    </div>
  );
};

// Without JSX
// const Hello = () => {
//   return React.createElement(
//     "div",
//     { id: "hello", className: "dummyClass" },
//     React.createElement("h1", null, "Hello React")
//   );
// };

export default Hello;
