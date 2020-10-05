import React, { PureComponent } from "react";
import styles from "./Textarea.module.scss";
import classnames from "classnames";

type Props = typeof Textarea.defaultProps & {
  saveToParent?: (value: string) => void,
  value?: string,
  handleParentChange?: (event: { target: HTMLTextAreaElement }) => void,
}

type State = {
  value: string,
}

const initialState = {
  value: "",
}

class Textarea extends PureComponent<Props, State> {

  readonly state = initialState;

  static defaultProps = {
    placeholder: "Enter text here",
    required: true,
  };

  static getDerivedStateFromProps(props: Props) {
    if(props.value !== undefined){
      return {value: props.value};
    }
  }

  handleChange = (event: { target: HTMLTextAreaElement }) => {
    const { saveToParent } = this.props;
    this.setState({ value: event.target.value });
    saveToParent && saveToParent(event.target.value);
  };

  render() {
    const { placeholder, required, handleParentChange } = this.props;
    const { value } = this.state;
    const { handleChange } = this;

    return (
      <textarea
        className={classnames(styles.root)}
        value={value}
        placeholder={placeholder}
        onChange={handleParentChange ? handleParentChange : handleChange}
        required={required}
      />
    );
  }
}

export default Textarea;
