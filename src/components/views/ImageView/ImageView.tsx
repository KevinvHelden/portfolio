import React, { PureComponent } from "react";
import styles from "./ImageView.module.scss";
import classnames from "classnames";
import noImage from "../../../images/icons/noImage.svg";
import { Text } from '../../elements';
import close from "../../../images/icons/close.svg";

type Props = {
  data: {
    image: string,
    alt: string,
  },
  open: boolean,
  closeView: () => void,
}

type State = {
  open: boolean,
}

const intialState = Object.freeze({ open: false, })

class ImageView extends PureComponent<Props, State> {

  readonly state = intialState


  static getDerivedStateFromProps(props: Props) {
    return {
      open: props.open,
    };
  }

  noClickEvent = (e: any) => {
    e.stopPropagation();
  }

  render() {
    const { data, closeView } = this.props;
    const { open } = this.state;
    const { noClickEvent } = this;
    return (
      <div onClick={closeView} className={classnames(styles.root, { [styles.active]: open })}>
        <div className={classnames(styles.exitHeader)}>
          <div onClick={closeView} className={classnames(styles.exitButton)}>
            <Text text={"Close"} strong />
            <img src={close} alt={"close"} />
          </div>
        </div>

        {data.image ? (
          <div className={classnames(styles.imageContainer)}>
            <img onClick={noClickEvent} src={data.image} alt={data.alt} draggable={false} />
          </div>
        ) : (
            <div className={classnames(styles.noImageContainer)}>
              <img onClick={noClickEvent} className={classnames(styles.noImage)} src={noImage} alt={"Nothing has loaded yet"} draggable={false} />
            </div>
          )}
      </div>
    );
  }
}

export default ImageView;
