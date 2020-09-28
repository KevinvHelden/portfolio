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
  lifted?: boolean,
  reversed?: boolean,
  imageDescription?: string,
}

class Paragraph extends PureComponent<Props> {
  render() {
    const {
      title = "",
      text = "",
      variant = 'text',
      image = "",
      imageAlt = "",
      imageClickFunc = () => { },
      lifted,
      reversed,
      imageDescription,
    } = this.props;

    return (
      <section className={classnames(styles.root, title, { [styles.lifted]: lifted })}>
        {/* ----------------------------------------------------------------------------TEXT */}
        {variant === "text" && (
          <div className={classnames(styles.textContainer)}>
            <Text variant={"h2"} text={title} />
            {<Text text={text} />}
          </div>
        )}
        {/* ----------------------------------------------------------------------------IMAGE */}
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
            <div>
              {imageDescription && <Text text={imageDescription} />}
            </div>
          </div>
        )}
        {/* ----------------------------------------------------------------------TEXT & IMAGE */}
        {variant === "textAndImage" && imageAlt && (
          <div className={classnames(styles.textAndImageContainer, { [styles.reversed]: reversed })}>
            <div className={classnames(styles.textAndImageContainerText)}>
              <Text variant={"h2"} text={title} />
              <Text text={text} />
            </div>
            <div className={classnames(styles.textAndImageContainerImage)}>
              <div className={classnames(styles.imageContainerInner)}>
                <div onClick={imageClickFunc} className={classnames(styles.overlay)}>
                  <div className={classnames(styles.overlay_inner)}>
                    <img src={maximize} alt={"maximize"} />
                    <Text text={"Enlarge"} strong />
                  </div>
                </div>
                <Image
                  source={image}
                  alt={imageAlt}
                />
              </div>
              <div>
                {imageDescription && <Text text={imageDescription} />}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Paragraph;
