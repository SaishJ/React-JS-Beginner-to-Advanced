import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal Demo</h1>,
    document.getElementById("portal")
  );
}

export default PortalDemo;

/*
Portal:- It is a way to render children into a DOM node that occurs outside the DOM hierarchy
of the parent component.
*/
