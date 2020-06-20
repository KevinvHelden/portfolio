import React, { PureComponent } from "react";
import styles from "./Icon.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import icons from "./fixtures/icons";

class Icon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The text variant
     */
    icon: PropTypes.oneOf([
      "mouse",
      "home",
      "homeDeselected",
      "projects",
      "projectsDeselected",
      "mail",
      "mailDeselected",
      "linkedIn",
      "hamburgerClosed",
      "arrowRight",
      "chevronDown",
      "chevronUp",
    ]).isRequired,
    clickFunc: PropTypes.func,
  };

  // static defaultProps = {
  //   variant: "p",
  // };

  render() {
    const { icon, reference, clickFunc } = this.props;
    return (
      <img
        ref={reference}
        onClick={clickFunc}
        className={classnames(styles.root, {
          [styles.vertical]:
            icon === "mouse" ||
            icon === "linkedIn" ||
            icon === "mail" ||
            icon === "mailDeselected" ||
            icon === "chevronDown" ||
            icon === "chevronUp",
        })}
        src={
          (icon === "mouse" && icons.mouse) ||
          (icon === "home" && icons.home) ||
          (icon === "homeDeselected" && icons.homeDeselected) ||
          (icon === "projects" && icons.projects) ||
          (icon === "projectsDeselected" && icons.projectsDeselected) ||
          (icon === "mail" && icons.mail) ||
          (icon === "mailDeselected" && icons.mailDeselected) ||
          (icon === "linkedIn" && icons.linkedIn) ||
          (icon === "hamburgerClosed" && icons.hamburgerClosed) ||
          (icon === "arrowRight" && icons.arrowRight) ||
          (icon === "chevronDown" && icons.chevronDown) ||
          (icon === "chevronUp" && icons.chevronUp)
        }
        alt={icon}
      />
    );
  }
}

export default Icon;
