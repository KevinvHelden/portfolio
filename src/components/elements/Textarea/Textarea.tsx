import React, { PureComponent } from "react";
import styles from "./Textarea.module.scss";
import classnames from "classnames";

type Props = {
  placeholder: string,
  saveToParent: (value: string) => void,
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
  };

  handleChange = (event: { target: HTMLTextAreaElement }) => {
    const { saveToParent } = this.props;
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
