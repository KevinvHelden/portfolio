import React, { PureComponent, Fragment } from "react";
import styles from "./Text.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

class Text extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The text variant
     */
    variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"]),
    /**
     * Wether the text should link to something
     */
    link: PropTypes.string,
    /**
     * Strength of text
     */
    strong: PropTypes.bool,
    /**
     * Huge versions of text
     */
    extraLarge: PropTypes.bool,
    clickFunc: PropTypes.func,
  };

  static defaultProps = {
    variant: "p",
    strong: false,
  };

  render() {
    const { text, variant, strong, link, extraLarge, clickFunc } = this.props;
    let ComponentType = variant;

    return (
      <Fragment>
        {link ? (
          <a className={classnames(styles.link)} href={link}>
            <ComponentType
              className={classnames(
                styles.root, styles.link,
                { [styles.strong]: strong },
                { [styles.extraLarge]: extraLarge }
              )}
              onClick={clickFunc}
            >
              {text}
            </ComponentType>
          </a>
        ) : (
          <ComponentType
            className={classnames(
              styles.root,
              { [styles.strong]: strong },
              { [styles.extraLarge]: extraLarge }
            )}
            onClick={clickFunc}
          >
            {text}
          </ComponentType>
        )}
      </Fragment>
    );
  }
}

export default Text;
