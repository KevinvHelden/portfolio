import React, { PureComponent } from "react";
import styles from "./Textarea.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

class Textarea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  static propTypes = {
    /**
     * The textarea placeholder
     */
    placeholder: PropTypes.string,
    /**
     * Saves the value to parent state
     */
    saveToParent: PropTypes.func,
  };

  static defaultProps = {
    placeholder: "Enter text here",
  };

  handleChange = (event) => {
    const {saveToParent} = this.props;
    this.setState({ value: event.target.value });
    saveToParent && saveToParent(event.target.value);
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    const { handleChange } = this;

    return (
      <textarea
        className={classnames(styles.root)}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default Textarea;
