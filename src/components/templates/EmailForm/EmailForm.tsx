import React, { PureComponent, FormEvent, Fragment } from "react";
import styles from "./EmailForm.module.scss";
import classnames from "classnames";
import { Textarea, Text, Button, Input } from "../../elements";
import { Modal } from '../../views';

type Props = {}

type State = {
  name: string,
  email: string,
  text: string,
  activeModal: boolean,
}

class EmailForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
      activeModal: false,
    };
  }

  handleName = (event: { target: HTMLInputElement }) => {
    this.setState({ name: event.target.value });
  };

  handleEmail = (event: { target: HTMLInputElement }) => {
    this.setState({ email: event.target.value });
  };

  handleText = (event: { target: HTMLTextAreaElement }) => {
    this.setState({ text: event.target.value });
  };

  eraseInputs = () => {
    this.setState({
      name: "",
      email: "",
      text: "",
    })
  }

  sendEmail = () => {
    const { name, email, text } = this.state;
    const { eraseInputs } = this;
    const sendMail =
      `https://europe-west2-portfolio-website-284917.cloudfunctions.net/sendMail?name=${name}&email=${email}&text=${text}`;
    fetch(sendMail)
      .then(response => response.json())
      .then(() =>
          this.setState({
            activeModal: true
          }, () => eraseInputs()
        )
      )
      .catch((err: any) => {
        console.log(err);
      });
  };

  turnOffModal = () => {
    this.setState({
      activeModal: false,
    })
  };

  handleSubmit = (event: FormEvent) => {
    this.sendEmail();
    event.preventDefault();
  };

  render() {
    const { handleSubmit, turnOffModal, handleName, handleEmail, handleText } = this;
    const { activeModal, name, email, text } = this.state;
    return (
      <Fragment>
        <form className={classnames(styles.root)} onSubmit={handleSubmit}>
          <Text variant={"h5"} text={"Send me a message!"} />
          <Input value={name} handleParentChange={handleName} type={"text"} placeholder={"Your name"} />
          <Input value={email} handleParentChange={handleEmail} type={"email"} placeholder={"Your email address"} />
          <Textarea
            placeholder={"Your question/message"}
            value={text}
            handleParentChange={handleText}
          />
          <Button buttonType={"submit"} text={"Send"} icon={"arrowRightWhite"} />
        </form>
        <Modal isActive={activeModal} title={"Thank you"} text={"Your message has been sent"} icon={"tick"} turnOff={turnOffModal} />
      </Fragment>
    );
  }
}

export default EmailForm;
