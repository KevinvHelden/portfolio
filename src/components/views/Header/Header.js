import React, { PureComponent } from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Text } from "../../elements";

import Logo from "../../../images/icons/logo_white.svg";
import Instagram from "../../../images/icons/instagram.svg";
import LinkedIn from "../../../images/icons/linkedin.svg";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * -
     */
    default: PropTypes.node,
  };

  static defaultProps = {
    default: null,
  };

  render() {
    return (
      <div className={classnames(styles.root)}>
        <a href={"/"}>
          <img src={Logo} alt={"Logo"} />
        </a>
        <div className={classnames(styles.navigation)}>
          <Text text={"Work"} link={"/projects"} strong />
          <Text text={"Contact"} link={"/contact"} strong />
        </div>
        <div className={classnames(styles.social)}>
          <img src={Instagram} alt={"Instagram"} />
          <img src={LinkedIn} alt={"Linked In"} />
        </div>
      </div>
    );
  }
}

export default Header;
