import React, { PureComponent, Fragment } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";
import { Text, Icon } from "../";

type Props = typeof Button.defaultProps & {
  text: string,
  buttonType?: JSX.IntrinsicElements['button']['type'],
  variant?: string,
  clickFunc?: () => void,
  link?: string,
  disabled?: boolean,
  icon?: string,
}

class Button extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    text: "",
    buttonType: "button",
    variant: "primary",
    disabled: false,
  };

  render() {
    const { text, variant, link, disabled, buttonType, icon } = this.props;

    return (
      <Fragment>
        {link ? (
          <a href={link}>
            <button
              type={buttonType}
              className={classnames(
                styles.root,
                { [styles.primary]: variant === "primary" },
                { [styles.secondary]: variant === "secondary" },
                { [styles.ghost]: variant === "ghost" },
                { [styles.iconButton]: icon },
              )}
              {...(disabled && disabled)}
            >
              <Text text={text} strong />
              {
                icon && <Icon icon={icon} />
              }
            </button>
          </a>
        ) : (
            <button
              type={buttonType}
              {...(disabled && disabled)}
              className={classnames(
                styles.root,
                { [styles.primary]: variant === "primary" },
                { [styles.secondary]: variant === "secondary" },
                { [styles.ghost]: variant === "ghost" },
                { [styles.iconButton]: icon },
              )}
              {...(disabled && disabled)}
            >
              <Text text={text} strong />
              {
                icon && <Icon icon={icon} />
              }
            </button>
          )}
      </Fragment>
    );
  }
}

export default Button;
