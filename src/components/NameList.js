import React from "react";

function NameList() {
  const data = ["Ironman", "Spiderman", "Batman"];
  let lists = data.map((data, index) => (
    <h2 key={index}>
      {index} {data}
    </h2>
  ));
  return <div>{lists}</div>;
}

export default NameList;

// When to use index as key:
// 1) The items in your list do not have a unique id.
// 2) The list is a static list and will not change.
// 3) The list will never be reordered or filtered.
