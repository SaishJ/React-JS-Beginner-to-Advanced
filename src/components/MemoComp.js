import React from "react";

function MemoComp({ name }) {
  console.log("Memo Component");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);

// Memo Component
/* 
Pure Component work with class base component do same thing in function component using React.memo
Using memo will cause React to skip re-rendering a component if its props have not changed.
All do in export default React.memo(pass component as argument)
React.memo is high order component.
It is similar to React pure component but it works in function component.
*/
