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
    const { reference, source, alt, clickFunc } = this.props;
    return (
      <div className={classnames(styles.root)}>
        {source ? (
          <img
            ref={reference}
            onClick={clickFunc && clickFunc}
            src={source}
            alt={alt}
          />
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
