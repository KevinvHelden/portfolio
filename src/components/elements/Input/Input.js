import React, { PureComponent } from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.type === "submit" ? "Send" : "",
    };
  }

  static propTypes = {
    /**
     * The input name
     */
    name: PropTypes.string,
    /**
     * The placeholder value
     */
    placeholder: PropTypes.string,
    /**
     * The input type
     */
    type: PropTypes.string,
    /**
     * Saves the value to parent state
     */
    saveToParent: PropTypes.func,
  };

  static defaultProps = {
    placeholder: "Enter text here",
    type: "text",
  };

  handleChange = (event) => {
    const {saveToParent} = this.props;
    this.setState({ value: event.target.value });
    saveToParent && saveToParent(event.target.value);
  };

  render() {
    const { name, placeholder, type } = this.props;
    const { value } = this.state;
    const { handleChange } = this;

    return (
      <input
        className={classnames(styles.root)}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default Input;
