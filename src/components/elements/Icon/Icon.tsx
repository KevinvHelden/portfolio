import React, { PureComponent, Fragment } from "react";
import styles from "./Icon.module.scss";
import classnames from "classnames";
import icons from "./fixtures/icons";

type Props = {
  icon: string,
  clickFunc: () => void | undefined,
  link?: string,
}


class Icon extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    clickFunc: undefined,
  }

  render() {
    const { icon, clickFunc, link } = this.props;
    return (
      <Fragment>
        {link ?
          (<a href={link}>
            <img
              onClick={clickFunc && clickFunc}
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
                (icon === "chevronUp" && icons.chevronUp) ||
                (icon === "arrowRightWhite" && icons.arrowRightWhite) ||
                (icon === "tick" && icons.tick) ||
                undefined
              }
              alt={icon}
            /></a>

          ) : (

            <img
              onClick={clickFunc && clickFunc}
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
                (icon === "chevronUp" && icons.chevronUp) ||
                (icon === "arrowRightWhite" && icons.arrowRightWhite) ||
                (icon === "tick" && icons.tick) ||
                undefined
              }
              alt={icon}
            />)}
      </Fragment>
    );
  }
}

export default Icon;
