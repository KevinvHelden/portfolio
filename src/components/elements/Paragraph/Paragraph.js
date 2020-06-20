import React, { PureComponent } from "react";
import styles from "./Paragraph.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Text, Image } from "../";

class Paragraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The children of the text
     */
    children: PropTypes.node,
    /**
     * The title value
     */
    title: PropTypes.string,
    /**
     * The way of presenting the children
     */
    variant: PropTypes.oneOf(["text", "image", "textAndImage", "textAndVideo"]),
    /**
     * The image is shown left instead of right
     */
    imageLeft: PropTypes.bool,
    /**
     * The image has a description below it
     */
    imageDescription: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    title: null,
    text: null,
    type: "text",
  };

  render() {
    const {
      title,
      children,
      text,
      variant,
      image,
      imageAlt,
      imageLeft,
      imageDescription,
    } = this.props;

    return (
      <section className={classnames(styles.root, title)}>
        {title && <Text variant={"h2"} text={title} />}
        {variant === "text" && (
          <div className={classnames(styles.textContainer)}>
            {<Text text={text} />}
          </div>
        )}
        {variant === "image" && (
          <div className={classnames(styles.imageContainer)}>
            {<Image source={image} alt={imageAlt} />}
            {imageDescription && <Text text={imageDescription} />}
          </div>
        )}
        {variant === "textAndImage" && (
          <div className={classnames(styles.textAndImageContainer)}>
            {<Text text={text} />}
            {<Image source={image} alt={imageAlt} />}
          </div>
        )}
        {children}
      </section>
    );
  }
}

export default Paragraph;
