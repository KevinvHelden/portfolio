import React, { PureComponent } from "react";
import styles from "./Paragraph.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Text, Image } from "../";
import maximize from "../../../images/icons/maximize.svg";

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
      imageClickFunc,
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
            <div className={classnames(styles.imageContainerInner)}>
              <div onClick={imageClickFunc} className={classnames(styles.overlay)}>
                <div className={classnames(styles.overlay_inner)}>
                  <img src={maximize} alt={"maximize"} />
                  <Text text={"Enlarge"} strong />
                </div>
              </div>
              {
                <Image
                  source={image}
                  alt={imageAlt}
                />
              }
            </div>
            {imageDescription && <Text text={imageDescription} />}
          </div>
        )}
        {variant === "textAndImage" && (
          <div className={classnames(styles.textAndImageContainer)}>
            {<Text text={text} />}
            <div className={classnames(styles.imageContainerInner)}>
              <div onClick={imageClickFunc} className={classnames(styles.overlay)}>
                <div className={classnames(styles.overlay_inner)}>
                  <img src={maximize} alt={"maximize"} />
                  <Text text={"Enlarge"} strong />
                </div>
              </div>
              {
                <Image
                  source={image}
                  alt={imageAlt}
                />
              }
            </div>
          </div>
        )}
        {children}
      </section>
    );
  }
}

export default Paragraph;
