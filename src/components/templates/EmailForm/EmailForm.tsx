import React, { PureComponent, FormEvent } from "react";
import styles from "./EmailForm.module.scss";
import classnames from "classnames";

import { Input, Textarea, Text } from "../../elements";

type Props = {}

type State = {
  name: string,
  email: string,
  message: string,
}

const initialState = Object.freeze({
  name: "",
  email: "",
  message: "",
})

class EmailForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  saveName = (value: string) => {
    this.setState({ name: value });
  };

  saveEmail = (value: string) => {
    this.setState({ email: value });
  };

  saveMessage = (value: string) => {
    this.setState({ message: value });
  };

  sendEmail = () => {
    const { name, email, message } = this.state;
    alert(`name: ${name}, email: ${email}, message: ${message}`);
  };

  handleSubmit = (event: FormEvent) => {
    this.sendEmail();
    event.preventDefault();
  };

  render() {
    const { handleSubmit, saveName, saveEmail, saveMessage } = this;
    return (
      <form className={classnames(styles.root)} onSubmit={handleSubmit}>
        <Text variant={"h5"} text={"Send me a message!"} />
        <Input type={"text"} placeholder={"Your name"} saveToParent={saveName} />
        <Input type={"email"} placeholder={"Your email address"} saveToParent={saveEmail} />
        <Textarea
          placeholder={"Your question/message"}
          saveToParent={saveMessage}
        />
        <Input type={"submit"} />
      </form>
    );
  }
}

export default EmailForm;
