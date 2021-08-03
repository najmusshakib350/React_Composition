import React from "react";

class SubParentText extends React.Component {
  addSubParentText() {
    return "Add SubParent Text";
  }

  render() {
    return this.props.children(this.addSubParentText);
  }
}

export default SubParentText;
