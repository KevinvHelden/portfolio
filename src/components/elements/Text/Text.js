import React, { PureComponent } from "react";
import styles from "./Text.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

class Text extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The text value
     */
    text: PropTypes.string,
    /**
     * The text variant
     */
    variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
    /**
     * The text style decoration
     */
    decoration: PropTypes.oneOf([
      "primary",
      "secondary",
      "tertiary",
      "disabled",
      "colored",
      "error",
      "success",
      "warning",
    ]),
    /**
     * The line-height
     */
    height: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Active text
     */
    active: PropTypes.bool,
    /**
     * Strength of text
     */
    strong: PropTypes.bool,
  };

  static defaultProps = {
    text: null,
    variant: "p",
    decoration: "primary",
    height: "small",
    active: false,
    strong: false
  };

  render() {
    const { text, variant, strong } = this.props;
    let ComponentType = variant;

    return (
      <ComponentType
        className={classnames(styles.root, {[styles.strong] : strong})}
      >
        {text}
      </ComponentType>
    );
  }
}

export default Text;
