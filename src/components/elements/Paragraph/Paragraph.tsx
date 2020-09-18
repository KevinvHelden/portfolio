import React, { PureComponent } from "react";
import styles from "./Paragraph.module.scss";
import classnames from "classnames";
import { Text, Image } from "../";
import maximize from "../../../images/icons/maximize.svg";

type Props = {
  title?: string,
  text?: string,
  variant?: 'text' | 'image' | 'textAndImage' | 'textAndVideo',
  image?: string,
  imageAlt?: string | null,
  imageClickFunc?: () => void,
}

class Paragraph extends PureComponent <Props> {
  render() {
    const {
      title = null,
      text = "",
      variant = 'text',
      image = "",
      imageAlt = "",
      imageClickFunc = () => {},
    } = this.props;

    return (
      <section className={classnames(styles.root, title)}>
        {title && <Text variant={"h5"} text={title} />}
        {variant === "text" && (
          <div className={classnames(styles.textContainer)}>
            {<Text text={text} />}
          </div>
        )}
        {variant === "image" && imageAlt && (
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
            {text && <Text text={text} />}
          </div>
        )}
        {variant === "textAndImage" && imageAlt && (
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
      </section>
    );
  }
}

export default Paragraph;
