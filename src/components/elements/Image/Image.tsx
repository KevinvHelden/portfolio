import React, { PureComponent } from "react";
import styles from "./Image.module.scss";
import classnames from "classnames";
import noImage from "../../../images/icons/noImage.svg";

type Props = {
  source: string,
  alt: string,
  clickFunc?: () => void,
}

class Image extends PureComponent <Props> {
  render() {
    //clickFunc is usually for opening the image in an imageview component
    const { source, alt, clickFunc = () => {} } = this.props;
    return (
      <div onClick={clickFunc && clickFunc} className={classnames(styles.root)}>
        {source ? (
          <img src={source} alt={alt} />
        ) : (
          <img
            className={classnames(styles.noImage)}
            src={noImage}
            alt={"Nothing has loaded yet"}
          />
        )}
      </div>
    );
  }
}

export default Image;
