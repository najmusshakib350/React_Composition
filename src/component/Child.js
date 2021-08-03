import React from "react";

function ChildText({ parentText }) {
  return (
    <div>
      <h1>I am child component text</h1>
      {parentText ? <h1>{`${parentText()}`}</h1> : ""}
    </div>
  );
}

export default ChildText;
