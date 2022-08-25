import React from "react";

function Person({ data }) {
  return (
    <div>
      <h1>
        I am {data.name}. I know {data.skill}.
      </h1>
    </div>
  );
}

export default Person;
