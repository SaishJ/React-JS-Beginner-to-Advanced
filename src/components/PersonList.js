import React from "react";
import Person from "./Person";

function PersonList() {
  let data = [
    {
      name: "Saish",
      skill: "React",
    },
    {
      name: "Pratik",
      skill: "PHP",
    },
    {
      name: "Prafulla",
      skill: "Java",
    },
  ];
  let list = data.map((data) => <Person data={data} />);
  return <div>{list}</div>;
}

export default PersonList;
