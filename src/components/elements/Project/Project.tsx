import React, { PureComponent } from "react";
import styles from "./Project.module.scss";
import classnames from "classnames";
import loadingImage from "../../../images/icons/noImage.svg";

import { Text } from "../";

type Props = {
  data: {
    title: string,
    tags: string,
    description: string,
    image: {
      src: string,
      alt: string,
    }
  },
  alignment?: string,
  clickFunc: () => void,
}

class Project extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, clickFunc, alignment } = this.props;

    return (
      <div className={classnames(styles.root, { [styles.left]: alignment === "left" })}>
        <div className={classnames(styles.title)}>
          <Text variant={"p"} text={data.tags} strong />
          <Text variant={"h2"} text={data.title} />
          <Text variant={"p"} text={data.description} />
          <Text clickFunc={clickFunc && clickFunc} variant={"p"} text={"Read more"} strong />
        </div>
        <div className={classnames(styles.imageView)}>
          <div className={classnames(styles.imageContainer)}>
            {data.image.src ?
              <img
                className={classnames(styles.image)}
                src={data.image.src}
                alt={data.image.alt}
              />
              :
              <img className={classnames(styles.imagePlaceholder)} src={loadingImage} alt={"imageNotLoaded"} />
            }
          </div>
          <div className={classnames(styles.outline)} />
        </div>

      </div>
    );
  }
}

export default Project;
