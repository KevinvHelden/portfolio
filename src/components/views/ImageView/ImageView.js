import React, { PureComponent } from "react";
import styles from "./ImageView.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import noImage from "../../../images/icons/noImage.svg";

class ImageView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  /* 
  * PropTypes
  ================================================================
  */
  static propTypes = {
    /**
     * The data used to preview the image
     */
    data: PropTypes.object.isRequired,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      open: nextProps.open,
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
