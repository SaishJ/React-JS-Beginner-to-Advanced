import React from "react";
import Person from "./Person";

function PersonList() {
  let data = [
    {
      id: 1,
      name: "Saish",
      skill: "React",
    },
    {
      id: 2,
      name: "Pratik",
      skill: "PHP",
    },
    {
      id: 3,
      name: "Prafulla",
      skill: "Java",
    },
  ];
  let list = data.map((data) => <Person key={data.id} data={data} />);
  return <div>{list}</div>;
}

export default PersonList;

// 1) A "key" is a special string attribute need to include when creating list of elements.
// 2) Keys give the elements a state identity.
// 3) Keys help React identify which item have changed, added, or removed.
// 4) Help in efficient update of the user interface.
