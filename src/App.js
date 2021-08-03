import React from "react";
import ParentText from "./component/Parent";
import ChildText from "./component/Child";

function App() {
  return (
    <ParentText>
      {(parentText) => {
        return <ChildText parentText={parentText} />;
      }}
    </ParentText>
  );
}
export default App;
