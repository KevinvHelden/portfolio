import React, { PureComponent } from "react";
import styles from "./Card.module.scss";
import classnames from "classnames";

import { Text } from "../";

type Props = {
  data: {
    title: string,
    subtitle: string,
    image: {
      src: string,
      alt: string,
    }
  },
  clickFunc: () => void,
}

class Card extends PureComponent <Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, clickFunc } = this.props;

    return (
      <div onClick={clickFunc && clickFunc} className={classnames(styles.root)}>
        <div className={classnames(styles.imageContainer)}>
          <img
            className={classnames(styles.image)}
            src={data.image.src}
            alt={data.image.alt}
          />
        </div>
        <div className={classnames(styles.title)}>
          <Text variant={"h5"} text={data.title} />
          <Text variant={"p"} text={data.subtitle} strong />
        </div>
      </div>
    );
  }
}

export default Card;
