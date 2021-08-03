import React from "react";

class ParentText extends React.Component {
  addParentText() {
    return "Add Parent Text";
  }

  render() {
    return this.props.children(this.addParentText);
  }
}

export default ParentText;
