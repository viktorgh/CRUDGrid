import React    from "react";
import template from "./CrudGrid.jsx";

class CrudGrid extends React.Component {
  render() {
    return template.call(this);
  }
}

export default CrudGrid;
