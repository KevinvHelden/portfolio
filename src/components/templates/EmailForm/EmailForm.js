import React, { PureComponent } from "react";
import styles from "./EmailForm.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Input, Textarea } from "../../elements";

class EmailForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  static propTypes = {
    /**
     * The text value
     */
    text: PropTypes.string,
  };

  static defaultProps = {
    text: null,
  };

  saveName = (value) => {
    this.setState({ name: value });
  };

  saveEmail = (value) => {
    this.setState({ email: value });
  };

  saveMessage = (value) => {
    this.setState({ message: value });
  };

  sendEmail = () => {
    const { name, email, message } = this.state;
    alert(`name: ${name}, email: ${email}, message: ${message}`);
  };

  handleSubmit = (event) => {
    this.sendEmail();
    event.preventDefault();
  };

  render() {
    const { handleSubmit, saveName, saveEmail, saveMessage } = this;
    return (
      <form className={classnames(styles.root)} onSubmit={handleSubmit}>
        <Input placeholder={"Your name"} saveToParent={saveName} />
        <Input placeholder={"Your email address"} saveToParent={saveEmail} />
        <Textarea
          placeholder={"Your comment/message"}
          saveToParent={saveMessage}
        />
        <Input type={"submit"} placeholder={"Your email address"} />
      </form>
    );
  }
}

export default EmailForm;
