import React from "react";
import ParentText from "./component/Parent";
import ChildText from "./component/Child";
import SubParentText from "./component/SubParentText";
function App() {
  return (
    <ParentText>
      {(parentText) => {
        return (
          <SubParentText>
            {(subparentText) => {
              return (
                <ChildText
                  parentText={parentText}
                  subParentText={subparentText}
                />
              );
            }}
          </SubParentText>
        );
      }}
    </ParentText>
  );
}
export default App;
