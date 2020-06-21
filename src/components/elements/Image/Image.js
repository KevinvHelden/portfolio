import React, { PureComponent } from "react";
import styles from "./Image.module.css";
import classnames from "classnames";
import noImage from "../../../images/icons/noImage.svg";

class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //clickFunc is usually for opening the image in an imageview component
    const { reference, source, alt, clickFunc } = this.props;
    return (
      <div onClick={clickFunc && clickFunc} className={classnames(styles.root)}>
        {source ? (
          <img ref={reference} src={source} alt={alt} />
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
