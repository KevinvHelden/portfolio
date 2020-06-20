import React, { PureComponent } from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

import { Text } from "../";

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.cardRef = React.createRef();
  }

  static propTypes = {
    /**
     * The data shown in the card
     */
    data: PropTypes.object,
    /**
     * The function called on click
     */
    clickFunc: PropTypes.func,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { data, clickFunc } = this.props;
    const { cardRef } = this;

    return (
      <div onClick={clickFunc && clickFunc} ref={cardRef} className={classnames(styles.root)}>
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
