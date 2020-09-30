import React, { PureComponent } from "react";
import styles from "./Paragraph.module.scss";
import classnames from "classnames";
import { Text, Image } from "../";
import maximize from "../../../images/icons/maximize.svg";
import { getUrl } from '../../../firebase/helpers';

type Props = {
  title?: string,
  text?: string,
  variant?: 'text' | 'image' | 'textAndImage' | 'textAndVideo',
  image: string,
  imageAlt: string,
  imageClickFunc: (image: string, alt: string) => void,
  lifted?: boolean,
  reversed?: boolean,
  imageDescription?: string,
}

type State = {
  image: string,
}

class Paragraph extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  componentDidMount() {
    const { image } = this.props;
    this.getImage("paragraphImages", image);
  }

  componentDidUpdate() {
    const { image } = this.props;
    this.getImage("paragraphImages", image);
  }

  getImage = (folder: string, imageSource: string) => {
    const { image } = this.props;
    getUrl(folder, imageSource).then((src: string) => image !== src && this.setState({
      image: src
    }));
  }

  handleImageClick = () => {
    const { imageAlt, imageClickFunc } = this.props;
    const { image } = this.state;
    imageClickFunc(image, imageAlt);
  }

  render() {
    const {
      title = "",
      text = "",
      variant = 'text',
      imageAlt = "",
      imageClickFunc,
      lifted,
      reversed,
      imageDescription,
    } = this.props;
    const { image } = this.state;
    const { handleImageClick } = this;

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
              <div onClick={handleImageClick} className={classnames(styles.overlay)}>
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
                <div onClick={handleImageClick} className={classnames(styles.overlay)}>
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
