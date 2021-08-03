import React from "react";

function ChildText({ parentText, subParentText }) {
  return (
    <div>
      <h1>I am child component text</h1>
      {parentText ? <h1>{`${parentText()}`}</h1> : ""}
      {subParentText ? <h1>{`${subParentText()}`}</h1> : ""}
    </div>
  );
}

export default ChildText;
