import React, { PureComponent } from "react";
import styles from "./Modal.module.scss";
import classnames from "classnames";
import { Text, Icon } from "../../elements";

type Props = {
  title: string,
  text: string,
  icon: string,
  isActive: boolean,
  turnOff: () => void,
}

type State = {
  isActive: boolean,
}

class Modal extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  componentDidUpdate() {
    this.showModal();
  }

  static getDerivedStateFromProps(props: Props) {
    return {
      isActive: props.isActive,
    };
  }

  showModal = () => {
    const { isActive } = this.state;
    const { turnOff } = this.props;
    const modal = document.getElementById("modalRoot");
    if (modal && isActive === true) {
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.transform = "scale(1)";
        modal.style.opacity = "1";
      }, 150);
      setTimeout(() => {
        modal.style.opacity = "0";
        setTimeout(() => {
          modal.style.display = "none";
          modal.style.transform = "scale(0.8)";
        }, 150);

        turnOff();
      }, 3000);
    }
  }

  render() {
    const { title, text, icon } = this.props;

    return (
      <div id={"modalRoot"} className={classnames(styles.root)}>
        <Text variant={"h4"} text={title} />
        <div className={classnames(styles.modalInner)}>
          <Text text={text} />
          <Icon icon={icon} />
        </div>
      </div>
    );
  }
}

export default Modal;
