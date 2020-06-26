import React, { PureComponent } from "react";
import styles from "./Dropdown.module.scss";
import classnames from "classnames";

import { Text, Icon } from "../../elements";

type Props = {
  title: string,
  large: boolean,
  content: string[],
  clickFunc: () => void,
}

type State = {
  open: boolean,
}

const initialState = {
  open: false,
}

class Dropdown extends PureComponent <Props, State> {

  readonly state = initialState

  toggleDropdown = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  lowerCaseNoSpaces = (value: string) => {
    return value.toLowerCase().replace(/\s/g, "");
  };

  formatContent = () => {
    const { content, clickFunc, title } = this.props;
    const { lowerCaseNoSpaces } = this;
    return content.map((item) => (
      <Text
        link={`#${lowerCaseNoSpaces(title)}-${lowerCaseNoSpaces(item)}`}
        variant={"h5"}
        text={item}
        clickFunc={clickFunc}
      />
    ));
  };

  render() {
    const { title, large } = this.props;
    const { open } = this.state;
    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.title)} onClick={this.toggleDropdown}>
          <Text variant={large ? "h2" : "p"} text={title} />
          <Icon icon={open ? "chevronUp" : "chevronDown"} />
        </div>
        <div className={classnames(styles.content, { [styles.open]: open })}>
          {this.formatContent()}
        </div>
      </div>
    );
  }
}

export default Dropdown;
