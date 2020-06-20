import React, { PureComponent } from "react";
import styles from "./Dropdown.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Text, Icon } from "../../elements";

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    large: PropTypes.bool,
    content: PropTypes.array.isRequired,
    clickFunc: PropTypes.func,
  };

  toggleDropdown = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  lowerCaseNoSpaces = (value) => {
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
