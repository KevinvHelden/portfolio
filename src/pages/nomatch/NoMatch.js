import React, { PureComponent } from "react";
import "./NoMatch.css";

class NoMatch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={"noMatchRoot content"}>
        <span className={"pageTitle"}>
          404
        </span>
        <span className={"pageInfo"}>
          The page wasn't found, my portfolio is still under construction.
        </span>
      </div>
    );
  }
}

export default NoMatch;
