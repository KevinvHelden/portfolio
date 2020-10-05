import React, { PureComponent } from "react";
import styles from "./Input.module.scss";
import classnames from "classnames";

type Props = typeof Input.defaultProps & {
  placeholder?: string,
  saveToParent?: (value: string) => void,
  value?: string,
  handleParentChange?: (event: { target: HTMLInputElement }) => void,
}

type State = {
  value: string,
}

class Input extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  static defaultProps = {
    required: true,
    type: "text",
  }

  static getDerivedStateFromProps(props: Props) {
    if(props.value !== undefined){
      return {value: props.value};
    }
  }

  handleChange = (event: { target: HTMLInputElement }) => {
    const { saveToParent } = this.props;
    this.setState({ value: event.target.value });
    saveToParent && saveToParent(event.target.value);
  };

  render() {
    const { placeholder = "", type = "text", required, handleParentChange } = this.props;
    const { value } = this.state;
    const { handleChange } = this;

    return (
      <input
        className={classnames(styles.root)}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleParentChange ? handleParentChange : handleChange}
        required={required}
      />
    );
  }
}

export default Input;
