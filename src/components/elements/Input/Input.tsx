import React, { PureComponent } from "react";
import styles from "./Input.module.scss";
import classnames from "classnames";

type Props = {
  placeholder?: string,
  type: string,
  saveToParent?: (value: string) => void,
}

type State = {
  value: string,
}

class Input extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.type === "submit" ? "Send" : "",
    };
  }

  handleChange = (event: { target: HTMLInputElement }) => {
    const { saveToParent } = this.props;
    this.setState({ value: event.target.value });
    saveToParent && saveToParent(event.target.value);
  };

  render() {
    const { placeholder = "", type = "text" } = this.props;
    const { value } = this.state;
    const { handleChange } = this;

    return (
      <input
        className={classnames(styles.root)}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default Input;
