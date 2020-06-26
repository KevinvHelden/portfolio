import React, { PureComponent, Fragment } from "react";
import styles from "./Button.module.scss";
import classnames from "classnames";

import { Text } from "../";

type Props = {
  text: string,
  variant: string,
  clickFunc: () => void,
  link: string,
  disabled: boolean,
}

class Button extends PureComponent <Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    text: null,
    variant: "primary",
    disabled: true,
  };

  render() {
    const { text, variant, link, disabled } = this.props;

    return (
      <Fragment>
        {link ? (
          <a href={link}>
            <button
              type={"button"}
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
            type={"button"}
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
