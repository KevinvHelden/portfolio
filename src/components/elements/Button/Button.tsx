import React, { PureComponent, Fragment } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";
import { Text } from "../";

type Props = typeof Button.defaultProps & {
  text: string,
  buttonType?: JSX.IntrinsicElements['button']['type'],
  variant?: string,
  clickFunc?: () => void,
  link?: string,
  disabled?: boolean,
}

class Button extends PureComponent <Props> {
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
    const { text, variant, link, disabled, buttonType } = this.props;

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
                { [styles.ghost]: variant === "ghost" }
              )}
              {...(disabled && disabled)}
            >
              <Text text={text} strong />
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
              { [styles.ghost]: variant === "ghost" }
            )}
            {...(disabled && disabled)}
          >
            <Text text={text} strong />
          </button>
        )}
      </Fragment>
    );
  }
}

export default Button;
