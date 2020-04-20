import React, { PureComponent, Fragment } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Text } from "../";

class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonRef = React.createRef();
  }

  static propTypes = {
    /**
     * The text value
     */
    text: PropTypes.string,
    /**
     * The button variant
     */
    variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
    /**
     * The onclick function of the button
     */
    onClickFunc: PropTypes.func,
    /**
     * The string for a link on the button
     */
    link: PropTypes.string,
    /**
     * Wether the button is disabled
     */
    disabled: PropTypes.bool,
  };

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
              ref={this.buttonRef}
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
            ref={this.buttonRef}
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
