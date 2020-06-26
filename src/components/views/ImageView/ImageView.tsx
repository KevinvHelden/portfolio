import React, { PureComponent } from "react";
import styles from "./ImageView.module.scss";
import classnames from "classnames";
import noImage from "../../../images/icons/noImage.svg";

type Props = {
  data: {
    image: string,
    alt: string,
  },
  open: boolean,
}

type State = {
  open: boolean,
}

const intialState = Object.freeze({open: false,})

class ImageView extends PureComponent <Props, State> {
  
  readonly state = intialState


  static getDerivedStateFromProps(props: Props) {
    return {
      open: props.open,
    };
  }

  render() {
    const { data } = this.props;
    const { open } = this.state;
    return (
      <div className={classnames(styles.root, {[styles.active] : open})}>
        {data.image ? (
          <div className={classnames(styles.imageContainer)}>
            <img src={data.image} alt={data.alt} />
          </div>
        ) : (
          <div className={classnames(styles.noImageContainer)}>
            <img className={classnames(styles.noImage)} src={noImage} alt={"Nothing has loaded yet"} />
          </div>
        )}
      </div>
    );
  }
}

export default ImageView;
